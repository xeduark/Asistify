import React from "react";
import style from "./RegistroAsistencia.module.css";
import { Link } from "react-router-dom";


//className={Style.loginInput}

const RegistroAsistencia = () => {

    return (
        <body>


            <main className={style.main}>

                <div className={style.contenedor1}>
                    <div className={style.irLogin}>
                        
                        <img src="public\images\usuario.png" alt="" />
                        <Link to ="login">Login</Link>

                    </div>
                    <div className={style.logoEmpresa}>
                        <img src="./images/fabrica.png" alt="" />
                    </div>
                </div>

                <div className={style.contenedor2}>
                    <h1>BIENVENIDO</h1>
                    <h1>REGISTRO DE INGRESO Y SALIDA</h1>
                    <h2 id="fecha">fecha</h2>
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
           
        </body>

    );
};

export default RegistroAsistencia;