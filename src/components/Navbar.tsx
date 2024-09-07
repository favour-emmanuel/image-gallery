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
    <div className="w-full lg:px-14 px-7 relative z-50 flex justify-between items-center">
      <div></div>

      <ul></ul>
    </div>
  );
};

export default Navbar;
