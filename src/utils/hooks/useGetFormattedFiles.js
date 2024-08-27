import { useState, useEffect } from "react";
import { getFormattedDataFiles } from "../../services/files/filesServices";

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
