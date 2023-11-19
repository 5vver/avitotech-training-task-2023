import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/customHooks/redux.ts";
import { fetchGame } from "@store/reducers/ActionCreators.ts";
import { invalidateCurrent } from "@store/reducers/GamesListSlice.ts";

const GamePage: FC = () => {
  const dispatch = useAppDispatch();
  const {
    current: game,
    isLoading,
    error,
  } = useAppSelector((state) => state.gameReducer);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchGame({ id }));
    return () => {
      dispatch(invalidateCurrent());
    };
  }, [dispatch, id]);

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
