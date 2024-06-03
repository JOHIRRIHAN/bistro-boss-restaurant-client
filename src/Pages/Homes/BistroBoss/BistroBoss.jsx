import img1 from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
  return (
    <div className="py-20 max-w-screen-lg mx-auto">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage:
            `url(${img1})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl h-60 rounded-md p-10 bg-white text-black">
            <h1 className="md:mb-5 text-2xl md:text-5xl font-[poppins]">Bistro Boss</h1>
            <p className="mb-5 md:px-20">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
