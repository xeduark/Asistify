import React, { useState } from "react";
import styles from "./crearEmpleado.module.css";

const ServerForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [nivelEducativo, setNivelEducativo] = useState("");
  const [carrera, setCarrera] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado:", {
      nombre,
      apellido,
      edad,
      email,
      nivelEducativo,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.tittle}>Crear Empleado</h2>
      <div className={styles.container}>
        {/*INICIO DE LA COLUMNA 1*/}
        <div className={styles.columnUno}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Nombre*</div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="edad"
              name="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Edad*</div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="nivelEducativo"
              name="nivelEducativo"
              value={nivelEducativo}
              onChange={(e) => setNivelEducativo(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Nivel Educativo*</div>
          </div>
        </div>

        {/*INICIO DE LA COLUMNA 2*/}
        <div className={styles.columnDos}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Apellido*</div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Email*</div>
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="carrera"
              name="carrera"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
              className={styles.input}
            />
            <div className={styles.label}>Carrera*</div>
          </div>
        </div>

        <button type="submit" className={styles.button}>
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ServerForm;
