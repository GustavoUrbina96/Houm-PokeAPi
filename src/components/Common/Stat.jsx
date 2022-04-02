import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Stat(props) {
  const { name, amount } = props;

  return (
    <div>
      <Grid
        item
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="body1" style={{ color: "rgba(0,0,0,0.8)" }}>
          {name}
        </Typography>
        <Typography variant="h6" color="primary">
          {amount}
        </Typography>
      </Grid>
    </div>
  );
}
