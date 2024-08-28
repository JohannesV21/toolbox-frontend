import "./home.scss";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <img
        className="mb-5"
        src="https://files.toolboxtve.com/wp-content/uploads/2022/03/09085119/logo-stycky2022.png"
        alt="Logo de Toolbox"
        width="250px"
      />
      <h1>SSR FULLSTACK DEVELOPER TEST</h1>

      <section>
        <h2>Resumen del Proyecto</h2>
        <p>Este proyecto se divide en tres partes principales:</p>
        <ol>
          <li>
            <strong>Desarrollo de API:</strong> Crear una API REST utilizando
            Node.js y Express.js para manejar el procesamiento de datos.
          </li>
          <li>
            <strong>Desarrollo del Frontend:</strong> Construir una aplicación
            del lado del cliente utilizando React y React Bootstrap para mostrar
            los datos.
          </li>
          <li>
            <strong>Mejoras Opcionales:</strong> Implementar características
            adicionales y optimizaciones para una aplicación más robusta.
          </li>
        </ol>
      </section>

      <section>
        <h2>Instrucciones</h2>
        <p>
          Instrucciones detalladas sobre los requisitos del proyecto y el
          desafío:
        </p>
        <ul>
          <li>
            <li>
              <a
                href="https://cs1.ssltrust.me/s/YeaQjE8XFljaMxv"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF del Desafío Técnico
              </a>
            </li>
          </li>
          <li>
            <a
              href="https://cs1.ssltrust.me/s/6u9aC5hCTEhTpT1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diagrama de Secuencia
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Autor</h2>
        <h2>
          <a
            href="https://github.com/JohannesV21"
            target="_blank"
            rel="noopener noreferrer"
          >
            {` Johannes Villasana`}
          </a>
        </h2>
      </section>

      <Button as={Link} to="/files" className="button-home">
        Ver datos
      </Button>
    </div>
  );
}

export default HomePage;
