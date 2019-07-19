import { IncomingMessage, ServerResponse } from "http";
import fruit from "../../lib/fruit";

export default (req: IncomingMessage, res: ServerResponse) => {
  console.log("👀", fruit);
  res.end(JSON.stringify(fruit));
};
