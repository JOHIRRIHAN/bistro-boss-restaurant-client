/* eslint-disable react/prop-types */

const ChefRecommendsCards = ({ item }) => {
  const { image } = item;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-xl font-semibold">Caeser Salad</h2>
          <p className="text-center">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions justify-center">
            <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-[#BB8506]">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCards;
