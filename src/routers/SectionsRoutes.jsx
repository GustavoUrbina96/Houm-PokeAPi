import React from "react";
import { HomeOutlined } from "@mui/icons-material";
import { Home } from "../components/Home/Home";
import { Pokemons } from "../components/Pokemons/Pokemons";

const sections = [
  {
    title: "Home",
    path: "/",
    component: <Home />,
    icon: <HomeOutlined />,
    // routes: [],
    // isRoute: true,
  },

  {
    title: "Pokemons",
    path: "/pokemons",
    component: <Pokemons />,
    icon: <HomeOutlined />,
    // routes: [],
    // isRoute: true,
  },
];

export default sections;
