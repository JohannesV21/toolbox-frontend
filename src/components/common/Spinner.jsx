import React from "react";
import { Spinner } from "react-bootstrap";

export const CustomSpinner = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "300px" }}
    >
      <Spinner
        animation="border"
        variant="light"
        className="mb-4"
        style={{ width: "3.5rem", height: "3.5rem" }}
      />
      <h2>Cargando...</h2>
    </div>
  );
};
