import React from "react";
import { Card, CardContent, Grid, Paper, Skeleton } from "@mui/material";
import colors from "../../theme/colors";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  background-color: ${(props) => (props.color ? props.color : null)};
`;

export const CardSkeleton = () => {
  return (
    <Paper elevation={3}>
      <StyledCard sx={{ minWidth: 275 }} color={colors.salmon}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />

        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Skeleton animation="wave" height={10} width="80%" />
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Paper>
  );
};
