import React, { useState, useEffect } from "react";
import styles from "./editarAsistencia.module.css"; // Cambia el nombre del archivo CSS
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const EditarAsistencia = () => {
  const { id } = useParams();
  const [empleadoID, setEmpleadoID] = useState("");
  const [estado, setEstado] = useState("");
  const [fecha, setFecha] = useState("");
  const [horaEntrada, setHoraEntrada] = useState("");
  const [horaSalida, setHoraSalida] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const showSuccessToast = () => {
    Toast.fire({
      icon: "success",
      title: "Asistencia actualizada exitosamente",
    });
  };

  useEffect(() => {
    const fetchAsistencia = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/asistencias/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Formatea las fechas y horas para los inputs del formulario
        setFecha(data.fecha.toISOString().slice(0, 10)); // YYYY-MM-DD
        setHoraEntrada(
          data.horaEntrada.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        setHoraSalida(
          data.horaSalida.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );

        setEmpleadoID(data.empleadoID);
        setEstado(data.estado);
      } catch (error) {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Error al obtener datos",
          text: error.message,
        });
      }
    };

    fetchAsistencia();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const asistenciaActualizada = {
      empleadoID,
      estado,
      fecha: new Date(fecha), // Convierte la cadena a Date
      horaEntrada: new Date(`${fecha}T${horaEntrada}`), //Combina fecha y hora
      horaSalida: new Date(`${fecha}T${horaSalida}`), //Combina fecha y hora
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/asistencias/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            //Authorization: `Bearer ${token}`, // Si necesitas autenticación
          },
          body: JSON.stringify(asistenciaActualizada),
        }
      );

      if (response.ok) {
        showSuccessToast();
        navigate("/gestion-asistencias");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al actualizar la asistencia.");
        Swal.fire({
          icon: "error",
          title: "Error al editar",
          text: "Error al editar la asistencia: " + errorData.message,
        });
      }
    } catch (error) {
      console.error("Error editando asistencia:", error);
      setError("Error al editar la asistencia.");
      Swal.fire({
        icon: "error",
        title: "Error al editar",
        text: "Error al editar la asistencia.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.tittle}>
        <MdEdit /> Editar Asistencia
      </h2>
      <div className={styles.container}>
        <div className={styles.columnUno}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="empleadoID"
              value={empleadoID}
              onChange={(e) => setEmpleadoID(e.target.value)}
              className={styles.input}
              required
            />
            <label htmlFor="empleadoID" className={styles.label}>
              ID del empleado*
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              type="date"
              id="fecha"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className={styles.select}
              required
            />
            <label className={styles.labelSelect}>Fecha*</label>
          </div>
          <div className={styles.formGroup}>
            <input
              type="time"
              id="horaSalida"
              value={horaSalida}
              onChange={(e) => setHoraSalida(e.target.value)}
              className={styles.select}
              required
            />
            <label className={styles.labelSelect}>Hora de salida*</label>
          </div>
        </div>

        <div className={styles.columnDos}>
          <div className={styles.formGroup}>
            <select
              id="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Seleccionar estado</option>
              <option value="Presente">Presente</option>
              <option value="Tardanza">Tardanza</option>
              <option value="Ausente">Ausente</option>
            </select>
            <div className={styles.labelSelect}>Estado*</div>
          </div>
          <div className={styles.formGroup}>
            <input
              type="time"
              id="horaEntrada"
              value={horaEntrada}
              onChange={(e) => setHoraEntrada(e.target.value)}
              className={styles.select}
              required
            />
            <label className={styles.labelSelect}>Hora de entrada*</label>
          </div>
        </div>

        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit" className={styles.button}>
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default EditarAsistencia;
