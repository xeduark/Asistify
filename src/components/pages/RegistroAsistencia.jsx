//import React from "react";
import style from "./RegistroAsistencia.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


//className={Style.loginInput}

const RegistroAsistencia = () => {
    const navigate = useNavigate();

    // Estado para manejar la fecha y hora
    const [fechaHora, setFechaHora] = useState("");

    // Función para actualizar la fecha y hora
    const actualizarFechaHora = () => {
        const fechaActual = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const horaActual = fechaActual.toLocaleTimeString();
        const fechaFormateada = `${fechaActual.toLocaleDateString('es-ES', opciones)} - ${horaActual}`;
        setFechaHora(fechaFormateada);
    };

    // Usamos useEffect para actualizar la fecha y hora cada segundo
    useEffect(() => {
        actualizarFechaHora();
        const intervalo = setInterval(actualizarFechaHora, 1000); // Actualiza cada segundo
        return () => clearInterval(intervalo); // Limpiar intervalo al desmontar el componente
    }, []);


    return (
        //AQUI HABIA UN BODY OJO CON ESO  NO SE PUEDE USAR BODY EN UN COMPONENTE
        <div>


            <main className={style.main}>

                <div className={style.contenedor1}>
                    <div className={style.irLogin}>


                        <button onClick={() => navigate('/login')}>
                            <img src="public\images\usuario.png" alt="Login" />
                            Login
                        </button>



                    </div>
                    <div className={style.logoEmpresa}>
                        <img src="./images/logo.png" alt="" />
                    </div>
                </div>

                <div className={style.contenedor2}>
                    <h1>BIENVENIDO</h1>
                    <h1>REGISTRO DE INGRESO Y SALIDA</h1>
                    <h2 id="fecha">FECHA</h2>
                    <h2 id="fecha">{fechaHora}</h2> {/* Mostramos la fecha y hora aquí */}
                    <div className={style.contenedorInformacion}>
                        <h2>Digite su número de carnet</h2>
                        <form action="">
                            <input className={style.input} type="text" placeholder="Número del carnet" name="txtcarnet" />
                            <div className={style.botones}>

                                <button className={style.ingreso}>
                                    <span>Ingreso</span>
                                    <span className={style.buttonIconIngreso}></span>
                                </button>

                                <button className={style.salida}>
                                    <span>Salida</span>
                                    <span className={style.buttonIconSalida}></span>
                                </button>

                            </div>

                        </form>

                    </div>

                </div>



            </main>

        </div>

    );
};

export default RegistroAsistencia;