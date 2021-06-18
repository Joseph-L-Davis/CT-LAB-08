import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('pajama routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST and text user', async () => {
    const res = await request(app)
      .post('/api/v1/pajamas')
      .send({
        color: 'peach',
        size: 'XXL'
      });
    console.log(res.body);

    expect(res.body).toEqual({
      id: '1',
      color: 'peach',
      size: 'XXL'
    });
  });
});
