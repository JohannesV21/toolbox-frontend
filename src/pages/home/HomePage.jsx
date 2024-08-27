import { useEffect, useState } from "react";
import { getAllFiles } from "../../services/files/filesServices";
import useFiles from "../../utils/hooks/useGetAllFiles";
import useFormattedDataFiles from "../../utils/hooks/useGetFormattedFiles";
import { Table } from "react-bootstrap";
import "../../styles/home/home.scss";
import { CustomSpinner } from "../../components/common/Spinner";

function HomePage() {
  const { files, loading, error } = useFormattedDataFiles();

  if (loading) {
    return (
      <div className="home-container">
        <CustomSpinner />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home-container">
      <h1 className="mb-5">Lista de Archivos formateados</h1>

      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>File</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>

        {files.map((item) => (
          <>
            {item.lines.map((line) => (
              <tbody>
                <tr>
                  <td>{item.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              </tbody>
            ))}
          </>
        ))}
      </Table>
    </div>
  );
}

export default HomePage;
