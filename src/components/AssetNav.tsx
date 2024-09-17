import { Link, useLocation, useNavigate } from "react-router-dom";
import { assetNavItem } from "../constants";

const AssetNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const asstNav: assetNavItem[] = [
    {
      label: "Home",
      path: "/",
      onclick: () => {
        navigate("/");
      },
    },
    {
      label: "Videos",
      path: "/video",
      onclick: () => {
        navigate("/video");
      },
    },
    {
      label: "Leaderboard",
      path: "/leaderboard",
      onclick: () => {
        navigate("/leaderboard");
      },
    },
    {
      label: "Challenges",
      path: "/challenges",
      onclick: () => {
        navigate("/challenges");
      },
    },
  ];

  return (
    <nav className="flex justify-center items-center py-4">
      <ul className="flex py-5 gap-5 items-center">
        {asstNav.map((nav, index) => (
          <Link
            key={index}
            className={`${
              location.pathname === nav.path
                ? "bg-black text-white rounded-full px-5 py-2.5 hover:bg-[#2C343E]"
                : "text-[#4A4A4A]"
            } font-semibold text-lg cursor-pointer `}
            to={nav.path}
          >
            {nav.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default AssetNav;
