import { Outlet } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";
import AssetNav from "../components/AssetNav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AssetNav />
      <Outlet />
    </>
  );
};

export default Layout;
