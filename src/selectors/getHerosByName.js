import { heros } from "../data/heros";

export const getHerosByName = (name = "") => {
  if (name === "") {
    return [];
  }
  return heros.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
