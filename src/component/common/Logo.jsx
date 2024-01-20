import React from 'react';
import logo from "../assests/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" width={100} />
      </Link>
    </div>
  );
}

export default Logo;