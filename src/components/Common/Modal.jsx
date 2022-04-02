import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Type from "./Type";
import Stat from "./Stat";
import pokemonServices from "../../services/pokemonServices";
import Evolution from "./Evolution";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  boxShadow: 24,
  p: 4,
};

const StyledAvatar = styled(Avatar)`
  width: 10vw;
  height: 10vw;
`;

const StyledTitle = styled(Typography)`
  text-transform: capitalize;
  padding-right: 8px;
`;

const StyledSubtitlte = styled(Typography)`
  font-weight: 600;
`;

export default function DetailsModal(props) {
  const { open, setOpen, pkm } = props;

  const [evolutions, setEvolutions] = useState([]);

  const getEvolutions = async () => {
    const response = await pokemonServices.getEvolutionsByPokemonId(pkm.id);
    setEvolutions(response);
  };

  useEffect(() => {
    if (open) {
      getEvolutions();
    }
  }, [open]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Paper sx={style}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="stretch"
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            xs={12}
            spacing={2}
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: 16,
            }}
          >
            <Grid item>
              <Paper style={{ borderRadius: "50%" }}>
                <StyledAvatar alt={pkm.name} src={pkm.sprites.front_default} />
              </Paper>
            </Grid>
            <Grid
              item
              xs={6}
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <StyledTitle variant="h4" gutterBottom display="inline">
                  {pkm.name}
                </StyledTitle>
                <StyledSubtitlte
                  variant="body1"
                  color="GrayText"
                  display="inline"
                >
                  #{pkm.id}
                </StyledSubtitlte>
              </Grid>

              <Grid
                item
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                {pkm.types.map((type) => (
                  <Grid item key={type.type.name}>
                    <Type type={type.type.name} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="h5" style={{ paddingTop: 16 }} gutterBottom>
              Stats
            </Typography>
            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              {pkm.stats.map((el) => {
                const { stat, base_stat } = el;
                return (
                  <Grid item key={`${pkm.name}-${stat.name}`}>
                    <Stat name={stat.name} amount={base_stat} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography variant="h5" style={{ paddingTop: 16 }} gutterBottom>
              Evolutions
            </Typography>

            <Grid
              item
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              {evolutions.map((evolution, index) => {
                const { name, img } = evolution;
                const isLast = index === evolutions.length - 1;
                return (
                  <Grid item key={name}>
                    <Evolution name={name} image={img} hasArrow={!isLast} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}

DetailsModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  pkm: PropTypes.object,
};

DetailsModal.defaultProps = { open: false, setOpen: () => {}, pkm: {} };
