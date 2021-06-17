import Router from 'express';
import Pajama from '../models/Pajama';
// import Pajama from '../models/Pajama';

export default Router()
  .post('/', async (req, res) => {
    try {
      const pajama = await Pajama.insert(req.body);
      res.send(pajama);
    } catch(err) {
      res.status(500).send(err);
    }
  });
