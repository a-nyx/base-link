"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { IoMdClose, IoIosAdd } from "react-icons/io";

import { TypesList } from "./TypesList";

const FormList = ({
  details,
  setDetails,
}: {
  details: TypesList;
  setDetails: Dispatch<SetStateAction<TypesList>>;
}) => {
  const { title, links } = details;
  const [newLink, setNewLink] = useState({ label: "", href: "" });

  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="title"
          className="input input-bordered input-sm flex-grow"
          value={title}
          onChange={(e) =>
            setDetails((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <button
          className="btn btn-circle btn-sm"
          disabled={title === ""}
          onClick={() => setDetails((prev) => ({ ...prev, title: "" }))}>
          <IoMdClose />
        </button>
      </div>
      {links.map((link, i) => {
        return (
          <div key={`link-${i}`} className="flex flex-wrap">
            <input
              type="text"
              placeholder="link label"
              className="input input-bordered input-sm mb-2 flex-grow"
              value={link.label}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  links: links.toSpliced(i, 1, {
                    label: e.target.value,
                    href: link.href,
                  }),
                }))
              }
            />
            <button
              type="button"
              className="btn btn-circle btn-sm"
              onClick={() => {
                setDetails((prev) => ({
                  ...prev,
                  links: prev.links.toSpliced(i, 1),
                }));
              }}>
              <IoMdClose />
            </button>
            <input
              type="text"
              placeholder="link address"
              className="input input-bordered input-sm flex-grow"
              value={link.href}
              onChange={(e) =>
                setDetails((prev) => ({
                  ...prev,
                  links: prev.links.toSpliced(i, 1, {
                    label: link.label,
                    href: e.target.value,
                  }),
                }))
              }
            />
          </div>
        );
      })}
      <div className="flex flex-wrap">
        <input
          type="text"
          placeholder="new link label"
          className="input input-bordered input-sm mb-2 flex-grow"
          value={newLink.label}
          onChange={(e) =>
            setNewLink((prev) => ({
              ...prev,
              label: e.target.value,
            }))
          }
        />
        <button
          type="button"
          className="btn btn-circle btn-sm bg-green-500"
          disabled={!newLink.label || !newLink.href}
          onClick={() => {
            setDetails((prev) => ({
              ...prev,
              links: [...prev.links, { ...newLink }],
            }));
            setNewLink({ href: "", label: "" });
          }}>
          <IoIosAdd />
        </button>
        <input
          type="text"
          placeholder="new link address"
          className="input input-bordered input-sm flex-grow"
          value={newLink.href}
          onChange={(e) =>
            setNewLink((prev) => ({
              ...prev,
              href: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
};

export default FormList;
