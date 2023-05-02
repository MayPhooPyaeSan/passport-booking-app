/** @format */

import { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContext";
import { Box, TextField } from "@mui/material";

const UserInfo = () => {
  const { updateData, ...data } = useContext(PassportAppContext);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mt: 5 }}>
      <TextField
        id="name"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="Name"
        label="Name"
        variant="outlined"
        onChange={(event) =>
          updateData({
            ...data,
            user: { ...data.user, name: event.target.value },
          })
        }
        value={data.user?.name ? data.user.name : ""}
      />
      <TextField
        id="nrx_number"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="NRC Number"
        label="NRC Number"
        variant="outlined"
        onChange={(event) =>
          updateData({
            ...data,
            user: { ...data.user, nrcNumber: event.target.value },
          })
        }
        value={data.user?.nrcNumber ? data.user.nrcNumber : ""}
      />
      <TextField
        id="name"
        sx={{ maxWidth: "300px", margin: "0 auto", mb: 2 }}
        placeholder="Email"
        label="Email"
        variant="outlined"
        onChange={(event) =>
          updateData({
            ...data,
            user: { ...data.user, email: event.target.value },
          })
        }
        value={data.user?.email ? data.user.email : ""}
      />
    </Box>
  );
};

export default UserInfo;
