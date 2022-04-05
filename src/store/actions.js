import axios from "axios";
import { READ_USERS } from "./actionTypes";

export const fetchData = (searchParam = "") => {

  return(dispatch) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${searchParam}`)
      .then((response) => {
        const data = response.data.results;
        
        dispatch(characterInfo( data ));
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const characterInfo = ( data ) => ({
    type: READ_USERS,
    payload: { data }
});
