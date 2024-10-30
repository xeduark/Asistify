import style from './css/navbar.module.css'

export default function Navbar() {
  const nombre = ""
  const cerrarseccion = ()=> {
    localStorage.removeItem("autenticacionToken");
    window.location.reload(); 
  }
  

  return (
    <nav className={style.navbar_main}>
      <div className={style.section_menu}>
        <h1>Bienvenido {nombre}</h1>
      </div>
      <div className={style.section_perfil}>
        <button onClick={cerrarseccion} > cerrar sesion</button>
        <p>Administrador</p>
      </div>
    </nav>
  )
}

