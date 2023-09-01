import { useAppDispatch, useAppSelector } from "./store/customHooks/redux.ts";
import { useEffect } from "react";
import { fetchGames } from "./store/reducers/ActionCreators.ts";

function App() {
  const dispatch = useAppDispatch();
  const { games, isLoading, error } = useAppSelector(
    (state) => state.gameReducer,
  );

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

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

export default App;
