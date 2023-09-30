import { Link } from "react-router-dom";

function HeroItem({ img, header, path, grid }) {
  return (
    <div className={`cursor-pointer overflow-hidden relative ${grid}`}>
      <Link to={path}>
        <div className="absolute top-0 left-0 w-full h-full transition-all ease-in duration-300 bg-[#0000004d] z-10 hover:bg-[#00000080]"></div>
        <img className="w-full h-full object-cover" src={img} alt="home" />
        <p className="absolute bottom-[10px] text-[25px] left-[5px] text-white z-30 font-semibold font-[Blinker] leading-[30px] xs:left-[10px] xs:text-3xl sm:text-[38px] sm:left-5 sm:bottom-6">
          {header}
        </p>
      </Link>
    </div>
  );
}

export default HeroItem;
