import pool from '../utils/pool';

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

    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT * FROM pajamas
            WHERE id = $1`,
        [id]
      );
      return new Pajama(rows[0]);
    }

    static async findAllPajamas() {
      const { rows } = await pool.query(
        'SELECT * FROM pajamas'
      );
      return rows.map(pajama => new Pajama(pajama));
    }

    static async updatePajama(id, { color, size }) {
      const { rows } = await pool.query(
        `UPDATE pajamas
            SET color = $1, size = $2
            WHERE id =$3
            RETURNING *`,
        [color, size, id]
      );
      return new Pajama(rows[0]);
    }

    static async deletePajama(id)
}
