import React from "react";

export const ErrorMessage = ({ error, children }) => (
  <main className="container">
    <h3 style={{ color: "red" }}>ERROR: {error.message}</h3>
    {children}
  </main>
);

export default ErrorMessage;
