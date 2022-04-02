import { Chip } from "@mui/material";
import React from "react";
import { capitalizeStr } from "../../utils/utils";

export default function Type(props) {
  const { type } = props;
  return <Chip color="primary" label={capitalizeStr(type)} />;
}
