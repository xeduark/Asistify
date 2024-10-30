import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("autenticacionToken");
    return token !== null;//esto verifica si existe el token
};
 // eslint-disable-next-line react/prop-types
 const ProtectorRuta = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
 };

 export default ProtectorRuta;