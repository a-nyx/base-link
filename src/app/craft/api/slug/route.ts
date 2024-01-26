import prisma from "@root/prisma/dbClient";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const POST = async (request: Request) => {
  const session = await getServerSession();
  const body = await request.json();
  const newSlug = body.newSlug;

  if (!session || !session.user?.email || !newSlug) {
    return NextResponse.json(
      { error: "Couldn't update slug." },
      { status: 500 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { slug: newSlug },
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "Slug is not available." },
      { status: 200 }
    );
  }

  const oldUser = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      slug: true,
    },
  });

  const user = await prisma.user.update({
    where: { email: session.user.email },
    data: { slug: newSlug },
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

  if (oldUser) revalidatePath(`/${oldUser.slug}`, "page");
  revalidatePath(`/${newSlug}`, "page");

  return NextResponse.json({ user }, { status: 200 });
};

export { POST };
