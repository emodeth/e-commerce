import { Link } from "react-router-dom";
import { IconX } from "@tabler/icons-react";
import { useNavbar } from "../context/NavbarContext";

function MobileNavbar() {
  const { isActive, setIsActive } = useNavbar();

  return (
    <ul
      className={`${"bg-white fixed -left-full top-0 w-full h-full flex flex-col justify-center items-center z-50 uppercase font-[Blinker] text-3xl gap-5 transition-all duration-300"} ${
        isActive && "mobile-navbar--active"
      }`}
    >
      <li>
        <IconX
          className="absolute right-5 top-10"
          size={30}
          onClick={() => setIsActive(false)}
        />
      </li>
      <li onClick={() => setIsActive(false)}>
        <Link to="/categories/all">Categories</Link>
      </li>
      <li onClick={() => setIsActive(false)}>
        <Link to="/product/1">Product</Link>
      </li>
    </ul>
  );
}

export default MobileNavbar;
