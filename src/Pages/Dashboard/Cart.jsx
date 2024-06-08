import { MdDelete } from "react-icons/md";
import SectionTitlr from "../../Components/SectionTitle/SectionTitlr";
import useCart from "../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
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
          <button className="btn bg-[#D1A054] text-white">Pay</button>
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
                {
                    cart.map(item => <tr key={item._id}>
                        <th>
                          {}
                        </th>
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
                          <button className="btn text-2xl bg-red-700 text-white">
                            <MdDelete />
                          </button>
                        </th>
                      </tr>)
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
