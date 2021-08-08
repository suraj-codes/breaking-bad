import React from "react";
import { useHistory } from "react-router-dom";
const CharacterItem = ({ item }) => {
  const history = useHistory();
  return (
    <div
      className="card"
      onClick={() => {
        history.push(`/${item.char_id}`);
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Occupation:</strong>
              {item.occupation.map((occu) => (
                <>
                  {occu} <br />
                </>
              ))}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
