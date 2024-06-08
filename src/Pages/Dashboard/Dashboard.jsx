import { Helmet } from "react-helmet-async";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaCalendarDays, FaShop } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoContract } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
// import SectionTitlr from "../../Components/SectionTitle/SectionTitlr";

const Dashboard = () => {
  return (
    <div className="flex ">
        <Helmet>
            <title>bistro boss || Dashboard</title>
        </Helmet>
        
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
              <FaHome className="text-3xl"/> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendarDays className="text-3xl"/>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <MdPayment className="text-3xl"/>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart className="text-3xl"/> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <VscPreview className="text-3xl"/>
              Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <TbBrandBooking className="text-3xl"/>
              My Booking
            </NavLink>
          </li>
        </ul>

        <hr />
        <ul className="menu my-5 gap-y-3 text-lg">
          <li>
            <NavLink to={"/"}>
              <FaHome className="text-3xl"/> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
            <IoMdMenu className="text-3xl"/> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/shop/salad"}>
              <FaShop className="text-3xl"/> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
            <IoContract className="text-3xl"/> Contact
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
