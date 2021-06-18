import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Pajama from '../lib/models/Pajama.js';

describe('pajama routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('POST and text user', async () => {
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

  it('GET pajama by ID', async () => {
    const bluePajama = await Pajama.insert({
      color: 'yellow',
      size: 'medium'
    });

    const yellowPajama = await Pajama.insert({
      color: 'blue',
      size: 'small'
    });

    const res = await request(app)
      .get(`/api/v1/pajamas/${yellowPajama.id}`);

    expect(res.body).toEqual(yellowPajama);
  });
});
