import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Chip,
  Grid,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import pokemonServices from "../../services/pokemonServices";
import DetailsModal from "./Modal";
import colors from "../../theme/colors";
import { styled } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const StyledCard = styled(Card)`
  background-color: ${(props) => (props.color ? props.color : null)};
`;

export const CardItem = (props) => {
  const { item, capitalizeStr } = props;
  const [pkm, setPkm] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoadingInfo, setIsLoadingInfo] = useState(false);

  const getPkm = async (name) => {
    setIsLoadingInfo(true);
    const response = await pokemonServices
      .getPokemonByName(name)
      .finally(() => {
        setIsLoadingInfo(false);
      });
    setPkm(response);
  };

  useEffect(() => {
    if (item.name) {
      getPkm(item.name);
    } else {
      getPkm(item.pokemon.name);
    }
  }, [item]);

  return pkm ? (
    <>
      <Paper
        style={{ cursor: "pointer" }}
        elevation={3}
        onClick={() => setOpenModal(true)}
      >
        <StyledCard sx={{ minWidth: 275 }} color={colors.salmon}>
          {isLoadingInfo ? (
            <Skeleton
              sx={{ height: 275 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <LazyLoadImage
              effect="opacity"
              alt={pkm.name}
              height={275}
              src={pkm.sprites.front_default} // use normal <img> attributes as props
              width={275}
            />
          )}

          <CardContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="caption" color="text.secondary">
                  {`#${pkm.id}`}
                </Typography>
                <Typography
                  style={{ fontWeight: 600 }}
                  variant="h5"
                  color="text.secondary"
                  gutterBottom
                >
                  {`${capitalizeStr(pkm.name)}`}
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                {pkm.types.map((type) => (
                  <Grid item key={type.type.name}>
                    <Chip
                      color="primary"
                      label={capitalizeStr(type.type.name)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </StyledCard>
      </Paper>
      <DetailsModal open={openModal} setOpen={setOpenModal} pkm={pkm} />
    </>
  ) : null;
};

CardItem.propTypes = {
  item: PropTypes.object,
  capitalizeStr: PropTypes.func,
};

CardItem.defaultProps = { item: {}, capitalizeStr: () => {} };
