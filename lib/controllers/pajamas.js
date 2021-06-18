import Router from 'express';
// import Pajama from '../models/Pajama';
import placeOrderService from '../services/placeOrderService';
// import Pajama from '../models/Pajama';

export default Router()
  .post('/api/v1/pajamas', async (req, res) => {
    try {
      const pajama = await placeOrderService.create(req.body);
      res.send(pajama);
    } catch(err) {
      res.status(500).send(err);
    }
  });
