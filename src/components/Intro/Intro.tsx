import { TypesIntro } from "./TypesIntro";

const Intro = ({ details }: { details: TypesIntro }) => {
  const { name, headline } = details;
  return (
    <div className={`container flex items-center justify-center gap-x-4`}>
      <div>
        {name && <h1 className="text-center text-2xl">{name}</h1>}
        {headline && <p className=" text-center text-base">{headline}</p>}
      </div>
    </div>
  );
};

export default Intro;
