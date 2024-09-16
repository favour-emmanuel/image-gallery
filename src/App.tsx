import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Layout from "./layout/Layout";
import AssetHomePage from "./pages/AssetHomePage";
import HomePage from "./pages/HomePage";
import AssetVideoPage from "./pages/AssetVideoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<HomePage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<AssetHomePage />} />
            <Route path="/video" element={<AssetVideoPage />} />
          </Route>
          <Route path="/*" element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
