import { MdDelete } from "react-icons/md";
import SectionTitlr from "../../Components/SectionTitle/SectionTitlr";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="">
      <SectionTitlr
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitlr>

      <div className="shadow-2xl shadow-black min-h-screen p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold">
            Total Orders: {cart.length}
          </h3>
          <h3 className="text-3xl font-semibold">Total Price: ${totalPrice}</h3>
          { cart.length ? <Link to={"/dashboard/payment"}>
            <button  className="btn bg-[#D1A054] text-white">Pay</button>
          </Link>:
          <button disabled className="btn bg-[#D1A054] text-white">Pay</button>
          }
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item Img</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3>{item.name}</h3>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn text-2xl bg-red-700 text-white"
                    >
                      <MdDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
