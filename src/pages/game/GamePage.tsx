import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/customHooks/redux.ts";
import { fetchGame } from "@store/reducers/ActionCreators.ts";

const GamePage = () => {
  const dispatch = useAppDispatch();
  const { games, isLoading, error } = useAppSelector(
    (state) => state.gameReducer,
  );

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) dispatch(fetchGame({ id }));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <>Loading</>}
      {games.length && id ? (
        <>
          <span>GAME {`№${games[0].id}`}</span>
          <br />
          <span>{games[0].title}</span>
          <br />
          <span>{games[0].thumbnail}</span>
          <br />
          <span>{games[0].short_description}</span>
          <br />
          <span>{games[0].game_url}</span>
          <br />
          <span>{games[0].genre}</span>
          <br />
          <span>{games[0].publisher}</span>
          <br />
          <span>{games[0].release_date}</span>
          <br />
          <span>{games[0].freetogame_profile_url}</span>
          <br />
          <button onClick={() => navigate(-1)}>GO BACK</button>
        </>
      ) : (
        <>Not found.</>
      )}
    </div>
  );
};

export default GamePage;
