"use client";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  const [dumb, setDumb] = useState(false); // to silence console error
  useEffect(() => {
    setDumb(true);
  }, []);
  return (
    dumb && (
      <div className="flex min-h-[100vh] flex-col items-center justify-center">
        <GridLoader color="#36d7b7" />
      </div>
    )
  );
};

export default Loading;
