import React from 'react'
import { Link } from 'react-router-dom';
const NabBar = () => {
  return (
    <div className="navv">
      <div className="mt-3">
        <div className="container-me">
          <div className="d-flex">
            <div className="data navtext">
              <Link to="/" className="text-decoration-none navtext">GELISGELITA.</Link>
            </div>
            <div className="navtext___list d-flex justify-content-center align-items-center">
              <Link to="/listado" className="text-decoration-none navtext___list">Listado</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NabBar
