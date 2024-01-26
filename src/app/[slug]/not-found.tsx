import prisma from "@root/prisma/dbClient";

import {
  ContainerMobile,
  Icons,
  Intro,
  List,
  Main,
  TypesDetails,
  TypesIcons,
  TypesIntro,
  TypesList,
  componentIds,
} from "@components/index";
import { JsonObject } from "@prisma/client/runtime/library";

const Page = async () => {
  const profile = await prisma.user.findUnique({
    where: { slug: "not-found" },
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

  return (
    <Main bgCss={profile!.bgCss as JsonObject}>
      <ContainerMobile>
        {profile!.components.map((c, i) => {
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
