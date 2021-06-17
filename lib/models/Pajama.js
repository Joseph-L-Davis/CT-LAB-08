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
}
