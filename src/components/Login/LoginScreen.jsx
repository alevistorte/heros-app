import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const [isRequired, setIsRequired] = useState(false);
  const [formValues, handleInputChange] = useForm({
    username: "",
  });

  const { username } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "") {
      return setIsRequired(true);
    }
    dispatch({
      type: types.login,
      payload: {
        name: username,
      },
    });
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <div className="d-flex justify-content-center">
        <div>
          <form>
            <input
              type="text"
              // className="form-control"
              className={
                isRequired
                  ? "form-control border-danger border-2"
                  : "form-control "
              }
              placeholder="username"
              onChange={(e) => {
                setIsRequired(false);
                return handleInputChange(e);
              }}
              name="username"
              autoComplete="off"
            />
            {isRequired && (
              <p className="text-center fw-lighter">username is required</p>
            )}
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mt-2" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
