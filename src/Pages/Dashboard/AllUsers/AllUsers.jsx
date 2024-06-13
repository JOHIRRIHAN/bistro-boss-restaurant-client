import { useQuery } from "@tanstack/react-query";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
// import useCart from "../../../Hooks/useCart";

const AllUsers = () => {
  // const [ refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
      },
      });
    console.log("users", users);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch()
        Swal.fire({
          title: "Good job!",
          text: `${user.name} added by Admin`,
          icon: "success",
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    <div>
      <SectionTitlr
        heading={"MANAGE ALL USERS"}
        subHeading={"How many??"}
      ></SectionTitlr>
      <div className="shadow-2xl shadow-black p-5 max-w-screen-lg mx-auto">
        <div>
          <h3 className="text-3xl font-semibold mb-5">
            Total Users: {users.length}
          </h3>
        </div>
        <div>
          <div className="overflow-x-auto h-screen">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white text-lg">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      { user.role === 'admin' ? 'Admin' : <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn text-2xl text-white bg-[#D1A054]"
                      >
                        <FaUsers></FaUsers>
                      </button>}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="btn text-2xl text-white bg-red-700"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
