/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
//     y + height / 3
//   }
//     ${x + width / 2}, ${y}
//     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
//     x + width
//   }, ${y + height}
//     Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // eslint-disable-next-line no-unused-vars
  const { data: stats = {}} = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="text-2xl">
      <h1>
        <span>Hi! Welcome</span>{" "}
        {user?.displayName ? user?.displayName : "Back"}
      </h1>

      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-value">100</div>
          <div className="stat-title">Revenue</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-title">Users</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value">1,200</div>
          <div className="stat-title">Order</div>
        </div>
      </div>

      <div>
        <div>
        {/* <BarChart
      width={500}
      height={300} */}
    {/* //   data={stats} */}
    {/* //   margin={{ */}
        {/* // top: 20,
        // right: 30,
        // left: 20,
    //     bottom: 5,
    //   }}
    // > */}
    {/* // <CartesianGrid strokeDasharray="3 3" />
    // <XAxis dataKey="category" />
    // <YAxis />
    // <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}> */}
      {/* {stats.map((entry, index) => ( */}
        {/* <Cell key={`cell-${index}`} fill={colors[index % 20]} /> */}
      {/* ))} */}
    {/* </Bar>
  </BarChart> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AdminHome;
