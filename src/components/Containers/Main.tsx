import { JsonObject } from "@prisma/client/runtime/library";

const Main = ({
  children,
  bgCss,
}: {
  children: React.ReactNode;
  bgCss?: JsonObject;
}) => {
  return <main style={{ ...bgCss }}>{children}</main>;
};

export default Main;
