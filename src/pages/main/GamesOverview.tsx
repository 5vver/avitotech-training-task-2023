import {
  useAppDispatch,
  useAppSelector,
} from "@store/customHooks/redux.ts";
import { useEffect } from "react";
import { fetchGames, fetchFilterGames, fetchGame } from "@store/reducers/ActionCreators.ts";

function GamesOverview() {
  const dispatch = useAppDispatch();
  const { games, isLoading, error } = useAppSelector(
    (state) => state.gameReducer,
  );

  useEffect(() => {
    // dispatch(fetchGames({}));
    // dispatch(fetchGame({id: '452'}));
    dispatch(fetchFilterGames({ tag: "anime", platform: "pc" }));
  }, [dispatch]);

  return (
    <div>
      {isLoading && "Page is loading... Please stand by."}
      {error && <h1>Error occurred: {error}</h1>}
      {games.map((game) => (
        <h1 key={game.id}>{game.title}</h1>
      ))}
    </div>
  );
}

export default GamesOverview;
