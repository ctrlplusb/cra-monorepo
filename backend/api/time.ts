import { IncomingMessage, ServerResponse } from 'http';
import currentTime from 'universal/current-time';

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end(currentTime());
};
