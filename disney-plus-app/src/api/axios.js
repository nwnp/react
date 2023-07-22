import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "93498fa1cf95a59e65359f663ed9523a",
    language: "ko-KR",
  },
});

export default instance;
