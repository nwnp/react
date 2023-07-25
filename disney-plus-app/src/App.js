import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage/LoginIndex";
import DetailPage from "./pages/DetailPage/DetailIndex";
import SearchPage from "./pages/SearchPage/SearchIndex";
import MainPage from "./pages/MainPage/MainIndex";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
