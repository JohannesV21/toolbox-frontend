import { useState, useEffect } from "react";
import { getFormattedDataFiles } from "../../services/files/filesServices";

const useFormattedDataFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getFormattedDataFiles();
        if (data) {
          setFiles(data);
        } else {
          setError("No se pudieron obtener los archivos");
        }
      } catch (err) {
        setError(`Error al obtener archivos: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { files, loading, error };
};

export default useFormattedDataFiles;
