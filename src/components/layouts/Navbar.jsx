import style from './css/navbar.module.css'

export default function Navbar() {
  const nombre = ""
  return (
    <nav className={style.navbar_main}>
      <div className={style.section_menu}>
        <h1>Bienvenido {nombre}</h1>
      </div>
      <div className={style.section_perfil}>
        <p>Administrador</p>
      </div>
    </nav>
  )
}
