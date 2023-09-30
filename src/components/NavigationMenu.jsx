import { Link } from "react-router-dom";
import { IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import { useNavbar } from "../context/NavbarContext";
import { useEffect } from "react";

function NavigationMenu() {
  const { setIsActive, setIsCartActive, setOverlay, scrollToTop } = useNavbar();

  return (
    <ul className="flex items-center gap-[25px] text-[18px] uppercase max-[600px]:gap-[30px]">
      <li>
        <Link
          to="/categories/all"
          className="hover:underline max-[600px]:hidden"
        >
          Categories
        </Link>
      </li>
      <li>
        <Link
          to="/product/1"
          className="hover:underline max-[600px]:hidden"
          onClick={scrollToTop}
        >
          Product Page
        </Link>
      </li>
      <li className="cursor-pointer">
        <IconShoppingCart
          onClick={() => {
            setIsCartActive(true);
            setOverlay(true);
          }}
        />
      </li>
      <li className="cursor-pointer hidden max-[600px]:block">
        <IconMenu2 onClick={() => setIsActive(true)} />
      </li>
    </ul>
  );
}

export default NavigationMenu;
