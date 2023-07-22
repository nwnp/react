const requests = {
  fetchNowPlaying: "/movie/now_playing",
  fetchTrending: "/trending/all/week",
  fetchTopRated: "/movie/top_rated",
  fetchActionMovies: "/discover/movie?with_genres=28",
  fetchComedyMovies: "/discover/movie?with_genres=35",
  fetchHorrorMovies: "/discover/movie?with_genres=27",
  fetchRomanceMovies: "/discover/movie?with_genres=10749",
  fetchDocumentaries: "/discover/movie?with_genres=99",
  fetchMysteryMovies: "/discover/movie?with_genres=9648",
  fetchSciFiMovies: "/discover/movie?with_genres=878",
  fetchWesternMovies: "/discover/movie?with_genres=37",
  fetchAnimationMovies: "/discover/movie?with_genres=16",
  fetchTV: "/discover/movie?with_genres=10770",
};

export default requests;
