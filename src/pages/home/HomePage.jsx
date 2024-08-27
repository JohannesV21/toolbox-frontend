import "./home.scss";
import { CustomSpinner } from "../../components/common/Spinners/Spinner";
import { Table } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import useFiles from "../../utils/hooks/useGetAllFiles";
import useFormattedDataFiles from "../../utils/hooks/useGetFormattedFiles";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { files, loading, error, isSearchFormat } =
    useFormattedDataFiles(searchTerm);
  const { listFiles, listFilesError, listFilesLoading } = useFiles();
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  return (
    <div className="home-container">
      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar archivo..."
        className="form-control mb-3 search-input"
        value={searchTerm}
        onChange={handleSearchChange}
        disabled={loading}
        ref={inputRef}
      />

      {/* Spinner de carga */}
      {loading && (
        <div className="mb-5">
          <CustomSpinner />
        </div>
      )}

      {!loading && (
        <>
          {/* Título según el estado */}
          {isSearchFormat ? (
            <h1 className="my-5">Datos del archivo {searchTerm}:</h1>
          ) : (
            <h1 className="my-5">Lista de Archivos formateados:</h1>
          )}

          {/* Mensaje de error si existe */}
          {error && (
            <div className="alert alert-danger">
              <h3>{error}</h3>
            </div>
          )}

          {/* Mostrar los resultados de la búsqueda */}
          {!error && isSearchFormat ? (
            <div>
              {files.length > 0 ? (
                <ul>
                  {files.map((line, index) => (
                    <li key={crypto.randomUUID()}>{line.join(", ")}</li>
                  ))}
                </ul>
              ) : (
                <h3>No se encontraron resultados para "{searchTerm}"</h3>
              )}
            </div>
          ) : (
            <Table striped bordered hover variant="dark" responsive>
              {!searchTerm && !error && (
                <thead>
                  <tr>
                    <th>File</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {files.map((item, itemIndex) => (
                  <>
                    {item?.lines.map((line, lineIndex) => (
                      <tr key={crypto.randomUUID()}>
                        <td>{item?.file}</td>
                        <td>{line?.text}</td>
                        <td>{line?.number}</td>
                        <td>{line?.hex}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </Table>
          )}
        </>
      )}

      {listFilesLoading && (
        <div className="mb-5">
          <CustomSpinner />
        </div>
      )}

      {!listFilesLoading && (
        <>
          <h1 className="my-5">Lista total de archivos disponibles:</h1>

          {/* Mensaje de error si existe */}
          {listFilesError && (
            <div className="alert alert-danger">
              <h3>{error}</h3>
            </div>
          )}

          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Files</th>
              </tr>
            </thead>
            <tbody>
              {listFiles.map((item, itemIndex) => (
                <>
                  <tr key={crypto.randomUUID()}>
                    <td>{item}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

export default HomePage;
