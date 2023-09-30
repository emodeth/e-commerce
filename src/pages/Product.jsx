import { useEffect, useState } from "react";
import { items } from "../components/AllData";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import ProductSpecs from "../components/ProductSpecs";
import TrendingSlider from "../components/TrendingSlider";
import Footer from "../components/Footer";

function Product() {
  const { id } = useParams();
  const [activeItem] = items.filter((item) => item.id === Number(id));
  const [activeImg, setActiveImg] = useState(activeItem.img);

  const { incQty, decQty, qty, onAdd } = useShop();

  function handleActiveImg(e) {
    setActiveImg(e.target.src);
  }

  useEffect(
    function () {
      setActiveImg(activeItem.img);
    },
    [activeItem.img]
  );

  return (
    <>
      <div className="container pt-[140px]">
        <div className="w-full flex relative flex-col items-center mb-[60px] md:flex-row md:items-stretch">
          <h3 className="text-[35px] absolute left-1/2 -translate-x-1/2 font-bold text-center top-0 w-[300px] md:w-auto">
            {activeItem.description}
          </h3>
          <div className=" h-full pt-[50px] w-full ">
            <div className="h-[70%] ml-[10px] flex items-center justify-center">
              <img
                className="w-[75%] h-full object-cover"
                src={activeImg}
                alt="product"
              />
            </div>
            <div className="flex items-center justify-center py-[30px] px-5 gap-3">
              <img
                className="cursor-pointer h-1/5 w-[22%] object-cover hover:outline hover:outline-1 outline-[#0000004d] hover:shadow-img transition-all"
                src={activeItem.img}
                alt="product"
                onMouseEnter={handleActiveImg}
              />
              {activeItem.otherImgs.map((img, i) => (
                <img
                  className="cursor-pointer h-1/5 w-[22%] object-cover hover:outline hover:outline-1 outline-[#0000004d] hover:shadow-img transition-all"
                  src={img}
                  alt="product"
                  onMouseEnter={handleActiveImg}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-full bg-[#e5e5e5] pt-[30px] px-[20px] pb-[40px] md:pt-[160px] md:pb[80px] md:px-[50px]">
            <p className="text-xl leading-[30px] mb-[50px]">
              {activeItem.specs}
            </p>
            <div className="flex justify-between items-center mb-[50px] flex-col gap-4 xs:flex-row">
              <p className="text-[25px] font-semibold">Quantity</p>
              <div className="flex">
                <button
                  onClick={() => decQty(Number(id))}
                  className="h-[55px] w-[55px] bg-white border border-black text-3xl transition-all duration-200 ease-in hover:bg-transparent"
                >
                  -
                </button>
                <div className="w-[55px] h-[55px] text-[25px] font-semibold flex items-center justify-center border-y border-black">
                  {qty[Number(id)]}
                </div>
                <button
                  onClick={() => incQty(Number(id))}
                  className="h-[55px] w-[55px] bg-white border border-black text-3xl transition-all duration-200 ease-in hover:bg-transparent"
                >
                  +
                </button>
              </div>
              <p className="text-[25px] font-semibold"></p>
            </div>
            <div className="flex gap-5 items-center flex-col xs:flex-row">
              <button
                onClick={() => onAdd(activeItem, qty[id])}
                className="w-full uppercase text-[16px] font-bold h-[55px]  border-2 border-black font-[Arial] duration-200 transition-all hover:bg-black hover:text-white"
              >
                Add To Cart
              </button>
              <button className="text-white bg-[#B6002C] uppercase text-[16px] font-bold h-[55px] w-full border-2 border-[#B6002C] font-[Arial] duration-200 transition-all hover:bg-transparent hover:text-[#B6002C]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductSpecs activeItem={activeItem} />
      <TrendingSlider />
      <Footer />
    </>
  );
}

export default Product;
