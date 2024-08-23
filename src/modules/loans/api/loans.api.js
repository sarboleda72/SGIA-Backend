const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createLoan, viewLoans, updateTool, deleteTool } = require('../controller/loans.controller');

const createLoanAPI = async (req, res) => {
  let { loanDate, returnDate, status, userId, toolId } = req.body;
  let message;

  try {
    let response = await createLoan({ loanDate, returnDate, status, userId, toolId });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const viewLoansAPI = async (req, res) => {
  let message;

  try {
    let response = await viewLoans();
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const updateToolAPI = async (req, res) => {
  let { image, name, brand, total, available, price, status,  id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID del usuario es requerido.'));
  }

  try {
    let response = await updateTool({ image, name, brand, total, available, price, status , id });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const deleteToolAPI = async (req, res) => {
  let { id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID de la herrmienta es requerido.'));
  }

  try {
    let response = await deleteTool({ id });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}
  

module.exports = {
  createLoanAPI,
  viewLoansAPI,
  updateToolAPI,
  deleteToolAPI,
};
