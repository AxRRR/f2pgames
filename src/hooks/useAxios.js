import axios from "axios";
import { useEffect, useState } from "react";

//  Custom Hook to send requests API
//    with different params, like: Category, Platform, Tags and no params.

export const useAxiosWithParams = ({
  methodname,
  parameter1 = 'platform',
  parameter2 = 'pc',
  parameter3,
  parameter4,
  parameter5,
  parameter6,
}) => {
  const [resp, setResp] = useState(null);
  const [error, setError] = useState("");
  const apiUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games";

  useEffect(() => {
    const options = {
      method: methodname,
      url: `${apiUrl}?${parameter1}=${parameter2}&${parameter3}=${parameter4}&${parameter5}=${parameter6}`,
      headers: {
        "x-rapidapi-key": "07089da5c1msh4207da2f8fccca3p171009jsn2878b94e6662",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResp(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, [methodname, parameter1, parameter2, parameter3, parameter4, parameter5, parameter6]);

  return { resp, error };
};


