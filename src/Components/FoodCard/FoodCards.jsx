/* eslint-disable react/prop-types */

const FoodCards = ({ item }) => {
  const { name, image, price, recipe } = item;
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
            <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-[#BB8506]">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
