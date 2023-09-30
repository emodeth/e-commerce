import HeroItem from "./HeroItem";
import { HeroItems } from "./HeroItems";

function Hero() {
  return (
    <div className="pt-[120px]">
      <div className="container grid grid-rows-2 grid-cols-2 gap-[13px] h-[500px] mt-[13px] md:grid-cols-hero grid-container">
        {HeroItems.map((heroItem, i) => (
          <HeroItem
            img={heroItem.img}
            header={heroItem.header}
            path={heroItem.path}
            key={i}
            grid={`grid-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
