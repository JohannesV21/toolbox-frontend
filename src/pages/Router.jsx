import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import { Nabvar } from "../components/navbar/Nabvar";

function AppRoutes() {
  return (
    <Router>
      <Nabvar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
