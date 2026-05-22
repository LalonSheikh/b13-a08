import Link from "next/link";

const LeftSidebar = ({ books = [] }) => {
  const uniqueCategories = (books || []).filter(
    (item, index, self) =>
      index === self.findIndex((b) => b.category === item.category),
  );

  return (
    <div>
      <h2 className="text-lg font-bold"> All Categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {uniqueCategories.map((c) => {
          return (
            <li
              className={`  bg-orange-500 text-white   rounded-md font-bold text-center text-md`}
              key={c.id}
            >
              <Link href={`/category/${c.category}`} className="block p-2">
                {c.category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
