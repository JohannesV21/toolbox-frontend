import { useState, useEffect } from "react";
import { getAllFiles } from "../../services/files/filesServices";

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
