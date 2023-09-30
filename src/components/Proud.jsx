import { items } from "./AllData";

import ProudItem from "./ProudItem";

function Proud() {
  return (
    <div className="py-[110px]">
      <h2 className="container text-[26px] font-semibold font-[Blinker] mb-[42px]">
        {" "}
        Products we are proud of
      </h2>
      <div className="container grid gap-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {items.slice(0, 8).map((item, i) => (
          <ProudItem
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

export default Proud;
