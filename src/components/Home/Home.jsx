import { Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import houm from "../../images/houmLogo.svg";
import pokemonLogo from "../../images/pokemonLogo.png";
import { Add } from "@mui/icons-material";

const Paragraph = styled(Typography)`
  font-weight: 700;
`;

const Title = styled(Typography)`
  font-weight: 500;
`;
const Container = styled(Grid)`
  height: 80vh;
  padding-left: 30vw;
  padding-right: 30vw;
`;

export const Home = () => {
  return (
    <Container
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img style={{ width: 120 }} src={houm} alt="Houm logo" />
        </Grid>
        <Grid item>
          <Add />
        </Grid>
        <Grid item>
          <img style={{ width: 120 }} src={pokemonLogo} alt="Houm logo" />
        </Grid>
      </Grid>
      <Title variant="h5" gutterBottom>
        Welcome to the Houm excercise
      </Title>
      <Paragraph variant="body1">
        This is a coding exercise created for the Houm challenge for new
        developers. My name is Gustavo Urbina and I’m happy to participate with
        this project. I’m making use of the PokeAPI, designs and code
        implementation were made in React.
      </Paragraph>
    </Container>
  );
};
