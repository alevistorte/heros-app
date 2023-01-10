import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { getHeroById } from "../../selectors/getHeroById";

export const loader = ({ params }) => {
  const hero = getHeroById(params.heroId);
  if (!hero) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return hero;
};

export const HeroScreen = () => {
  const { id, superhero, alter_ego, publisher, characters, first_appearance } =
    useLoaderData();

  const navigate = useNavigate();
  return (
    <div>
      <div className="card mb-3 mt-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`../assets/heroes/${id}.jpg`}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-md-8 align-self-center">
            <div className="card-body">
              <h1 className="card-title">{superhero}</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Alter ego: </b> {alter_ego}
                </li>
                <li className="list-group-item">
                  <b>Publisher: </b> {publisher}
                </li>
                <li className="list-group-item">
                  <b>First appearance: </b> {first_appearance}
                </li>
                <li className="list-group-item">
                  <b>Characters: </b> {characters}
                </li>
              </ul>
              <div className="mt-5">
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate(-1)}
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
