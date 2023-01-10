import React from "react";
import { HeroList } from "../Heroes/HeroList";

export const DCScreen = () => {
  return (
    <div>
      <h1>DC's heros</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
