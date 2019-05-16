import { IncomingMessage, ServerResponse } from "http";
import fruit from "@ctrlplusb/lib/fruit.ts";

export default (req: IncomingMessage, res: ServerResponse) => {
  res.end(JSON.stringify(fruit));
};
