import { navItem } from "../constants";

const Navbar = () => {
  const nav: navItem[] = [
    {
      label: "Explore",
      path: "Home",
      onclick: () => {},
    },
    {
      label: "Home",
      path: "Home",
      onclick: () => {},
    },
  ];

  return (
    <div className="w-full lg:px-14 px-7 absolute z-[999]">
      <div className="flex justify-between items-center text-white">
        <div>
          <h1 className="font-bold text-base">Dexels</h1>
        </div>
        <ul className="flex justify-between items-center ">
          {nav.map((item, index) => (
            <li key={index} className="text-white">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
