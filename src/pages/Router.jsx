import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nabvar } from "../components/navbar/Nabvar";
import NotFoundPage from "./notFound/NotFound";
import HomePage from "./Home/HomePage";
import FilesPages from "./Files/FilesPage";

/**
 * Componente de enrutamiento principal de la aplicación.
 *
 * Renderiza la barra de navegación `Nabvar` y define las rutas:
 * - `/` para `HomePage`
 * - `*` para `NotFoundPage`
 *
 * @component
 * @returns {JSX.Element} Componente `Router` con las rutas configuradas.
 */
function AppRoutes() {
  return (
    <Router>
      <Nabvar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/files" element={<FilesPages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
