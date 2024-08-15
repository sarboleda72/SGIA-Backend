const Tool = require('../models/Tool.model.js');

async function createTool(options) {
  const tool = new Tool(
    options.image,
    options.name,
    options.brand,
    options.total,
    options.available,
    options.price,
    options.status
  );

  try {
    userResult = await tool.create();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el herramienta'
    };
  }

  return {
    message: 'Herramienta creado exitosamente',
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

  return  userResult;
}

async function updateUser(options) {
  const user = new User(
    options.fullName, 
    options.documentType, 
    options.documentNumber, 
    options.password, 
    options.fileId, 
    options.role, 
    options.status
  );

  try {
    userResult = await user.updateUser(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar el usuario'
    };
  }

  return {
    message: 'Usuario actualizado exitosamente',
  };
}

async function deleteUser(options) {
  const user = new User();

  try {
    userResult = await user.deleteUser(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar el usuario'
    };
  }

  return {
    message: 'Usuario eliminado exitosamente',
  };
}

module.exports = {
  createTool,
  viewUsers,
  updateUser,
  deleteUser
};
