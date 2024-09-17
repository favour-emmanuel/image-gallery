import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Layout from "./layout/Layout";
import AssetHomePage from "./pages/AssetHomePage";
import HomePage from "./pages/HomePage";
import AssetVideoPage from "./pages/AssetVideoPage";
import NotFoundPage from "./pages/NotFoundPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import ChallengesPage from "./pages/ChallengesPage";

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
            <Route path="/leaderboard" element={<LeaderBoardPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
