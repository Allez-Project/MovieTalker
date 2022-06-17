import { useState, useEffect } from "react";
import styles from "./css/Main_movieRank.module.scss";
import axios from "axios";
const Main_movieRank = (props) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getSearchMovie = async () => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    try {
      if (value === "") {
        setIsLoading((current) => false);
        setMovies((current) => []);
      } else {
        const {
          data: { items },
        } = await axios.get("https://openapi.naver.com/v1/search/movie.json", {
          params: {
            query: value,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        });
        setMovies((current) => items);
        setIsLoading((current) => false);
        console.log(items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, []);

  return (
    <section className="container">
      {/* {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <form onSubmit={() => handleSubmit()}>
          <div>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={value}
                onChange={() => handleChange()}
                placeholder="영화를 검색해 보세요."
              />
            </div>
          </div>
        </form>
      )} */}
    </section>
  );
};

export default Main_movieRank;
