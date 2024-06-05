/* eslint-disable react/prop-types */
import FoodCards from "../../../Components/FoodCard/FoodCards";

const OrderCard = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 mt-10 max-w-screen-lg mx-auto">
        {item.map((item) => (
          <FoodCards key={item._id} item={item}></FoodCards>
        ))}
      </div>
    );
};

export default OrderCard;