import { NavLink, Link, useParams } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons-react";

import { CategoriesHeaders } from "./CategoriesHeaders";

function CategoriesHeader() {
  const { category } = useParams();

  return (
    <div className="pt-[170px]">
      <div className="container flex items-center mb-16 ">
        <Link to="/home" className={`flex items-center `}>
          <IconChevronLeft />
          <span>Home</span>
        </Link>
        <h3 className="uppercase font-bold text-[27px] mx-auto">
          {category === "skin-care" ? "Skin Care" : category}
        </h3>
      </div>
      <div className="container flex items-center justify-center gap-4 flex-wrap">
        {CategoriesHeaders.map((header, i) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold outline-[#000] outline outline-2 py-[6px] px-4 text-[14px]"
                : "outline outline-2 outline-[#0000004d] transition-all duration-200 ease-in py-[6px] px-4 text-[14px] hover:outline-[#00000080]"
            }
            to={header.path}
            key={i}
          >
            {header.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CategoriesHeader;
