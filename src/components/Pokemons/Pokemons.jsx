import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import pokemonServices from "../../services/pokemonServices";
import { CardsList } from "../Common/CardsList";
import { Filters } from "./Filters";
import { Divider } from "@mui/material";
import { MessageNoResults } from "../Common/MessageNoResults";

export const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limitApi] = useState(18);
  const [offSetApi, setOffSetApi] = useState(0);
  const [typeList, setTypeList] = useState([]);
  const [typeSelected, setTypeSelected] = useState();
  const [isFiltering, setIsFiltering] = useState(false);

  const getPokemons = async () => {
    // setLoading(true);
    setIsFiltering(false);
    const response = await pokemonServices
      .getPokemons(limitApi, offSetApi)
      .finally(() => {
        setOffSetApi(offSetApi + limitApi);
        setLoading(false);
      });

    setPokemonList((pokemonList) => [...pokemonList, ...response.results]);
  };

  const getPokemonsByType = async () => {
    setIsFiltering(true);
    setOffSetApi(0);
    setLoading(true);
    const response = await pokemonServices
      .getPokemonByType(typeSelected)
      .finally(() => {
        setLoading(false);
      });
    setPokemonList(response.pokemon);
  };

  const getTypes = async () => {
    const response = await pokemonServices.getTypes();
    setTypeList(response.results);
  };

  const capitalizeStr = (str) => {
    const firstLetter = str.charAt(0).toUpperCase();
    const remainStr = str.substring(1);
    return firstLetter + remainStr;
  };

  useEffect(() => {
    getPokemons();
    getTypes();
  }, []);

  useEffect(() => {
    setPokemonList([]);
    if (typeSelected) {
      getPokemonsByType();
    } else {
      getPokemons();
    }
  }, [typeSelected]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Filters
            typeList={typeList}
            typeSelected={typeSelected}
            setTypeSelected={setTypeSelected}
            capitalizeStr={capitalizeStr}
          />
        </Grid>
        <Grid item xs={12} style={{ paddingTop: 32 }}>
          <Divider />
        </Grid>
        <Grid item>
          {pokemonList.length ? (
            <CardsList
              isFiltering={isFiltering}
              capitalizeStr={capitalizeStr}
              items={pokemonList}
              getPokemons={getPokemons}
              loading={loading}
            />
          ) : (
            <MessageNoResults />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
