const Router = require('express');

// API middlewares
const { createLoanAPI, viewLoansAPI, updateToolAPI, deleteToolAPI} = require('../api/loans.api.js');

// Inicializar router
const router = Router();

// Rutas post
router.post('/loan/createLoan', createLoanAPI);

// Rutas get
router.get('/loan/viewLoans', viewLoansAPI);

// Rutas put
router.put('/tool/updateTool', updateToolAPI);

// Rutas delete
router.delete('/tool/deleteTool', deleteToolAPI);

module.exports = router;
