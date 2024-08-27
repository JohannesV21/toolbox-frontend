// import { useState } from "react";
// import { getAllFiles } from "../../services/files/filesServices";

// export const useGetUsers = () => {
//   const [files, setFiles] = useState([]);
//   const [isloading, setIsloading] = useState(false);

//   const getFiles = async () => {
//     try {
//       setIsloading(true);
//       const data = await getAllFiles();
//       if (data) setFiles(data);
//     } catch (error) {
//       console.error(`useGetAllfiles: ${error}`);
//     } finally {
//       setIsloading(false);
//     }
//   };

//   return { files, isloading };
// };

import { useState, useEffect } from "react";
import { getAllFiles } from "../../services/files/filesServices";

const useFiles = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const data = await getAllFiles();
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

export default useFiles;
