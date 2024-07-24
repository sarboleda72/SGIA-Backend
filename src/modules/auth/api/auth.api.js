const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createUser, viewUsers } = require('../controller/auth.controller');

const createUserAPI = async (req, res) => {
  let { fullName, documentType, documentNumber, password, fileId, role, status } = req.body;
  let message;

  try {
    let response = await createUser({ fullName, documentType, documentNumber, password, fileId, role, status });
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

const viewUsersAPI = async (req, res) => {
  let message;

  try {
    let response = await viewUsers();
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
  createUserAPI,
  viewUsersAPI,
};
