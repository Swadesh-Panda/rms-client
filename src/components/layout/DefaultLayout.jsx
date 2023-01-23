import React from "react";
import NavBar from "../common/appbar/NavBar";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

const DefaultLayout = ({ children }) => {
  return (
    <Stack gap="10px">
      <NavBar />
      <Box sx={{ mx: { xs: "10px", md: "100px" } }}>{children}</Box>
    </Stack>
  );
};

export default DefaultLayout;
