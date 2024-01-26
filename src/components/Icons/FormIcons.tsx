"use client";
import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

import { TypesIcons } from "./TypesIcons";

const FormIcons = ({
  details,
  setDetails,
}: {
  details: TypesIcons;
  setDetails: Dispatch<SetStateAction<TypesIcons>>;
}) => {
  return (
    <>
      {Object.keys(details).map((d) => {
        const value = details[d as keyof TypesIcons];
        return (
          <div key={d} className="flex">
            <input
              type="text"
              placeholder={d}
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

export default FormIcons;
