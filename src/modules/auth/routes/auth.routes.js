const Router = require('express');

// API middlewares
const { createUserAPI, viewUsersAPI, updateUserAPI, deleteUserAPI} = require('../api/auth.api');

// Inicializar router
const router = Router();

// Rutas post
router.post('/auth/createUser', createUserAPI);

// Rutas get
router.get('/auth/viewUsers', viewUsersAPI);

// Rutas put
router.put('/auth/updateUser', updateUserAPI);

// Rutas delete
router.delete('/auth/deleteUser', deleteUserAPI);

module.exports = router;
