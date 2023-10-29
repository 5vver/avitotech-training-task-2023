import { useAppDispatch, useAppSelector } from "@store/customHooks/redux.ts";
import React, { useEffect } from "react";
import { fetchFilterGames } from "@store/reducers/ActionCreators.ts";
import GameCard from "@/components/GameCard.tsx";

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
    <div className="mx-5 my-5">
      <div className="flex flex-wrap gap-5 justify-start">
        {isLoading && "Page is loading... Please stand by."}
        {error && <h1>Error occurred: {error}</h1>}
        {games.map((game) => (
          <GameCard key={game.id} gameInfo={game} />
        ))}
      </div>
    </div>
  );
}

export default GamesDisplay;
