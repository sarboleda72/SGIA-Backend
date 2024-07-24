const Router = require('express');

// API middlewares
const { createUserAPI} = require('../api/auth.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/auth/createUser', createUserAPI);

// Rutas get

// Rutas put

module.exports = router;
