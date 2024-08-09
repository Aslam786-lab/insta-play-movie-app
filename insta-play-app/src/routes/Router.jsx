import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../components/dashboard/Dashboard";
import MovieDetail from "../components/movie-detail/MovieDetail";
import Layout from "./Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/movies" element={<Dashboard />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
