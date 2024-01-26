"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import {
  Main,
  ContainerMobile,
  Editor,
  BottomNav,
  Publish,
  Preview,
  TypeUser,
  ComponentsTemplate,
  MetadataTemplate,
} from "@components/index";

const Craft = () => {
  const { status } = useSession();
  const [tab, setTab] = useState(3);
  const [fetchPhase, setFetchPhase] = useState<
    "no-login" | "initial" | "should-update"
  >("no-login");
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const [user, setUser] = useState<TypeUser>({
    ...MetadataTemplate,
    components: ComponentsTemplate,
  });

  useEffect(() => {
    if (fetchPhase === "no-login") return;
    if (fetchPhase === "initial") {
      setFetchPhase("should-update");
      return;
    }
    clearTimeout(timer);
    const updateUser = async () => {
      await fetch("craft/api/user", {
        method: "POST",
        body: JSON.stringify({
          isPublished: user.isPublished,
          bgCss: user.bgCss,
          components: user.components,
        }),
      })
        .then((r) => r.json())
        .catch((e) => {
          // console.log({ e });
        });
    };
    setTimer(setTimeout(updateUser, 2000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isPublished, user.bgCss, user.components]);

  return (
    <Main bgCss={user.bgCss}>
      <ContainerMobile>
        {tab === 1 && <Preview components={user.components} />}
        {tab === 2 && <Editor user={user} setUser={setUser} status={status} />}
        {tab === 3 && (
          <Publish
            user={user}
            setUser={setUser}
            status={status}
            fetchPhase={fetchPhase}
            setFetchPhase={setFetchPhase}
          />
        )}
        <BottomNav tab={tab} setTab={setTab} />
      </ContainerMobile>
    </Main>
  );
};

export default Craft;
