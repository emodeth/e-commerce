import { Link } from "react-router-dom";
import { useNavbar } from "../context/NavbarContext";

function TrendingItem({ img, desc, price, id }) {
  const { scrollToTop } = useNavbar();

  return (
    <div className="transition-all duration-200 ease-in outline outline-2 outline-[#00000034] hover:outline-[#000000b3]">
      <Link to={`/product/${id}`} onClick={scrollToTop}>
        <div className="w-[210px]">
          <img src={img} alt="product" className="w-full h-full" />
        </div>
        <div className="flex flex-col text-[17px] p-[10px] gap-[14px]">
          <p>{desc}</p>
          <p className="font-semibold text-[22px]">{price}$</p>
        </div>
      </Link>
    </div>
  );
}

export default TrendingItem;
