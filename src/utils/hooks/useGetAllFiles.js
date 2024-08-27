import { useState, useEffect } from "react";
import { getAllFiles } from "../../services/files/filesServices";

/**
 * Hook para obtener la lista de archivos.
 *
 * Realiza una solicitud para recuperar los archivos al montar el componente,
 * y gestiona el estado de carga, los datos y los errores.
 *
 * @function
 * @returns {Object} El estado de los archivos.
 * @returns {Array} listFiles - Lista de archivos obtenidos.
 * @returns {boolean} listFilesLoading - Estado de carga.
 * @returns {string|null} listFilesError - Mensaje de error, si lo hay.
 */
const useFiles = () => {
  const [listFiles, setListFiles] = useState([]);
  const [listFilesLoading, setListFilesLoading] = useState(true);
  const [listFilesError, setListFilesError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getAllFiles();
        if (data) {
          setListFiles(data);
          setListFilesLoading(false);
        } else {
          setListFilesError("No se pudieron obtener los archivos");
          setListFilesLoading(false);
        }
      } catch (err) {
        setListFilesError(`Error al obtener archivos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { listFiles, listFilesLoading, listFilesError };
};

export default useFiles;
