const Loan = require('../models/Loan.model.js');

async function createLoan(options) {
  const loan = new Loan(
    options.loanDate, 
    options.returnDate, 
    options.status, 
    options.userId, 
    options.toolId
  );

  try {
    userResult = await loan.create();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear el prestamo'
    };
  }

  return {
    message: 'prestamo creado exitosamente',
  };
}

async function viewLoans() {
  const loan = new Loan();
  let userResult;
  
  try {
    userResult = await loan.list();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener los prestamos'
    };
  }

  return  userResult;
}

async function updateTool(options) {
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
    userResult = await tool.update(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la herramienta'
    };
  }

  return {
    message: 'Herramienta actualizada exitosamente',
  };
}

async function deleteTool(options) {
  const tool = new Tool();

  try {
    userResult = await tool.delete(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la herramienta'
    };
  }

  return {
    message: 'Herramienta eliminada exitosamente',
  };
}

module.exports = {
  createLoan,
  viewLoans,
  updateTool,
  deleteTool
};
