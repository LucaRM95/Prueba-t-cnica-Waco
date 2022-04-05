import React from "react";
import { useSelector } from "react-redux";

export default function CharacterList(props) {

  const { first } = useSelector( state => state );

  console.log( first )

  return (
    <ul className="character-list">
        {
          first.characters?.map( character => {
            return(
              <li key={character.id}> { character.name } </li>
            )
          })
        }
    </ul>
  );
}
