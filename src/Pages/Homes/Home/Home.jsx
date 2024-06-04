import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonnials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ChefRecomends></ChefRecomends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home;