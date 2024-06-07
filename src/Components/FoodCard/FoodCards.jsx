/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";

const FoodCards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ , refetch] = useCart();



  const handleAddToCard = food =>{
    if(user && user.email){
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        name,
        image,
        price,
        email: user.email
      }
      axiosSecure.post('/carts', cartItem)
      .then(res =>{
        console.log(res.data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added by cart✅`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      })
      
    }
    else{
      Swal.fire({
        title: "Please LogIn",
        text: "Please Log In then Add To The Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute right-0 bg-slate-900 text-white text-lg mr-4 mt-4 px-4 rounded-md">
          ${price}
        </p>
        <div className="card-body">
          <h2 className=" text-center text-xl font-semibold">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=> handleAddToCard(item)} className="btn text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-[#BB8506]">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
