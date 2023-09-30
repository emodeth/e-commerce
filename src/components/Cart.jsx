import { useShop } from "../context/ShopContext";
import { IconX } from "@tabler/icons-react";
import { useNavbar } from "../context/NavbarContext";
import emptyCart from "../img/cart/empty-cart.png";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems, totalPrice, totalQty } = useShop();
  const { isCartActive, setIsCartActive, setOverlay } = useNavbar();

  return (
    <div
      className={`${"w-full h-screen fixed top-0 -right-full z-[999] bg-white flex flex-col pt-[30px] px-[25px] pb-[10px] transition-all duration-300 sm:w-[500px]"} ${
        isCartActive ? "cart--active" : null
      }`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[21px] font-bold">Your Shopping Cart ({totalQty})</p>
        <IconX
          onClick={() => {
            setIsCartActive(false);
            setOverlay(false);
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="p-2 overflow-y-auto flex flex-col justify-between h-full">
        {totalQty === 0 ? (
          <div className="flex flex-col w-[160px] my-[150px] mx-auto items-center text-center">
            <img src={emptyCart} alt="empty cart" />
            <p className="text-[20px] font-semibold mt-[10px]">
              Your cart is empty
            </p>
            <button
              onClick={() => {
                setIsCartActive(false);
                setOverlay(false);
              }}
              className="mt-[30px] text-[20px] border transition-all font-medium border-black p-2 px-4 rounded-sm hover:bg-[#e7e7e7]"
            >
              Keep Browsing
            </button>
          </div>
        ) : (
          <div
            className="
          flex flex-col gap-5 md:h-[70%] mt-5 p-2 items-center"
          >
            {cartItems.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
          </div>
        )}
        {totalQty >= 1 && (
          <div className="flex flex-col items-center justify-between mt-[15px] py-[10px] border-t-[2px] border-dashed border-black pb-[20px] xs:flex-row ">
            <div className="flex flex-col gap-[10px] font-semibold text-[25px] items-center xs:items-start">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button className="border-[2px] border-black text-[20px] py-[10px] px-[35px] transition-all duration-200 mt-[30px] hover:bg-black hover:text-white">
              Go to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
