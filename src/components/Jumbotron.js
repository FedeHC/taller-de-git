import React from "react";
import { integrantes } from "../assets/integrantes";

export const Jumbotron = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">KSJDKASJDLKASJDKLASJDKLA</h1>
        <p class="lead">
          Esta aplicación esta realizada para completar el Taller de Git
        </p>
        <p class="lead">
          Integrantes del equipo:
          <ul>
            {integrantes.map((integrante) => (
              <li class="lead">- {integrante}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};
