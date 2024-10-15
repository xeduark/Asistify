import React from "react";
import ProtectorRuta from "./ProtectorRuta";
import Login from '../auth/Login';
import GestionAusencias from "../pages/GestionAusencias";
import HistorialAusencias from "../pages/HistorialAusencias";
import PerfilEmpleado from "../pages/PerfilEmpleado";
import Perfil from "../pages/Perfil";
import RegistroAsistencia from "../pages/RegistroAsistencia";
import Dashboard from "../pages/Dashboard";


export let EnrutadorApp = [
    {
        element: <Login />,
        path: "login",
    },
    {
        path: "/",
        element: (
            <ProtectorRuta> {/* Proteje el acceso al Dashboard y a sus rutas hijas */}
                <Dashboard />
            </ProtectorRuta>
    ),
        children: [
            {
                path: 'gestión-ausencias',
                element: <GestionAusencias />
            },
            {
                path: 'historial-ausencias',
                element: <HistorialAusencias />
            },
            {
                path: 'perfil-empleado',
                element: <PerfilEmpleado />
            },
            {
                path: 'historial-ausencias',
                element: <HistorialAusencias />
            },
            {
                path: 'perfil',
                element: <Perfil />
            },
            {
                path: 'registro-asistencia',
                element: <RegistroAsistencia />
            }
        ]
    },
]