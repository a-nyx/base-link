import Link from "next/link";
import prisma from "@root/prisma/dbClient";

import { ContainerMobile, Main } from "@components/index";

const Page = async () => {
  const profiles = await prisma.user.findMany({
    where: {
      isDemo: true,
    },
    orderBy: { name: "asc" },
    select: {
      name: true,
      slug: true,
    },
  });

  return (
    <Main
      bgCss={{
        backgroundColor: "#77aa77",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 2 1'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2377aa77'/%3E%3Cstop offset='1' stop-color='%234fd'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'%3E%3Cstop offset='0' stop-color='%23cf8' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23cf8' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='2' height='1'/%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23b)' points='0 1 0 0 2 0'/%3E%3Cpolygon fill='url(%23c)' points='2 1 2 0 0 0'/%3E%3C/g%3E%3C/svg%3E\")",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}>
      <ContainerMobile>
        <h1 className="text-center text-4xl font-bold text-white">Base Link</h1>
        <p className="text-center text-xl text-white">Your link universe.</p>

        <div className="container my-4 text-center">
          <Link href="/craft" className="btn btn-secondary btn-lg">
            Craft Your Own
          </Link>
        </div>

        <h2 className="mt-12 text-center text-xl text-black">Demo Profiles</h2>

        <ul className="menu mx-auto w-fit bg-transparent">
          {profiles.map((p) => (
            <li key={p.slug} className="btn btn-warning my-2 rounded p-0">
              <Link
                href={p.slug}
                className="w-full justify-center p-4 font-bold">
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </ContainerMobile>
    </Main>
  );
};

export default Page;
