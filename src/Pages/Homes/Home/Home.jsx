import BistroBoss from "../BistroBoss/BistroBoss";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <BistroBoss></BistroBoss>
      <PopularMenu></PopularMenu>
      <ChefRecomends></ChefRecomends>
    </div>
  )
}

export default Home;