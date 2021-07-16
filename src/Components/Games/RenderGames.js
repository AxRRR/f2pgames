import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveGameDetails } from '../../actions/select';
import classes from './RenderGames.module.css';

export const RenderGames = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.game);

  useEffect(() => {}, [state]);

  const handleDetailsGame = (getDataDetailsInd) => {
    dispatch(saveGameDetails(getDataDetailsInd));
    props.onShowModal();
  };

  return (
    <div>
      <div className={classes.Container}>
        <ul>
        {state.GetGamesData.length >= 1 ? state.GetGamesData.map((e) => (
            <li key={e.id} className={classes.ListStyle}>
              <div
                className={classes.Content}
                onClick={() =>
                  handleDetailsGame({
                    id: e.id,
                  })
                }
              >
                <img src={e.thumbnail} alt={e.title} className={classes.Img} />
                <p className={classes.Title}>{e.title}</p>
                <p className={classes.Desc}>{e.short_description}</p>
                <p className={classes.Platform}>{e.platform}</p>
                <p className={classes.Release}>{e.release_date}</p>
              </div>
            </li>
          )) : <p className={classes.Error}>No matches found</p>}
        </ul>
      </div>
    </div>
  );
};
