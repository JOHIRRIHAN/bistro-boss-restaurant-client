import { Helmet } from "react-helmet-async";
import Cover from "../../Sheared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
const Manu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>


      <Cover
      image={img}
      title='Our Menu'
      paragraph='Would You Like To Try Dish'
      ></Cover>
      
    </div>
  );
};

export default Manu;
