import { FaEdit } from "react-icons/fa";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ManageItems = () => {
  const [menu] = useMenu();
  const handleDeleteItem = (item)=>{

  }
  return (
    <div>
      <SectionTitlr
        heading={"Manage all items"}
        subHeading={"Hurry Up"}
      ></SectionTitlr>

      <div>
        <h3 className="text-3xl mb-4 font-bold">Total Items: {menu.length}</h3>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white text-lg">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            {menu.map((item, index) => (
              <tbody key={item._id}>
                {/* row 1 */}
                <tr className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-xl">
                        <img src={item.image} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <button  className="btn bg-[#D1A054] text-white text-2xl">
                      <FaEdit></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button onClick={()=> handleDeleteItem(item)} className="btn text-2xl bg-red-600 text-white">
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
