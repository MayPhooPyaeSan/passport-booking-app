/** @format */

import express, { Request, Response } from "express";
import cors from "cors";
import { availability } from "./data";
const app = express();
const port = 5000;
app.use(cors());

app.get("/availability", (request: Request, response: Response) => {
  const query = request.query;
  const month = query.month as string;
  const selectedMonthAvailability = availability.filter(
    (item) => item.month === parseInt(month, 10)
  );
  response.send({ data: selectedMonthAvailability });
});

app.listen(port, () => {
  console.log(`Example at started listening at ${port}`);
});
