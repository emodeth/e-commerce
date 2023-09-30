import { IconX } from "@tabler/icons-react";
import { useShop } from "../context/ShopContext";

function CartItem({ item }) {
  const id = item.id;
  const { toggleCartItemQuantity, onDelete } = useShop();

  return (
    <div className="flex bg-[#f2f2f2] border border-[#717171] rounded-[3px] xs:h-[150px] w-[90%] flex-col h-full pb-[5px] xs:flex-row xs:pb-0 xs:w-full">
      <div className="flex-[3]">
        <img
          className="h-full w-full rounded-[3px] object-cover bg-white"
          src={item.img}
          alt="product"
        />
      </div>
      <div className="flex-[5] flex flex-col justify-between p-[15px] items-center gap-10 xs:gap-5 xs:items-start">
        <p className="text-[24px]">{item.description}</p>
        <div className="flex items-center h-[30px]">
          <button
            onClick={() => toggleCartItemQuantity(id, "dec")}
            className="font-[Arial] text-[20px] w-[29px] bg-black text-white cursor-pointer"
          >
            -
          </button>
          <div className="flex items-center justify-center text-[20px] w-[30px] outline outline-black outline-offset-[-3px]">
            {item.quantity}
          </div>
          <button
            onClick={() => toggleCartItemQuantity(id, "inc")}
            className="font-[Arial] text-[20px] w-[29px] bg-black text-white cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-[2] xs:flex-col xs:items-start font-semibold p-[15px] text-right justify-between text-[24px] items-center">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
        <IconX
          onClick={() => onDelete(Number(id))}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CartItem;
