import { useState, useEffect } from "react";
import { getFormattedDataFiles } from "../../services/files/filesServices";

/**
 * Hook para obtener los datos formateados de los archivos o busqueda de un archivo en especifico.
 *
 * Si se proporciona un `searchTerm`, realiza una búsqueda para obtener los datos
 * de un archivo específico. Si no se proporciona ningún término, retorna todos los archivos
 * formateados. Posee manejo de estado para la carga, los datos y los errores,
 * y aplica un retraso de 500 ms para la búsqueda.
 *
 * @function
 * @param {string} [searchTerm=""] - El nombre del archivo a buscar. Si está vacío, obtiene todos los archivos.
 * @returns {Object} El estado de los datos formateados.
 * @returns {Array} files - Datos del archivo específico o todos los archivos, dependiendo del `searchTerm`.
 * @returns {boolean} loading - Estado de carga de los datos.
 * @returns {string|null} error - Mensaje de error si ocurre un problema.
 * @returns {boolean} isSearchFormat - Indica si los datos corresponden a un archivo específico o a todos los archivos.
 */
const useFormattedDataFiles = (searchTerm) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchFormat, setIsSearchFormat] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getFormattedDataFiles(searchTerm);

        if (data) {
          if (searchTerm) {
            setIsSearchFormat(true);
            setFiles(data.split("\n").map((line) => line.split(",")));
          } else {
            setIsSearchFormat(false);
            setFiles(data);
          }
        } else {
          if (searchTerm) {
            setError(`No se encontró el archivo "${searchTerm}"`);
            setFiles([]);
          } else {
            setError("No se pudieron obtener los archivos");
            setFiles([]);
          }
        }
      } catch (err) {
        setError(`Error al obtener archivos: ${err.message}`);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchFiles();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  return { files, loading, error, isSearchFormat };
};

export default useFormattedDataFiles;
