import { FaEdit } from "react-icons/fa";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import useMenu from "../../../Hooks/useMenu";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("User confirmed deletion:", result.isConfirmed);
          const res = await axiosSecure.delete(`/menus/${item._id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if using different token storage
            },
          });
          console.log("Delete response:", res);

          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Item could not be deleted.",
              icon: "error",
            });
          }
        } catch (error) {
          console.error("Delete error:", error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the item.",
            icon: "error",
          });
        }
      }
    });
  };

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
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn bg-[#D1A054] text-white text-2xl">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn text-2xl bg-red-600 text-white"
                    >
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
