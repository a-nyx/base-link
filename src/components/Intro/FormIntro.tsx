"use client";
import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

import { TypesIntro } from "./TypesIntro";

const FormIntro = ({
  details,
  setDetails,
}: {
  details: TypesIntro;
  setDetails: Dispatch<SetStateAction<TypesIntro>>;
}) => {
  return (
    <>
      {Object.keys(details).map((d) => {
        const value = details[d as keyof TypesIntro];
        return (
          <div key={d} className="flex">
            <input
              type="text"
              placeholder={d === "name" ? "Your Name" : "Headline"}
              className="input input-bordered input-sm flex-grow"
              value={value}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, [d]: e.target.value }))
              }
            />
            <button
              className="btn btn-circle btn-sm"
              disabled={value === ""}
              onClick={() => setDetails((prev) => ({ ...prev, [d]: "" }))}>
              <IoMdClose />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FormIntro;
