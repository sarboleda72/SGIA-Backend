const getConnection = require('../../../interface/DBconn.js');

// Tool model
class Tool {
  constructor(image, name, brand, total, available, price, status) {
    this.image = image;
    this.name = name;
    this.brand = brand;
    this.total = total;
    this.available = available;
    this.price = price;
    this.status = status;
  }

  async create() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de inserción
      const [result] = await connection.query(`
        INSERT INTO herramientas (imagen, nombre, marca, cantidad, disponible, valor, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [this.image, this.name, this.brand, this.total, this.available, this.price, this.status]);

      // Obtén el ID del último registro insertado
      const toolId = result.insertId;

      return { id: toolId }; // Devuelve el ID del nuevo usuario
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

  async list() {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT 
        id,
        imagen as image,
        nombre as name,
        marca as brand,
        cantidad as total,
        disponible as available,
        valor as price,
        estado as status
        FROM herramientas
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

  async update(toolId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE herramientas
        SET imagen = ?,
            nombre = ?,
            marca = ?,
            cantidad = ?,
            disponible = ?,
            valor = ?,
            estado = ?
        WHERE id = ?
      `, [this.image, this.name, this.brand, this.total, this.available, this.price, this.status, toolId]);

      return { id: toolId }; // Devuelve el ID de la herramienta actualizada
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el usuario'
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

      return { id: userId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}

module.exports = Tool;
