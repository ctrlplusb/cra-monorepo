import { IncomingMessage, ServerResponse } from 'http';
import currentTime from '../lib/current-time';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end(currentTime());
};
