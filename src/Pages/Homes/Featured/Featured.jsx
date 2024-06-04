import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import image from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div>
      <div
        className="hero md:h-[900px] lg:h-[648px] text-white bg-fixed"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        
        <div className="hero-overlay bg-opacity-60"></div>
        
        <div className=" ">
        <div className="text-black"><SectionTitlr subHeading="Check It Out" heading='FROM OUR MENU'></SectionTitlr></div>
        
        
            {/* card  */}
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={image}
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <div className="text-white lg:w-1/2 md:ml-20">
                
              <h1 className="text-2xl font-bold">March 20, 2023</h1>
              <h1 className="text-xl font-bold uppercase">WHERE CAN I GET SOME?</h1>
              <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className=" bg-transparent rounded-xl p-4 hover:text-yellow-500 hover:border-white hover:p-4 hover:border-2  border-b-4 text-white text-lg ">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
