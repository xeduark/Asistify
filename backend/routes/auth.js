// auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config(); // Carga las variables de entorno

// Clave secreta para JWT desde el .env
const JWT_SECRET = process.env.JWT_SECRET;

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Aquí debes verificar las credenciales del administrador en tu base de datos
    if (email === 'admin@correo.com' && password === 'admin123') {

        // Generar un token JWT
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
        
    }

    return res.status(401).json({ message: 'Credenciales incorrectas' });
});

// Middleware para proteger rutas
const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Exportar el router y el middleware de autenticación
module.exports = {
    authRouter: router,
    authenticateJWT
};
