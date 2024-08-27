import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import { Nabvar } from "../components/navbar/Nabvar";
import NotFoundPage from "./notFound/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Nabvar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
