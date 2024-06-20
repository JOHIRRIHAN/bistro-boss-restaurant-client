import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-restaurant-server-lyart.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className=" max-w-screen-lg mx-auto my-20">
      <SectionTitlr
        heading="TESTIMONIALS"
        subHeading="What Our Client Say"
      ></SectionTitlr>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}> 
            <div className="mx-20">
              <div className="flex items-center justify-center text-6xl">
                <BiSolidQuoteSingleLeft />
                <BiSolidQuoteSingleLeft />
              </div>
              <Rating
                className="mx-auto my-5"
                style={{ maxWidth: 180 }}
                value={review.rating}
                
              />
              <p>{review.details}</p>
              <h3 className="text-center text-2xl text-yellow-600">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
