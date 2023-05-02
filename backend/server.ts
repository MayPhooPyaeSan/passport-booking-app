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

app.post("/createBooking", (req: Request, res: Response) => {
  const { bookingDate, time } = req.body;
  const requestedAvailability = availability.find(
    (item) => item.date === bookingDate
  );
  if (!requestedAvailability) {
    return res.send({ error: "Date not found" });
  }
  const requestedTime = requestedAvailability.slots.find(
    (slot) => slot.time === time
  );
  if (!requestedTime) {
    return res.send({ error: "Time not found" });
  }
  if (requestedTime.availableSlot) {
    return res.send({ message: "No available slot" });
  }
  requestedTime.reserved = requestedTime.reserved + 1;
  requestedTime.availableSlot = requestedTime.availableSlot - 1;
  res.send(requestedTime);
});

app.listen(port, () => {
  console.log(`Example at started listening at ${port}`);
});
