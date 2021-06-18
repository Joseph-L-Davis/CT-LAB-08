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
  
    const yellowPajama = await Pajama.insert({
      color: 'blue',
      size: 'small'
    });

    const res = await request(app)
      .get(`/api/v1/pajamas/${yellowPajama.id}`);

    expect(res.body).toEqual(yellowPajama);
  });

  it('GET all pajamas', async () => {
    const bluePajama = await Pajama.insert({
      color: 'yellow',
      size: 'medium'
    });

    const yellowPajama = await Pajama.insert({
      color: 'blue',
      size: 'small'
    });
    const res = await request(app)
      .get('/api/v1/pajamas');

    expect(res.body).toEqual([bluePajama, yellowPajama]);
  });

  it('PUT pajama size', async () => {
    const pinkPair = await request(app)
      .post('/api/v1/pajamas')
      .send({
        color: 'pink',
        size: 'large'
      });

    const updatedPinkPair = await Pajama.updatePajama(pinkPair.body.id, {
      color: 'pink',
      size: 'XL'
    });

    const res = await request(app)
      .get(`/api/v1/pajamas/${updatedPinkPair.id}`);

    expect(res.body).toEqual(updatedPinkPair);
  });
});
