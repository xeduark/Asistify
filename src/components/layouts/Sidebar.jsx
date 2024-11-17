import style from "./css/sidebar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"; // Asegúrate de ajustar la ruta según la ubicación de tu logo

export default function Sidebar() {
  return (
    <div className={style.sidebar_main}>
      {/* Logo añadido */}
      <img src={logo} alt="Logo" className={style.sidebar_logo} />

      {/* Menu lateral */}
      <ul className={style.main_list}>
        <li className={style.list_option}>
          <NavLink to="gestión-ausencias" activeClassName="active">
            Gestión ausencias
          </NavLink>
        </li>
        <li className={style.list_option}>
          <NavLink to="historial-ausencias" activeClassName="active">
            Historial de Ausencias
          </NavLink>
        </li>
        <li className={style.list_option}>
          <NavLink to="perfil-empleado" activeClassName="active">
            Perfil empleado
          </NavLink>
        </li>
        <li className={style.list_option}>
          <NavLink to="historial-ausencias" activeClassName="active">
            Historial ausencias
          </NavLink>
        </li>
        <li className={style.list_option}>
          <NavLink to="perfil" activeClassName="active">
            Perfil
          </NavLink>
        </li>
        <li className={style.list_option}>
          <NavLink to="registro-asistencia" activeClassName="active">
            Registro asistencia
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

