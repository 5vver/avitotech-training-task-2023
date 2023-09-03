import GamesOverview from "@pages/main/GamesOverview.tsx";
import { RouteObject } from "react-router-dom";

const MainRoutes: RouteObject = {
  path: "/",
  element: <GamesOverview />,
  children: [],
};
export default MainRoutes;
