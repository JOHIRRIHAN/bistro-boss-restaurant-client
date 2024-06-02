import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Sheared/Footer/Footer";
import NavBars from "../../../src/Pages/Sheared/Headers/NavBars/"

const Main = () => {
    return (
        <div>
            <NavBars></NavBars>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;