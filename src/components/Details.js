import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./ui/Spinner";
const Details = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${params.id}`
      );
      setData(result.data[0]);
      setIsLoading(false);
    };

    fetchItems();
  }, [params]);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote?author=${data.name}`
      );
      setQuotes(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [data]);
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="profileinfo">
      <div className="details">
        <div className="details_img">
          <img src={data.img} alt={data.name} />
        </div>
        <div className="details_info">
          <h1>
            Name: <span className="value">{data.name}</span>
          </h1>
          <h2>
            Date Of Birth: <span className="value">{data.birthday}</span>
          </h2>
          <ul>
            <h2>Occupations: </h2>
            {data?.occupation.map((occu) => (
              <li className="value">{occu}</li>
            ))}
          </ul>
          <h2>
            Status: <span className="value">{data.status}</span>
          </h2>
          <h2>
            Nickname: <span className="value">{data.nickname}</span>
          </h2>
          <h2>
            Seasons: <span className="value">{data.appearance.toString()}</span>
          </h2>
        </div>
      </div>
      {quotes.length > 0 ? (
        <>
          <h2>Quotes by {data.name}:</h2>
          {quotes.map((quote) => (
            <p>{quote.quote}</p>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Details;
