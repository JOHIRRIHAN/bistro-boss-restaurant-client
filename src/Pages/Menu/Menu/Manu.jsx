import { Helmet } from "react-helmet-async";
import Cover from "../../Sheared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import dessertimg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import MenuCategory from "../MenuCategorry/MenuCategory";
import DesertsCategory from "../Deserts/DesertsCategory";
import SaladsCategory from "../Salads/SaladsCategory";
import SoupCategory from "./Soup/SoupCategory";
import PizzaCategory from "../Pizza/PizzaCategory";
const Manu = () => {
  const [menus] = useMenu();
  const salad = menus.filter((item) => item.category === "salad");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const offered = menus.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      {/* offered  */}
      <Cover
        image={img}
        title="Our Menu"
        paragraph="Would You Like To Try Dish"
      ></Cover>
      <SectionTitlr
        heading="TODAY'S OFFER"
        subHeading="Don't miss"
      ></SectionTitlr>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert */}
      <Cover
        image={dessertimg}
        title="dessert"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <DesertsCategory items={dessert}></DesertsCategory>

      {/* pizza */}
      <Cover
        image={pizzaImg}
        title="pizza"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <PizzaCategory items={pizza}></PizzaCategory>

      {/* Salads */}
      <Cover
        image={saladImg}
        title="salads"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <SaladsCategory items={salad}></SaladsCategory>

      {/* Soup */}
      <Cover
        image={soupImg}
        title="soup"
        paragraph="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
      <SoupCategory items={soup}></SoupCategory>
    </div>
  );
};

export default Manu;
