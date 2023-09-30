import { Link } from "react-router-dom";
import { IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import { useNavbar } from "../context/NavbarContext";
import { useShop } from "../context/ShopContext";

function NavigationMenu() {
  const { setIsActive, setIsCartActive, setOverlay, scrollToTop } = useNavbar();
  const { cartItems } = useShop();

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
      <li className="cursor-pointer relative">
        {cartItems.length === 0 ? null : (
          <div className="absolute -top-[18px] -right-2 w-[20px] h-[20px] bg-[#b6002c] flex items-center justify-center rounded-full text-white font-semibold  text-[14px] italic">
            {cartItems.length}
          </div>
        )}
        <IconShoppingCart
          onClick={() => {
            setIsCartActive(true);
            setOverlay(true);
          }}
        ></IconShoppingCart>
      </li>
      <li className="cursor-pointer hidden max-[600px]:block">
        <IconMenu2 onClick={() => setIsActive(true)} />
      </li>
    </ul>
  );
}

export default NavigationMenu;
