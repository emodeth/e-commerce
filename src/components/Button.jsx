import { Link } from "react-router-dom";

function Button({ children }) {
  return (
    <button className="mt-5 font-[Arial] text-[17px] font-bold uppercase bg-black text-white p-[10px] duration-150 transition-all border-2 border-black hover:bg-transparent hover:text-black">
      <Link to="/categories/all">{children}</Link>
    </button>
  );
}

export default Button;
