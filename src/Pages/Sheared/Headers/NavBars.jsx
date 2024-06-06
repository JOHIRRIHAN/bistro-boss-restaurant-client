import { Link } from "react-router-dom";
import avater from "../../../assets/icon/avater.png";
import avater1 from "../../../assets/others/profile.png";

const NavBars = () => {
  const navLink = (
    <>
      <li>
        <Link className="uppercase text-base font-semibold" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase text-base font-semibold" to={"/contact"}>
          Contact Us
        </Link>
      </li>
      <li>
        <Link className="uppercase text-base font-semibold" to={"/dashboard"}>
          DashBoard
        </Link>
      </li>
      <li>
        <Link className="uppercase text-base font-semibold" to={"/menu"}>
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="uppercase text-base font-semibold" to={"/shop/salad"}>
          Our Shop
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="text-xl leading-3 font-bold tracking-[0.1rem]">
          BISTRO BOSS <br />{" "}
          <span className="text-base font-normal tracking-[0.5rem]">
            Restaurant
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="avatar">
        <div className="w-14 mr-2 rounded-full">
          <img src={avater} />
        </div>
      </div>
      <div className="avatar">
        <h3 className="w-20">Sign Out</h3>
        <div className="w-12 rounded-full ">
          <img src={avater1} />
        </div>
      </div>
    </div>
  );
};

export default NavBars;
