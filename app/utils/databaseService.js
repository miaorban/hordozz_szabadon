import mysql from 'mysql2/promise';

class DatabaseService {
  constructor() {
    this.pool = null;
  }

  /**
   * Getter that returns the connection pool
   * @returns {Promise<mysql.Pool>} The connection pool
   */
  async getConnection() {
    if (!this.connection) {
      this.connection = await mysql.createConnection({ 
        host     : '92.119.122.2',
        port     : 3306,
        user     : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWORD,
        database : 'horodzas_index'
        });
    }
    return this.connection;
  }

  /**
   * Execute a query with the connection pool
   * @param {string} query - SQL query string
   * @param {Array} params - Query parameters
   * @returns {Promise<Array>} Query results
   */
  async query(query, params = []) {
    const connection = await this.getConnection();
    try {
      const [rows] = await connection.execute(query, params);
      return rows;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }
}

// Create a singleton instance
const databaseService = new DatabaseService();

export default databaseService;
