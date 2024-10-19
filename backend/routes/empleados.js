const express = require('express');
const { authenticateJWT } = require('../routes/auth'); 
const { getEmpleados } = require('../controllers/empleadosController');

const router = express.Router();

// Ruta protegida para obtener empleados
router.get('/', authenticateJWT, getEmpleados);

module.exports = router;