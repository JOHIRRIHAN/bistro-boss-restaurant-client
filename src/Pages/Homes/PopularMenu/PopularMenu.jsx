import { useEffect, useState } from "react";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import MenuItemCard from "../../Sheared/MenuItemCard/MenuItemCard";

const PopularMenu = () => {
  const [ menus, setMenus ] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((result) => result.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenus(popularItems);
      });
  }, [setMenus]);
  return (
    <section>
      <SectionTitlr
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTitlr>
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto pb-20">
        {menus?.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
