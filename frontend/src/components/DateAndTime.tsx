/** @format */

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const DateAndTime = () => {
  const contextData = useContext(PassportAppContext);
  const { updateData, fetchAvailability, availability, ...data } = contextData;

  const availableTimeSlot = availability
    .find((item) => item.date === dayjs(data.bookingDate).format("DD-MM-YYYY"))
    ?.slots.filter((slot) => slot.availableSlot > 0);

  const shouldDisableDate = (date: Dayjs) => {
    const availabilityDate = availability.find(
      (item) => item.date === date.format("DD-MM-YYYY")
    );
    if (!availabilityDate) return true;
    const isAvailable = availabilityDate.slots.some(
      (slot) => slot.availableSlot > 0
    );
    return isAvailable ? false : true;
  };
  return (
    <>
      <Box sx={{ maxWidth: 300, margin: "0 auto", minHeight: 200 }}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            label="Select date"
            disablePast
            format="DD-MM-YYYY"
            onOpen={() => {
              const currentMonth = dayjs().month();
              fetchAvailability(currentMonth);
            }}
            shouldDisableDate={shouldDisableDate}
            onMonthChange={(date: Dayjs) => fetchAvailability(date.month())}
            onChange={(value) => {
              const dayjsObj = value as unknown as Dayjs;
              // updateData({
              //   ...contextData,
              //   bookingDate: dayjsObj.toDate(),
              // });
            }}
          />
        </DemoContainer>
        {/* <Box sx={{ mt: 4 }}>
          {availableTimeSlot && (
            <>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Select Time
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group">
                  {availableTimeSlot.map((slot) => {
                    return (
                      <FormControlLabel
                        key={slot.time}
                        value={slot.time}
                        control={
                          <Radio
                            onChange={(event) =>
                              updateData({
                                ...contextData,
                                time: event.target.value,
                              })
                            }
                          />
                        }
                        label={slot.time}
                      />
                    );
                  })}
                  ;
                </RadioGroup>
              </FormControl>
            </>
          )}
        </Box> */}
      </Box>
    </>
  );
};
export default DateAndTime;
