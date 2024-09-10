import React from "react";
import logo from "../../assets/logo.svg";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src={logo} alt="" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
