import Cover from "../../Sheared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menus] = useMenu();
    const salad = menus.filter(item => item.category === "salad");
    const dessert = menus.filter(item => item.category === "dessert");
    const pizza = menus.filter(item => item.category === "pizza");
    const soup = menus.filter(item => item.category === "soup");
    const offered = menus.filter(item => item.category === "offered");
  return (
    <div>
      <Cover
        image={shopImg}
        title={"Order Food"}
        paragraph={"Would you like to try a dish?"}
      ></Cover>

      <Tabs className='text-center my-20'>
        <TabList className='uppercase font-bold'>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          
        </TabPanel>
        <TabPanel>
          <h2>Pizza</h2>
        </TabPanel>
        <TabPanel>
          <h2>Soups</h2>
        </TabPanel>
        <TabPanel>
          <h2>Desserts</h2>
        </TabPanel>
        <TabPanel>
          <h2>Drinks</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Shop;
