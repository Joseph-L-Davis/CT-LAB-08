const pool = require('../utils/pool');

export default class Pajama {
    id;
    color;
    size;

    constructor(row) {
      this.id = row.id;
      this.color = row.color;
      this.size = row.size;
    }

    static async insert({ color, size }) {
      const { rows } = await pool.query(
        `INSERT INTO pajamas (color, size)
            VALUES ($1, $2)
            RETURNING *`,
        [color, size]
      );
      return new Pajama(rows[0]);
    }
}
