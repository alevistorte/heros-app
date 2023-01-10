import React from "react";
import { heros } from "../data/heros";
import { HeroCard } from "./Heroes/HeroCard";

export const HomeScreen = () => {
  return (
    <div>
      <h1>Super Heros</h1>
      <hr />
      <div className="container">
        <div className="row row-cols-3">
          {heros.map((h) => (
            <div className="col" key={h.id}>
              <HeroCard {...h} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
