const User = require('../models/User.model.js');

async function createUser(options) {
  const user = new User(
    options.fullName, 
    options.documentType, 
    options.documentNumber, 
    options.password, 
    options.fileId, 
    options.role, 
    options.status
  );

  let userResult;
  try {
    userResult = await user.createUser();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el usuario'
    };
  }

  console.log(userResult);

  return {
    message: 'Usuario creado exitosamente',
  };
}

async function viewUsers() {
  const user = new User();
  let userResult;
  
  try {
    userResult = await user.viewUsers();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los usuarios'
    };
  }

  console.log(userResult);
  return  userResult;
}

module.exports = {
  createUser,
  viewUsers,
};
