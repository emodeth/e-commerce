import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavbar } from "../context/NavbarContext";

function ProudItem({ id, img, desc, price }) {
  const { scrollToTop } = useNavbar();

  return (
    <div className="transition-all ease-in duration-150 cursor-pointer outline-2 outline outline-[#00000034] hover:outline-[#000000b3]">
      <Link to={`/product/${id}`} onClick={scrollToTop}>
        <div className="">
          <img className="w-full" src={img} alt="product" />
        </div>
        <div className="text-[17px] p-[10px] font-[Blinker]">
          <p>{desc}</p>
          <p className="text-[22px] font-semibold mt-[14px]">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProudItem;
