import GamesDisplay from "@pages/main/GamesDisplay.tsx";
import { RouteObject } from "react-router-dom";

import MainLayout from "@layout/MainLayout";
import GamePage from "@pages/game/GamePage.tsx";

const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <GamesDisplay />
    },
    {
      path: ":id",
      element: <GamePage />
    },
  ],
};
export default MainRoutes;
