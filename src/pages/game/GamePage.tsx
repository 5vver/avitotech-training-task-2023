import React, { FC, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/customHooks/redux.ts";
import { fetchGame } from "@store/reducers/ActionCreators.ts";
import {
  invalidateCurrent,
  setCurrent,
} from "@store/reducers/GamesListSlice.ts";

const GamePage: FC = () => {
  const dispatch = useAppDispatch();
  const {
    current: game,
    games,
    isLoading,
    error,
  } = useAppSelector((state) => state.gameReducer);

  const { id } = useParams();
  const navigate = useNavigate();

  const parseGame = useCallback((id: string) => {
    const foundGame = games.find((game) => game.id === id);
    if (foundGame) dispatch(setCurrent(foundGame));
    else dispatch(fetchGame({ id }));
  }, [dispatch, games]);

  useEffect(() => {
    if (id) parseGame(id);
    return () => {
      dispatch(invalidateCurrent());
    };
  }, [dispatch, parseGame, id]);

  return (
    <div>
      {isLoading && <>Loading</>}
      {game && id && (
        <>
          <span>GAME {`№${game.id}`}</span>
          <br />
          <span>{game.title}</span>
          <br />
          <span>{game.thumbnail}</span>
          <br />
          <span>{game.short_description}</span>
          <br />
          <span>{game.game_url}</span>
          <br />
          <span>{game.genre}</span>
          <br />
          <span>{game.publisher}</span>
          <br />
          <span>{game.release_date}</span>
          <br />
          <span>{game.freetogame_profile_url}</span>
          <br />
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </>
      )}
    </div>
  );
};

export default GamePage;
