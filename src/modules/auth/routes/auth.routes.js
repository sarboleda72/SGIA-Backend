const Router = require('express');

// API middlewares
const { createUserAPI, viewUsersAPI} = require('../api/auth.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/auth/createUser', createUserAPI);

// Rutas get
router.get('/auth/viewUsers', viewUsersAPI);

// Rutas put

module.exports = router;
