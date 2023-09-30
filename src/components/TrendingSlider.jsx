import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { items } from "./AllData";
import TrendingItem from "./TrendingItem";
import { useRef } from "react";

function TrendingSlider() {
  const slider = useRef();

  function handleLeft() {
    slider.current.scrollLeft -= 235;
  }

  function handleRight() {
    slider.current.scrollLeft += 235;
  }

  return (
    <div className="container pb-[100px]">
      <div className="flex justify-between">
        <h2 className="text-[26px] font-semibold ">Trending Now</h2>
        <div className="flex gap-1 mb-[26px]">
          <span className="text-white bg-[#373737] p-[8px] cursor-pointer">
            <IconArrowLeft onClick={handleLeft} />
          </span>
          <span className="text-white bg-[#373737] p-[8px] cursor-pointer">
            <IconArrowRight onClick={handleRight} />
          </span>
        </div>
      </div>
      <div
        className="flex gap-[22px] overflow-x-scroll overflow-y-hidden py-[10px] px-[6px] relative scroll-smooth whitespace-nowrap trending-slider"
        ref={slider}
      >
        {items.slice(7).map((item, i) => (
          <TrendingItem
            id={item.id}
            img={item.img}
            desc={item.description}
            price={item.price}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingSlider;
