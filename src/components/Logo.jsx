import { Link } from "react-router-dom";

import logo from "../img/newlogo2.png";

function Logo() {
  return (
    <Link to="/home" className="flex items-center">
      <img className="w-[85px] h-[85px]" src={logo} alt="logo" />
    </Link>
  );
}

export default Logo;
