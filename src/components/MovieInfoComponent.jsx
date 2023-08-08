import React from "react";
import styled from "styled-components";

const ShowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const ShowImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 20px;
`;

const ShowDetails = styled.div`
  flex: 1;
`;

const ShowTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ShowSummary = styled.p`
  font-size: 16px;
`;

const MovieInfoComponent = ({ show }) => {
  console.log(show);
  return (
    <div>
      <ShowContainer>
        <ShowImage src={show?.image?.medium} alt={show.name} />
        <ShowDetails>
          <ShowTitle>{show?.name}</ShowTitle>
          <ShowSummary dangerouslySetInnerHTML={{ __html: show.summary }} />
          <p>Language: {show?.language}</p>
          <p>Genres: {show?.genres?.join(", ")}</p>
          <p>Status: {show?.status}</p>
          <p>Premiered: {show?.premiered}</p>
          <p>Average Rating: {show?.rating?.average}</p>
          <p>Network: {show?.network?.name}</p>
        </ShowDetails>
      </ShowContainer>
      <p>
        <a href={show.url} target="_blank" rel="noopener noreferrer">
          Official Site
        </a>
      </p>
    </div>
  );
};

export default MovieInfoComponent;
