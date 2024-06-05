import Cover from "../../Sheared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import { Helmet } from "react-helmet-async";
import OrderCard from "../OrderCard/OrderCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {category} = useParams();
  const [menus] = useMenu();
  const salad = menus.filter((item) => item.category === "salad");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const drinks = menus.filter((item) => item.category === "drinks");
  const offered = menus.filter((item) => item.category === "offered");
  return (
    <div>
        <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <Cover
        image={shopImg}
        title={"Order Food"}
        paragraph={"Would you like to try a dish?"}
      ></Cover>

      <Tabs className="text-center my-20">
        <TabList className="uppercase font-bold">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
         <OrderCard item={salad}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard item={pizza}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard item={soup}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard item={dessert}></OrderCard>
        </TabPanel>
        <TabPanel>
        <OrderCard item={drinks}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
