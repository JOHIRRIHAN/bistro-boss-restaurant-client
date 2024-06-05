
const FoodCards = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className=" text-center text-xl font-semibold">{}</h2>
          <p className="text-center">{}</p>
          <div className="card-actions justify-center">
            <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-[#BB8506]">Add to Card</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FoodCards;