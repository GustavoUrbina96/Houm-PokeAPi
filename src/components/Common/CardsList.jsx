import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@mui/material";
import { CardItem } from "./CardItem";
import { CardSkeleton } from "./CardSkeleton";

export const CardsList = (props) => {
  const { items, getPokemons, loading, capitalizeStr, isFiltering } = props;

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={!isFiltering ? getPokemons : null}
      hasMore={true}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{ marginTop: 16 }}
      >
        {items.map((item, index) => (
          <Grid item key={`Grid-${index}`}>
            {loading ? (
              <CardSkeleton key={`Skeleton-${index}`} />
            ) : (
              <CardItem item={item} key={index} capitalizeStr={capitalizeStr} />
            )}
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

CardsList.propTypes = {
  items: PropTypes.array,
  getPokemons: PropTypes.func,
  loading: PropTypes.bool,
  capitalizeStr: PropTypes.func,
  isFiltering: PropTypes.bool,
};

CardsList.defaultProps = {
  items: [],
  getPokemons: () => {},
  loading: false,
  capitalizeStr: () => {},
  isFiltering: false,
};
