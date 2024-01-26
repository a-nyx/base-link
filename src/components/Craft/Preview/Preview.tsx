import {
  Icons,
  Intro,
  List,
  TypesComponent,
  TypesDetails,
  TypesIcons,
  TypesIntro,
  TypesList,
  componentIds,
} from "@components/index";

const Preview = ({ components }: { components: TypesComponent[] }) => {
  return (
    <>
      {components.map((c, i) => {
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
    </>
  );
};

export default Preview;
