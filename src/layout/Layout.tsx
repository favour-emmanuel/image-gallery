import { Outlet } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Outlet />
    </>
  );
};

export default Layout;
