/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import DateAndTime from "./DateAndTime";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UserInfo from "./UserInfo";
import ConfirmAndReview from "./ConfirmAndReview";
import { PassportAppContext } from "../contexts/PassportAppContext";

const steps = ["Date and time", "User info", "Review and confirm"];

const PassportStepper = () => {
  const { bookingDate, time, user } = useContext(PassportAppContext);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const createBooking = () => {
    console.log("create booking");
  };

  return (
    <Box sx={{ maxWidth: "50%", margin: "0 auto", mt: 5 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        <Box>
          {activeStep === 0 && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateAndTime />
            </LocalizationProvider>
          )}{" "}
          {activeStep === 1 && <UserInfo />}
          {activeStep === 2 && <ConfirmAndReview />}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length - 1 ? (
            <Button onClick={createBooking}>Confirm</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </>
    </Box>
  );
};

export default PassportStepper;
