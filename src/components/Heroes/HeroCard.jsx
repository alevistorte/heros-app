import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 600 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`../assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">
              <small className="text-muted"> {first_appearance}</small>
            </p>
            <Link className="" to={`/hero/${id}`}>
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
