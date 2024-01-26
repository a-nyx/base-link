"use client";
import { SessionProvider } from "next-auth/react";

import { Craft } from "@components/index";

const Page = () => {
  return (
    <SessionProvider>
      <Craft />
    </SessionProvider>
  );
};

export default Page;
