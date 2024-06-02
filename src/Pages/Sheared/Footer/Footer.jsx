import moment from "moment";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="md:flex w-full">
        <div className="w-full bg-[#243142] h-[200px] text-white text-center py-5">
          <h3 className="text-2xl ">CONTACT US</h3>
          <p className="py-1">123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p className="py-1">Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="w-full bg-[#0f1625] h-[200px] text-white text-center py-10">
          <h3 className="text-2xl ">Follow US</h3>
          <p className="py-3">Join us on social media</p>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-black text-white text-base">
        <aside>
          <p>
            Copyright © {moment().format("YYYY")} CulinaryCloud. All rights
            reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
