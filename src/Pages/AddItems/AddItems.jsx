import { useForm } from "react-hook-form";
import SectionTitlr from "../../Components/SectionTitle/SectionTitlr";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useAxiousPublic from "../../Hooks/useAxiousPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgHostingApi = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHosting}`;
// console.log(imgHosting)
const AddItems = () => {

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiousPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = {image: data.image[0]}
     console.log(imageFile)
    const res = await axiosPublic.post(imgHostingApi, imageFile, {
        headers: {
            'content-type' : 'multipart/form-data'  
        }
    });
    if(res.data.success){
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post('/menus', menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                title: "Good job!",
                text: `${data.name} item is added by Menu✅`,
                icon: "success"
              });
        }
       
    }
    console.log(res.data)
  };
  return (
    <div>
      <SectionTitlr
        heading={"ADD AN ITEM"}
        subHeading={"Add New?"}
      ></SectionTitlr>
      <div className="bg-base-200 px-20 py-20">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*  name*/}
          <label htmlFor="">Name</label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />

          <div className=" md:flex w-full gap-6 my-6">
            {/* category  */}
            <label className="form-control  w-1/2">
              <label htmlFor="">Category</label>
              <select
                {...register("category")}
                className="select select-bordered"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* price  */}
            <label htmlFor="" className="from-control w-1/2">
              <label htmlFor="">$ Price</label>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* recipe details  */}
          <label htmlFor="">Recipe Details*</label>
          <textarea
            {...register("recipe")}
            placeholder="Recipe Details"
            className="textarea textarea-bordered textarea-lg w-full h-72"
          ></textarea>

          {/* file input  */}
          <input
            {...register("image")}
            type="file"
            className="file-input w-full max-w-xs"
          />
          <br />
          {/* button  */}
          <button className="btn btn-active mt-4 bg-gradient-to-r from-[#835D23] to-[#B58130]  text-white">
            Add Items <MdOutlineRestaurantMenu className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
