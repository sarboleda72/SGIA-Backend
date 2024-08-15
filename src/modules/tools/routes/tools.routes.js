const Router = require('express');

// API middlewares
const { createToolAPI, viewUsersAPI, updateUserAPI, deleteUserAPI} = require('../api/tools.api.js');

// Inicializar router
const router = Router();

// Rutas post
router.post('/tool/createTool', createToolAPI);

// Rutas get
router.get('/auth/viewUsers', viewUsersAPI);

// Rutas put
router.put('/auth/updateUser', updateUserAPI);

// Rutas delete
router.delete('/auth/deleteUser', deleteUserAPI);

module.exports = router;
