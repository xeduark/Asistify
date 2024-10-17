import React from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("autenticacionToken");
    return token !== null;//esto verifica si existe el token
};
 const ProtectorRuta = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
 };

 export default ProtectorRuta;