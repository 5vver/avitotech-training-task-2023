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
        <div className="justify-center m-auto grid grid-cols-3 gap-4 min-h-screen">
          <div className="bg-emerald-500 grid grid-rows-5 gap-2">
            <div className="bg-red-300 row-span-2">ICON</div>
            <div className="bg-yellow-300 row-span-3">TITLE genre publisher releasedate</div>
          </div>
          <div className="bg-sky-500 col-span-2 grid grid-rows-3 gap-2">
            <div className="bg-red-300 row-span-2 grid grid-rows-8">
              <div className="bg-sky-500 row-span-1">back btn</div>
              <div className="bg-green-400 row-span-7"></div>
            </div>
            <div className="bg-yellow-300 row-span-1">blank space</div>
          </div>
          {/*<span>GAME {`№${game.id}`}</span>*/}
          {/*<br />*/}
          {/*<span>{game.title}</span>*/}
          {/*<br />*/}
          {/*<span>{game.thumbnail}</span>*/}
          {/*<br />*/}
          {/*<span>{game.short_description}</span>*/}
          {/*<br />*/}
          {/*<span>{game.game_url}</span>*/}
          {/*<br />*/}
          {/*<span>{game.genre}</span>*/}
          {/*<br />*/}
          {/*<span>{game.publisher}</span>*/}
          {/*<br />*/}
          {/*<span>{game.release_date}</span>*/}
          {/*<br />*/}
          {/*<span>{game.freetogame_profile_url}</span>*/}
          {/*<br />*/}
        </div>
      )}
      <button onClick={() => navigate(-1)}>GO BACK</button>
    </div>
  );
};

export default GamePage;
