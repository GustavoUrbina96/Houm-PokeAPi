import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { capitalizeStr } from "../../utils/utils";

export default function Evolution({ name, image, hasArrow }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid
        xs={6}
        item
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography style={{ paddingLeft: 10 }}>
            {capitalizeStr(name)}
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <img src={image} alt={name} />
        </Grid>
      </Grid>

      <Grid item xs={6} style={{ paddingTop: 24, paddingLeft: 24 }}>
        {hasArrow && <ArrowRightAltOutlined />}
      </Grid>
    </Grid>
  );
}
