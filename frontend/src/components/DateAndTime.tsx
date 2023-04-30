/** @format */

import { Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const DateAndTime = () => {
  const contextData = useContext(PassportAppContext);
  console.log(contextData);
  const { updateData, fetchAvailability, ...data } = contextData;
  return (
    <>
      <Box sx={{ maxWidth: 300, margin: "0 auto", minHeight: 200 }}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            label="Select date"
            disablePast
            format="DD-MM-YYYY"
            onOpen={() => {
              console.log("onopen");
              const currentMonth = dayjs().month();
              fetchAvailability(currentMonth);
              console.log(fetchAvailability);
            }}
            onMonthChange={(date: Dayjs) => fetchAvailability(date.month())}
            onChange={(value) => {
              const dayjsObj = value as unknown as Dayjs;
              updateData({
                ...contextData,
                bookingDate: dayjsObj.toDate(),
              });
            }}
          />
        </DemoContainer>
      </Box>
    </>
  );
};
export default DateAndTime;
