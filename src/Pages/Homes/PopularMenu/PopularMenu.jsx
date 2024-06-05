import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import MenuItemCard from "../../Sheared/MenuItemCard/MenuItemCard";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter(item => item.category === "popular");

  return (
    <section>
      <SectionTitlr
        heading="FROM OUR MENU"
        subHeading="Check it out"
      ></SectionTitlr>
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto pb-10">
        {popular?.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <button className="btn btn-outline border-0 border-b-4 mb-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
