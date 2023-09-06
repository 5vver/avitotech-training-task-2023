import GamesOverview from "@pages/main/GamesOverview.tsx";
import { RouteObject } from "react-router-dom";

import MainLayout from "@layout/MainLayout";
import GameDisplay from "@pages/game/GameDisplay.tsx";

const MainRoutes: RouteObject = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <GamesOverview />
    },
    {
      path: ":id",
      element: <GameDisplay />
    },
  ],
};
export default MainRoutes;
