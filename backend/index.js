const express = require('express');
const { authRouter } = require('./routes/auth'); 
const empleadosRoutes = require('./routes/empleados'); 

const app = express();

// Configuración del puerto del servidor
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); 

// Usar el router de autenticación
app.use('/api/auth', authRouter); // Asigna un prefijo a las rutas de autenticación

// Configuración de las rutas
app.use('/api/empleados', empleadosRoutes); // Asegúrate de que empleadosRoutes esté correctamente definido

//RUTA DE PRUEBA
app.get('/', (req, res) => {
  res.send('¡Servidor de Express funcionando!');
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

