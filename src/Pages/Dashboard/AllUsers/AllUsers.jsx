import { useQuery } from "@tanstack/react-query";
import SectionTitlr from "../../../Components/SectionTitle/SectionTitlr";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitlr
        heading={"MANAGE ALL USERS"}
        subHeading={"How many??"}
      ></SectionTitlr>
      <div className="shadow-2xl shadow-black p-5 ">
        <div>
          {" "}
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
                {
                    users.map((user, index) => <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button className="btn text-2xl text-white bg-[#D1A054]"><FaUsers></FaUsers></button></td>
                        <td><button className="btn text-2xl text-white bg-red-700"><MdDelete /></button></td>
                      </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
