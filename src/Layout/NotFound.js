import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div>
      <h1>Not Found</h1>
      <Link to='/' className="btn btn-warning">Return Home</Link>
    </div>
  );
}

export default NotFound;
