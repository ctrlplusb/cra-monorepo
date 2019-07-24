import { IncomingMessage, ServerResponse } from "http";
import fruit from "../../lib/fruit";

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end(JSON.stringify(fruit));
};
