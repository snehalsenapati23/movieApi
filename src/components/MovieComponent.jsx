import styled from "styled-components";
import MovieInfoComponent from "./MovieInfoComponent";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipse;
  overflow: hidden;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieComponent = (props) => {
  const { show } = props.movie;

  const getId = (id) => {
    props.getMovieId(id);
  };

  return (
    <MovieContainer onClick={() => getId(show.id)}>
      {show.image && show.image.medium && (
        <CoverImage src={show.image.medium} alt={show.name} />
      )}
      <InfoColumn>
        <MovieName>{show.name}</MovieName>
        <MovieName>
          <a
            href={show.officialSite}
            style={{
              textDecoration: "none",
              color: "green",
              marginTop: "20px",
            }}
          >
            {" "}
            Stream
          </a>
        </MovieName>
      </InfoColumn>

      <InfoColumn>
        <MovieInfo>Year:{show.premiered}</MovieInfo>
        <MovieInfo>Genre: {show.genres[0]}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};
export default MovieComponent;
