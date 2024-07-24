const getConnection = require('../../../interface/DBconn.js');

class User {
  constructor(fullName, documentType, documentNumber, password, fileId, role, status) {
    this.fullName = fullName;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.password = password;
    this.fileId = fileId;
    this.role = role;
    this.status = status;
  }

  async createUser() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO usuarios (nombre_completo, tipo_documento, documento, contrasena, id_ficha, rol, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [this.fullName, this.documentType, this.documentNumber, this.password, this.fileId, this.role, this.status]);

      // Obtén el ID del último registro insertado
      const userId = result.insertId;

      return { id: userId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewUsers() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        nombre_completo as fullName,
        tipo_documento as documentType,
        documento as documentNumber,
        rol as role,
        estado as status 
        FROM usuarios
      `);

      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los usuarios'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = User;
