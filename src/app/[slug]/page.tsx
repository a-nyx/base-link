import { notFound } from "next/navigation";
import { JsonObject } from "@prisma/client/runtime/library";

import prisma from "@root/prisma/dbClient";
import {
  componentIds,
  Icons,
  Intro,
  List,
  Main,
  ContainerMobile,
  TypesIntro,
  TypesIcons,
  TypesList,
  TypesDetails,
} from "@components/index";

export const dynamic = "force-dynamic"; // to remove the pages with old slugs
const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const profile = await prisma.user.findUnique({
    where: { slug: slug, isPublished: true },
    select: {
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

  if (!profile) notFound();

  return (
    <Main bgCss={profile.bgCss as JsonObject}>
      <ContainerMobile>
        {profile.components.map((c, i) => {
          const details = c.details as TypesDetails;
          const key = `component-${i}`;

          switch (c.type) {
            case componentIds.intro:
              return <Intro key={key} details={details as TypesIntro} />;
            case componentIds.icons:
              return <Icons key={key} details={details as TypesIcons} />;
            case componentIds.list:
              return <List key={key} details={details as TypesList} />;
            default:
              return null;
          }
        })}
      </ContainerMobile>
    </Main>
  );
};

export default Page;

export async function generateStaticParams() {
  const profiles = await prisma.user.findMany({
    select: {
      slug: true,
    },
  });

  return profiles.map((profile) => ({
    slug: profile.slug,
  }));
}
