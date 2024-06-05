/* eslint-disable react/prop-types */
import MenuItemCard from "../../Sheared/MenuItemCard/MenuItemCard";

const PizzaCategory = ({ items }) => {
  return (
    <div className="my-20">
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto pb-10">
        {items?.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </div>
  );
};

export default PizzaCategory;
