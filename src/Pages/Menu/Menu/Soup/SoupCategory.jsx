/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItemCard from "../../../Sheared/MenuItemCard/MenuItemCard";

const SoupCategory = ({items, title}) => {
    return (
        <div className="my-20">
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto pb-10">
        {items?.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <Link to={`/shop/${title}`} className="flex flex-col items-center">
      <button className="btn btn-outline border-0 border-b-4 mb-4">
          Order Your Favorite food
        </button>
      </Link>
    </div>
    );
};

export default SoupCategory;