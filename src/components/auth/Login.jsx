import React, { useState } from "react";
import Style from "./login.module.css";
import PopupError from "../popups/PopupError";
import { FaUser, FaLock, FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  console.log("Si se esta renderizando");
  //estado para manejar el correo y la contraseña
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //estado para mostrar el modal de error
  const [modalError, setModalError] = useState(false);

  //simulación de autenticación
  const envioSesion = (e) => {
    e.preventDefault();

    if (email === "admin@correo.com" && password === "password123") {
      //guardar un token de auth
      localStorage.setItem("autenticacionToken", "123456");
      navigate("/"); //redirigir al dashboard
    } else {
      setModalError(true); //mostrar modal de error
    }
  };

  //función para cerrar el modal de error
  const cerrarModalError = () => {
    setModalError(false);
  };

  return (
    <div className={Style.mainContainer}>
      {/*/MOSTRAR MODAL ERROR SI ESTA ACTIVADO */}
      {modalError && <PopupError onClose={cerrarModalError} />}
      <div className={Style.backbox}>
        <div className={Style.loginMsg}>
          <div className={Style.textContent}>
            <h1 className={Style.mainTittle}>Bienvenido a Asistify Software</h1>
            <h4 className={Style.mainText}>
              Simplifica la gestión de tu equipo, optimiza el rendimiento.
            </h4>
            <button className={Style.mainButton}>Conoce mas!</button>
          </div>
          <span className={Style.curvaEsquina}></span>
        </div>
      </div>
      {/*FORMULARIO LOGIN */}
      <div className={Style.loginContainer}>
        <div className={Style.screen}>
          <div className={Style.screenContent}>
            <form className={Style.login} onSubmit={envioSesion}>
              <div className={Style.loginField}>
                <span className={Style.loginIcon}>
                  <FaUser />
                </span>
                <input
                  type="email"
                  className={Style.loginInput}
                  placeholder="Usuario / Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // actualiza el estado 'EMAIL' cuando cambia el valor
                  required
                />
              </div>
              <div className={Style.loginField}>
                <span className={Style.loginIcon}>
                  <FaLock />
                </span>
                <input
                  type="password"
                  className={Style.loginInput}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} //actualiza el estado 'PASSWORD' cuando cambia el valor
                  required
                />
              </div>
              <div className={Style.loginField}>
                <Link to="#" className={Style.forgotPass}>
                  Olvidaste tu contraseña?
                </Link>
              </div>
              <button className={Style.loginSubmit}>
                <span>Iniciar Sesión</span>
                <span className={Style.buttonIcon}>
                  <IoIosArrowForward />
                </span>
              </button>
            </form>
            <div className={Style.socialLogin}>
              <h3 className={Style.iconTittle}>Iniciar con</h3>
              <div className={Style.socialIcons}>
                <Link to="#" className={Style.socialLoginIcon}>
                  <FaInstagram />
                </Link>
                <Link to="#" className={Style.socialLoginIcon}>
                  <FaGoogle />
                </Link>
                <Link to="#" className={Style.socialLoginIcon}>
                  <FaFacebookSquare />
                </Link>
              </div>
            </div>
          </div>
          <div className={Style.screenBackground}>
            <span
              className={`${Style.screenBackgroundShape} ${Style.screenBackgroundShape4}`}
            ></span>
            <span
              className={`${Style.screenBackgroundShape} ${Style.screenBackgroundShape3}`}
            ></span>
            <span
              className={`${Style.screenBackgroundShape} ${Style.screenBackgroundShape2}`}
            ></span>
            <span
              className={`${Style.screenBackgroundShape} ${Style.screenBackgroundShape1}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
