import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveGamesData } from '../../actions/game';
import { useAxiosWithParams } from '../../hooks/useAxios';
import { RenderGames } from './RenderGames';

export const Games = (props) => {
  const dispatch = useDispatch();
  const [isEmptyData, setIsEmptyData] = useState(false);

  const { resp, error } = useAxiosWithParams({
    methodname: 'GET',
    parameter1: 'sort-by',
    parameter2: 'popularity',
  });

  useEffect(() => {
    if(resp !== null){
      setIsEmptyData(true);
      dispatch(saveGamesData(resp));
    }
  }, [resp, error]);

  return (
    <Fragment>
      {isEmptyData && <RenderGames onShowModal={props.onShowModal} />}
    </Fragment>
  );
};
