import { sendText } from '../utils/twilio';
import Pajama from '../models/Pajama';

//  create a class to handle the insert() and sendText()
export default class placeOrderService {
  static async create({ color, size }) {
    const pajama = await Pajama.insert({ color, size });
    await sendText(
      process.env.ACCOUNT_HOLDER_NUMBER,
      `Your ${color} pajamas, size ${size} are shipped`
    );
    return pajama;
  }
}
