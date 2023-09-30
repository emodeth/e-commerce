import Button from "./Button";

function Banner({ header, desc, btn, img, layout }) {
  return (
    <div className="container pb-[110px]">
      <div
        className={`flex items-center font-[Blinker] h-[400px] ${
          layout === "reverse" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col w-full h-full px-10 items-center justify-center bg-[#e9e9e9] sm:w-1/2 md:px-20 lg:px-[110px]">
          <div>
            <h2 className="font-semibold text-[32px] mb-[15px] leading-9 ">
              {header}
            </h2>
            <p className="text-[18px] leading-[22px]">{desc}</p>
            <Button>{btn}</Button>
          </div>
        </div>
        <div className="h-full w-1/2 hidden sm:block">
          <img src={img} alt="banner" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
