import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  justify-content: space-between;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  align-items: center;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState();

  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, setMovieList] = useState();
  const [selectdMovie, onMovieSelect] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [movieName, setMovieName] = useState("dall");
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);

  const getMovieList = () => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
      .then((res) => {
        setMovieList(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const getMovieId = (id) => {
    console.log(id);
    setSelectedMovieId(id);
    console.log(movieList);
    const foundShow = movieList.find((show) => show.show.id === id);
    console.log(foundShow);
  };
  useEffect(() => {
    getMovieList();
  }, [movieName]);

  return (
    <Container>
      <Header>
        <AppName> React movie app </AppName>
        <SearchBox>
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </SearchBox>
      </Header>
      /
      {selectedMovieId && (
        <MovieInfoComponent
          show={movieList.find((show) => show.show.id === selectedMovieId).show}
        />
      )}
      <MovieListContainer>
        {movieList?.length > 0
          ? movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                getMovieId={getMovieId}
              />
            ))
          : "No"}
      </MovieListContainer>
    </Container>
  );
}

export default App;
