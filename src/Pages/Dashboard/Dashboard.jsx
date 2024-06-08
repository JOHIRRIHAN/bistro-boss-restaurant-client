import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054] p-5">
        <a className="text-xl ml-4 leading-3 font-bold tracking-[0.1rem]">
          BISTRO BOSS <br />
          <span className="text-base ml-4 font-normal tracking-[0.5rem]">
            Restaurant
          </span>
        </a>
        <ul className="menu my-5 gap-y-3 text-lg">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendarDays />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <MdPayment />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <VscPreview />
              Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <TbBrandBooking />
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
