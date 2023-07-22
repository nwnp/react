import axios from "../api/axios";
import requests from "../api/request";
import "./Banner.css";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Banner = () => {
  /** variables */
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  /** useEffect */
  useEffect(() => {
    fetchData();
  }, []);

  /** functions */
  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기
    const response = await axios.get(requests.fetchNowPlaying);
    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id;

    // 여러 영화 중 하나의 영화 정보 가져오기
    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  /** js */
  if (isClicked) {
    return (
      <>
        <Container>
          <HomeContainer>
            <Iframe
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&mute=1&loop=1&playlist=${movie.videos.results[0].key}`}
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
            ></Iframe>
          </HomeContainer>
        </Container>
        <button onClick={() => setIsClicked(false)}>X</button>
      </>
    );
  }

  /** html */
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          {movie?.videos?.results?.length > 0 && (
            <button
              className="banner_button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
          )}
        </div>
        <p className="banner_description">{truncate(movie?.overview, 100)}</p>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
