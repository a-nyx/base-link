import { FaRegEdit, FaCheck } from "react-icons/fa";
import { FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa6";
import { IoDuplicateOutline } from "react-icons/io5";

const Editable = ({
  children,
  index,
  removeComponent,
  moveUpComponent,
  moveDownComponent,
  duplicateComponent,
  openInputs,
  isEditing,
}: {
  children: React.ReactNode;
  index: number;
  removeComponent: (i: number) => void;
  duplicateComponent: (i: number) => void;
  moveUpComponent?: (i: number) => void;
  moveDownComponent?: (i: number) => void;
  openInputs: (i: number) => void;
  isEditing: boolean;
}) => {
  return (
    <div className="relative mb-4 rounded border border-dashed border-black px-2 pb-4 pt-2">
      {children}
      <div className="join absolute left-0 right-0 mx-auto w-fit gap-1">
        <button
          onClick={() => openInputs(index)}
          className="btn btn-circle btn-sm bg-green-500 text-white hover:border-green-500 hover:bg-green-500">
          {isEditing ? <FaCheck /> : <FaRegEdit />}
        </button>
        <button
          disabled={moveUpComponent === undefined}
          onClick={
            moveUpComponent !== undefined
              ? () => moveUpComponent(index)
              : undefined
          }
          className="btn btn-circle  btn-sm bg-gray-400 text-white hover:border-gray-400 hover:bg-gray-400">
          <FaArrowUp />
        </button>
        <button
          disabled={moveDownComponent === undefined}
          onClick={
            moveDownComponent !== undefined
              ? () => moveDownComponent(index)
              : undefined
          }
          className="btn btn-circle btn-sm bg-gray-400 text-white hover:border-gray-400 hover:bg-gray-400">
          <FaArrowDown />
        </button>
        <button
          onClick={() => duplicateComponent(index)}
          className="btn btn-circle btn-sm bg-blue-500 text-white hover:border-blue-500 hover:bg-blue-500">
          <IoDuplicateOutline />
        </button>
        <button
          onClick={() => removeComponent(index)}
          className="btn btn-circle btn-sm bg-red-600 text-white hover:border-red-600 hover:bg-red-600">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default Editable;
