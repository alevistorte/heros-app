import React, { useMemo } from "react";
import { getHerosByPublisher } from "../../selectors/getHerosByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);
  return (
    <div className="container">
      <div className="row row-cols-3">
        {heros.map((h) => (
          <div className="col" key={h.id}>
            <HeroCard {...h} />
          </div>
        ))}
      </div>
    </div>
  );
};
