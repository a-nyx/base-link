"use client";
import { signOut } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Login from "./Login";
import Loading from "./Loading";
import { TypeUser } from "@components/index";

const Publish = ({
  user,
  setUser,
  status,
  fetchPhase,
  setFetchPhase,
}: {
  user: TypeUser;
  setUser: Dispatch<SetStateAction<TypeUser>>;
  status: string;
  fetchPhase: "no-login" | "initial" | "should-update";
  setFetchPhase: Dispatch<
    SetStateAction<"no-login" | "initial" | "should-update">
  >;
}) => {
  const [slug, setSlug] = useState(user.slug);
  const [slugResult, setSlugResult] = useState("");

  useEffect(() => setSlug(user.slug), [user]);

  useEffect(() => {
    // on login
    if (status !== "authenticated" || fetchPhase !== "no-login") return;
    const fetchUser = async () => {
      const response = await fetch("craft/api/user").then((r) => r.json());
      if (response.error) {
        console.log(response.error);
        return;
      }
      // console.log(response.user);
      setUser(response.user);
      setFetchPhase("initial");
    };
    fetchUser();
  }, [status, fetchPhase, setUser, setFetchPhase]);

  if (status === "unauthenticated") return <Login />;
  if (status === "loading" || fetchPhase === "no-login") return <Loading />;

  const claimSlug = async () => {
    setSlugResult("checking...");
    const response = await fetch("craft/api/slug", {
      method: "POST",
      body: JSON.stringify({
        newSlug: slug,
      }),
    }).then((r) => r.json());

    if (response.error) {
      setSlugResult(response.error);
      return;
    }

    setSlugResult("saved.");
    setUser(response.user);
  };

  return (
    <div className="flex min-h-[100vh] flex-col justify-center">
      <div>
        <div className="flex justify-between">
          <label
            htmlFor="profile-slug"
            className="block text-sm font-medium leading-6 text-gray-900">
            What is your address?
          </label>
          <button
            className="btn btn-warning  btn-xs"
            disabled={slug === user.slug}
            onClick={claimSlug}>
            Claim
          </button>
        </div>
        <div className="mt-2">
          <div className="flex rounded-md ring-1 ring-inset ring-black">
            <span className="flex min-w-fit select-none items-center pl-3 text-gray-500 sm:text-sm">
              base-link.vercel.app/
            </span>
            <input
              type="text"
              name="profile-slug"
              id="profile-slug"
              className="block border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Only lowercase letters and hyphen allowed.
        </p>
        <p className="mt-2 text-sm text-gray-500">{slugResult}</p>
      </div>

      <button
        className={`btn btn-lg mx-auto my-16 flex text-white ${user.isPublished ? "btn-error" : "btn-success"}`}
        onClick={() =>
          setUser((prev) => ({ ...prev, isPublished: !prev.isPublished }))
        }>
        {user.isPublished ? "UNPUBLISH" : "PUBLISH"}
      </button>

      <p
        className="link-hover my-4 cursor-pointer text-center text-sm text-gray-500"
        onClick={() => signOut()}>
        sign out
      </p>
      <p
        className="link-hover my-4 cursor-pointer text-center text-sm text-gray-500"
        onClick={() => {
          fetch("craft/api/user", {
            method: "DELETE",
          });
          signOut({ callbackUrl: "/" });
        }}>
        delete your account
      </p>
    </div>
  );
};

export default Publish;
