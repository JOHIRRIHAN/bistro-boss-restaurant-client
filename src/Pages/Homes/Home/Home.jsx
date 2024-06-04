import { Helmet } from "react-helmet-async";
import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonnials/Testimonials";
import CallUs from "../callUs/CallUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Hero></Hero>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefRecomends></ChefRecomends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home;