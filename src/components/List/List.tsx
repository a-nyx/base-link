import { TypesList } from "./TypesList";

const List = ({ details }: { details: TypesList }) => {
  const { title, links } = details;

  return (
    <div className="container py-4 text-center">
      {title && <h2 className="font-bold">{title}</h2>}
      <ul>
        {links.map((link, i) => {
          const { label, href } = link;
          return (
            <li key={`link-${i}`} className="mx-4 my-2 overflow-auto">
              <a
                href={href}
                className="inline-block w-full rounded-md border border-black px-4 py-2">
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
