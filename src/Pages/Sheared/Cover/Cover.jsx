/* eslint-disable react/prop-types */
const Cover = ({image, title, paragraph}) => {
  return (
    <div
      className="hero h-[700px] bg-fixed"
      style={{
        backgroundImage:
          `url("${image}")`,
      }}
    >
      <div className="hero-overlay max-w-screen-lg h-[400px] bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl md:text-7xl font-bold">{title}</h1>
          <p className="mb-5 ">
            {paragraph}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Cover;
