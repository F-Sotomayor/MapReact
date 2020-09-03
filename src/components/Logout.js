import React from "react";
import "../styles/logout.scss";
import { auth } from "../firebase";

const Logout = () => {
  return (
    <button className="logout" onClick={() => auth.signOut()}>
      Cerrar Sesion
    </button>
  );
};

export default Logout;
