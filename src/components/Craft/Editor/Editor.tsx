"use client";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import {
  Editable,
  FormContainer,
  Icons,
  Intro,
  List,
  TypeUser,
  TypesIcons,
  TypesIntro,
  TypesList,
  componentIds,
} from "@components/index";

const bgOptions = [
  {
    name: "solid1",
    bgCss: {
      backgroundColor: "#8ecae6",
    },
  },
  {
    name: "solid2",
    bgCss: {
      backgroundColor: "#f5ebe0",
    },
  },
  {
    name: "solid3",
    bgCss: {
      backgroundColor: "#e9edc9",
    },
  },
  {
    name: "solid4",
    bgCss: {
      backgroundColor: "#f6bd60",
    },
  },
  {
    name: "solid5",
    bgCss: {
      backgroundColor: "#e4c1f9",
    },
  },
  {
    name: "gradient1",
    bgCss: {
      backgroundColor: "#8EC5FC",
      backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    },
  },
  {
    name: "gradient2",
    bgCss: {
      backgroundColor: "#D9AFD9",
      backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    },
  },
  {
    name: "gradient3",
    bgCss: {
      backgroundColor: "#FFDEE9",
      backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    },
  },
  {
    name: "gradient4",
    bgCss: {
      backgroundColor: "#FAACA8",
      backgroundImage: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
    },
  },
  {
    name: "gradient5",
    bgCss: {
      backgroundColor: "#74EBD5",
      backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
    },
  },
];

const Editor = ({
  user,
  status,
  setUser,
}: {
  user: TypeUser;
  status: string;
  setUser: Dispatch<SetStateAction<TypeUser>>;
}) => {
  const [showAlert, setShowAlert] = useState(true);
  const [editingIndex, setEditingIndex] = useState(-1);

  const removeComponent = useCallback(
    (index: number) => {
      setUser((prev) => ({
        ...prev,
        components: prev.components.toSpliced(index, 1),
      }));
    },
    [setUser]
  );

  const moveUpComponent = useCallback(
    (index: number) => {
      setUser((prev) => {
        const next = [...prev.components];
        [next[index], next[index - 1]] = [next[index - 1], next[index]];
        return {
          ...prev,
          components: next,
        };
      });
    },
    [setUser]
  );

  const moveDownComponent = useCallback(
    (index: number) => {
      setUser((prev) => {
        const next = [...prev.components];
        [next[index], next[index + 1]] = [next[index + 1], next[index]];
        return {
          ...prev,
          components: next,
        };
      });
    },
    [setUser]
  );

  const duplicateComponent = useCallback(
    (index: number) => {
      setUser((prev) => ({
        ...prev,
        components: prev.components.toSpliced(index + 1, 0, {
          ...prev.components[index],
        }),
      }));
    },
    [setUser]
  );

  const openInputs = useCallback(
    (index: number) => {
      setEditingIndex(editingIndex === index ? -1 : index);
    },
    [editingIndex]
  );

  return (
    <>
      {showAlert && status !== "authenticated" && (
        <div className="mb-2 rounded-md bg-red-50 p-2">
          <div className="flex items-center justify-between">
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">
                Changes are not saved without login.
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  onClick={() => setShowAlert(false)}
                  className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50">
                  <span className="sr-only">Dismiss</span>
                  <IoIosCloseCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.components.map((c, i) => {
        const key = `component-${i}`;
        let component;
        switch (c.type) {
          case componentIds.intro:
            component = <Intro details={c.details as TypesIntro} />;
            break;
          case componentIds.icons:
            component = <Icons details={c.details as TypesIcons} />;
            break;
          case componentIds.list:
            component = <List details={c.details as TypesList} />;
            break;
          default:
            component = null;
        }
        return (
          component && (
            <div key={key}>
              <Editable
                index={i}
                openInputs={openInputs}
                removeComponent={removeComponent}
                duplicateComponent={duplicateComponent}
                moveUpComponent={i === 0 ? undefined : moveUpComponent}
                moveDownComponent={
                  i === user.components.length - 1
                    ? undefined
                    : moveDownComponent
                }
                isEditing={editingIndex === i}>
                {component}
              </Editable>
              {editingIndex === i && (
                <FormContainer user={user} setUser={setUser} index={i} />
              )}
            </div>
          )
        );
      })}
      <div className="divider"></div>
      <>
        <h2 className="mb-2 text-center">Background Color</h2>
        <div className="inline-grid grid-cols-5 content-center gap-2">
          {bgOptions.map((r, i) => (
            <input
              key={`radio-${i}`}
              type="radio"
              name="bg-color"
              className="radio h-12 w-12"
              style={r.bgCss}
              onChange={() => setUser((prev) => ({ ...prev, bgCss: r.bgCss }))}
            />
          ))}
        </div>
      </>
      {/* space for bottomNav */}
      <div className="h-24" />
    </>
  );
};

export default Editor;
