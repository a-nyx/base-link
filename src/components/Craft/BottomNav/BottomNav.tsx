import type { Metadata } from "next";
import { Dispatch, SetStateAction } from "react";
import { MdAccountCircle, MdPreview } from "react-icons/md";
import { FaListUl } from "react-icons/fa";

const BottomNav = ({
  tab,
  setTab,
}: {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
}) => {
  const activeButtonCss = "active border-t-4 border-black";
  return (
    <div
      className="btm-nav [&>button]:bg-[#457b9d] [&>button]:text-white"
      style={{
        maxWidth: "inherit",
        left: "auto",
        right: "auto",
        marginLeft: "-1rem",
      }}>
      <button
        onClick={() => setTab(1)}
        className={tab === 1 ? activeButtonCss : ""}>
        <MdPreview />
        <span className="btm-nav-label">Preview</span>
      </button>
      <button
        onClick={() => setTab(2)}
        className={tab === 2 ? activeButtonCss : ""}>
        <FaListUl />
        <span className="btm-nav-label">Editor</span>
      </button>
      <button
        onClick={() => setTab(3)}
        className={tab === 3 ? activeButtonCss : ""}>
        <MdAccountCircle />
        <span className="btm-nav-label">Publish</span>
      </button>
    </div>
  );
};

export default BottomNav;

export const metadata: Metadata = {
  viewport: "viewport-fit=cover",
};
