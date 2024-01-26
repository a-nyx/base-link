"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TiWarning } from "react-icons/ti";

import {
  componentIds,
  FormIcons,
  FormIntro,
  TypesDetails,
  TypesIcons,
  TypesIntro,
  FormList,
  TypesList,
  TypeUser,
} from "@components/index";

const FormContainer = ({
  index,
  user,
  setUser,
}: {
  index: number;
  user: TypeUser;
  setUser: Dispatch<SetStateAction<TypeUser>>;
}) => {
  const component = user.components[index];
  const [cDetails, setCDetails] = useState(component.details as TypesDetails);
  const [hasNoInput, setHasNoInput] = useState(false);

  useEffect(() => {
    if (JSON.stringify(cDetails) === JSON.stringify(component.details)) return;
    setUser((prev) => ({
      ...prev,
      components: prev.components.toSpliced(index, 1, {
        ...prev.components[index],
        details: cDetails as TypesDetails,
      }),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cDetails, setUser]);

  useEffect(() => {
    if (component.type !== componentIds.list) {
      setHasNoInput(Object.values(cDetails).every((v) => v === ""));
    } else {
      const { title, links } = cDetails as TypesList;
      setHasNoInput(!title && !links.length);
    }
  }, [cDetails, component.type]);

  return (
    <div className="relative mb-4 rounded border border-dashed border-black p-2">
      <form className="flex flex-col gap-2">
        {component.type === componentIds.intro && (
          <FormIntro
            details={cDetails as TypesIntro}
            setDetails={setCDetails}
          />
        )}
        {component.type === componentIds.icons && (
          <FormIcons
            details={cDetails as TypesIcons}
            setDetails={setCDetails}
          />
        )}
        {component.type === componentIds.list && (
          <FormList details={cDetails as TypesList} setDetails={setCDetails} />
        )}
      </form>
      {hasNoInput && (
        <div className="mt-2 flex items-center justify-center gap-2 text-sm">
          <TiWarning /> Achtung: No input!
        </div>
      )}
    </div>
  );
};

export default FormContainer;
