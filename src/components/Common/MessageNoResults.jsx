import React from "react";
import { Grid, Typography } from "@mui/material";

export const MessageNoResults = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12} style={{ paddingTop: "20%" }}>
        <Typography variant="h5">
          Sorry we couldn't find any mantches for that filters.
        </Typography>
      </Grid>
    </Grid>
  );
};
