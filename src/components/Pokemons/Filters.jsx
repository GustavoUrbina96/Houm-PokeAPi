import React from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

export const Filters = (props) => {
  const { typeList, setTypeSelected, capitalizeStr } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{ paddingLeft: "4vw" }}
    >
      <Grid item xs={2}>
        <Autocomplete
          onChange={(event, value) => setTypeSelected(value)}
          freeSolo
          size="small"
          options={typeList.map((option) => capitalizeStr(option.name))}
          renderInput={(params) => <TextField {...params} label="Types" />}
        />
      </Grid>
    </Grid>
  );
};

Filters.propTypes = {
  typeList: PropTypes.array,
  typeSelected: PropTypes.string,
  setTypeSelected: PropTypes.func,
  capitalizeStr: PropTypes.func,
};

Filters.defaultProps = {
  typeList: [],
  typeSelected: "",
  setTypeSelected: () => {},
  capitalizeStr: () => {},
};
