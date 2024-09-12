const getConnection = require('../../../interface/DBconn.js');

// Tool model
class Loan {
  constructor(loanDate, returnDate, status, userId, toolId) {
    this.loanDate = loanDate;
    this.returnDate = returnDate;
    this.status = status;
    this.userId = userId;
    this.toolId = toolId;
  }

  async create() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO prestamos (fecha_prestamo,	fecha_devolucion,	estado,	id_usuario,	id_herramienta)
        VALUES (?, ?, ?, ?, ?)
      `, [this.loanDate, this.returnDate, this.status, this.userId, this.toolId]);

      // Obtén el ID del último registro insertado
      const laonId = result.insertId;

      return { id: laonId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar las prestamo'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async list() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT
          u.nombre_completo AS fullName,
          u.documento AS document,
          h.nombre AS nameTool,
          h.marca AS brandTool,
          p.fecha_prestamo AS loanDate,
          p.fecha_devolucion AS returnDate,
          p.estado AS status,
          p.id AS idLoan,
          p.id_usuario AS idUser,
          p.id_herramienta AS idTool
        FROM prestamos p
        JOIN usuarios u ON p.id_usuario = u.id
        JOIN herramientas h ON p.id_herramienta = h.id;
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los prestamos'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async update(toolId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE loan
        SET fecha_prestamo = ?,
        fecha_devolucion = ?,
        estado = ?,
        id_usuario = ?,
        id_herramienta = ?
        WHERE id = ?
      `, [this.loanDate]);

      return { id: toolId }; // Devuelve el ID de la herramienta actualizada
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar la herramienta'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async delete(toolId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM herramientas
        WHERE id = ?
      `, [toolId]);

      return { id: toolId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar la herramienta'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = Loan;
