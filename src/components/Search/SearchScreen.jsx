import React, { useMemo } from "react";
import { Form, useNavigate, useLoaderData } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { getHerosByName } from "../../selectors/getHerosByName";
import { HeroCard } from "../Heroes/HeroCard";

export const loader = ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  return { q };
};

export const SearchScreen = () => {
  const { q } = useLoaderData();
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    search: q,
  });

  const { search: searchText } = formValues;
  const herosFiltered = useMemo(() => getHerosByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <div className="row mt-5">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="search"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary m-1 ">
              Search...
            </button>
          </Form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {herosFiltered.length === 0 && q === "" && (
            <div className="alert alert-info">Search a hero</div>
          )}
          {herosFiltered.length === 0 && q !== "" && (
            <div className="alert alert-danger">There is no a hero {q}</div>
          )}
          {herosFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
