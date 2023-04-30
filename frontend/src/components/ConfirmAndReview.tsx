/** @format */

import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";
import dayjs from "dayjs";
import { Box } from "@mui/material";

const ConfirmAndReview = () => {
  const { bookingDate, user, time } = useContext(PassportAppContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <p>
        Date:{" "}
        <span style={{ fontWeight: "bold" }}>
          {dayjs(bookingDate).format("DD-MM-YYYY")}
        </span>
      </p>
      <p>
        Name: <span style={{ fontWeight: "bold" }}>{user?.name}</span>
      </p>
      <p>
        NRC Number:{" "}
        <span style={{ fontWeight: "bold" }}>{user?.nrcNumber}</span>
      </p>
      <p>
        Email: <span style={{ fontWeight: "bold" }}>{user?.email}</span>
      </p>
    </Box>
  );
};
export default ConfirmAndReview;
