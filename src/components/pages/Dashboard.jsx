import style from "./dashboard.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

const Dashboard = () => {
  const [abrirMenu, cerrarMenu] = useState(false); //Esto

  const toggleSidebar = () => {
    //Esta constante es, para pasar el hook luego al crear  el menu lateral
    cerrarMenu(!abrirMenu);
  };
  return (
    <main>
        {/*AQUI DEBE IR EL NAVBAR E IMPORTADO */}
        <section className={style.panelControl}>
            {/*AQUI DEBE IR MENU LATERAL E IMPORTADO*/}
            <Link to = "registro-asistencia">Ir a ruta registro ingreso</Link>
            <section>
                <Outlet />
            </section>
        </section>
    </main>
);

  // return (
  //   <>
  //     <Navbar />
  //     <main className={style.bashboard_main}>
  //       {/*AQUI DEBE IR EL NAVBAR E IMPORTADO */}
  //       <Sidebar />
  //       <section className={style.panelControl}>
  //         {/*AQUI DEBE IR MENU LATERAL E IMPORTADO*/}
  //         <section>
  //           <Outlet />
  //         </section>
  //       </section>
  //     </main>
  //   </>
  // );
};

export default Dashboard;
