import { navItem } from "../constants";
import logo from "../assets/dexels-logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

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
    <div className="w-full lg:px-12 px-7 lg:py-8 py-3 absolute z-[999]">
      <div className="flex justify-between items-center text-white">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="" className="w-7" />
          <h1 className="font-semibold text-lg">Dexels</h1>
        </Link>
        <div className="flex justify-between items-center gap-7">
          {nav.map((item, index) => (
            <li
              key={index}
              className="text-white text-[15px] list-none hidden lg:flex"
            >
              {item.label}
            </li>
          ))}
          <h1 className="h-10 w-10 rounded-full flex justify-center items-center bg-[#FDF4E9] text-[#E8912D]">
            <Icon icon="bxs:user" />
          </h1>

          <button className="bg-appWhite py-2.5 px-3.5 rounded-lg text-appBlack font-semibold text-sm">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
