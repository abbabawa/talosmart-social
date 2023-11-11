import { IAuth } from "@/types/auth";
import React from "react";

const AuthForm = ({ onSubmit, username, password, onChange, title }: IAuth) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="mb-3">
        <h3>{title}</h3>
      </div>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          name="username"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
