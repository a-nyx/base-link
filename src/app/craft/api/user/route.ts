// get user, post user, delete user
import prisma from "@root/prisma/dbClient";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
import { ComponentsTemplate, TypesComponent } from "@root/src/components";

const generateSlug = () => {
  let slug = "";
  const charSet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 6; i++) {
    slug += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return slug;
};

const GET = async () => {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "No session found." }, { status: 500 });
  }

  let slug;
  do {
    slug = generateSlug();
  } while (
    await prisma.user.findUnique({
      where: {
        slug,
      },
    })
  );

  const user = await prisma.user.upsert({
    where: {
      email: session.user.email,
    },
    update: {},
    create: {
      email: session.user.email,
      slug,
      name: "main",
      bgCss: {
        backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
      },
      isPublished: false,
      isDemo: false,
      components: {
        create: ComponentsTemplate.map((c, i) => ({
          order: i,
          type: c.type,
          details: c.details,
        })),
      },
    },
    select: {
      email: true,
      name: true,
      slug: true,
      isPublished: true,
      isDemo: true,
      bgCss: true,
      components: {
        orderBy: { order: "asc" },
        select: {
          type: true,
          details: true,
        },
      },
    },
  });

  return NextResponse.json({ user }, { status: 200 });
};

const POST = async (request: Request) => {
  const session = await getServerSession();
  const data = await request.json();

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "No session found." }, { status: 500 });
  }

  const user = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      isPublished: data.isPublished || false,
      bgCss: data.bgCss || {},
      components: {
        deleteMany: {},
        create:
          data.components.map((c: TypesComponent, i: number) => ({
            type: c.type,
            details: c.details,
            order: i,
          })) || [],
      },
    },
    select: {
      email: true,
      name: true,
      slug: true,
      isPublished: true,
      isDemo: true,
      bgCss: true,
      components: {
        orderBy: { order: "asc" },
        select: {
          type: true,
          details: true,
        },
      },
    },
  });

  revalidatePath(`/${user.slug}`, "page");

  return NextResponse.json({ user }, { status: 200 });
};

const DELETE = async () => {
  const session = await getServerSession();

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "No session found." }, { status: 500 });
  }

  const user = await prisma.user.delete({
    where: {
      email: session.user.email,
    },
    select: {
      slug: true,
    },
  });

  revalidatePath(`/${user.slug}`, "page");

  return NextResponse.json({ message: "User deleted" }, { status: 200 });
};

export { GET, POST, DELETE };
