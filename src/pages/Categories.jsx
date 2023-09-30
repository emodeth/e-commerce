import { useParams } from "react-router-dom";
import { items } from "../components/AllData";

import CategoriesHeader from "../components/CategoriesHeader";
import ProudItem from "../components/ProudItem";

function Categories() {
  const { category } = useParams();
  let filter;

  category.charAt(category.length - 1) === "s"
    ? (filter = category.slice(0, category.length - 1))
    : (filter = category);

  const filtredItems =
    filter !== "all" ? items.filter((item) => item.category === filter) : items;

  return (
    <div>
      <CategoriesHeader />
      <div className="container grid gap-5 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-[110px]">
        {filtredItems.map((item, i) => (
          <ProudItem
            id={item.id}
            price={item.price}
            desc={item.description}
            img={item.img}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
