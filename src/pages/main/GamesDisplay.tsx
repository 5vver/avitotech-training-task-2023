import { useAppDispatch, useAppSelector } from "@store/customHooks/redux.ts";
import { Fragment, useEffect } from "react";
import { fetchFilterGames } from "@store/reducers/ActionCreators.ts";
import { Link } from "react-router-dom";

function GamesDisplay() {
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
        <Fragment key={game.id}>
          <h1>{game.title}</h1>
          <Link to={`:${game.id}`}>Link to game</Link>
        </Fragment>
      ))}
    </div>
  );
}

export default GamesDisplay;