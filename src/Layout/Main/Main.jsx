import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Pages/Sheared/Footer/Footer";
import NavBars from "../../../src/Pages/Sheared/Headers/NavBars/"

const Main = () => {
    const location = useLocation();
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signin')
    return (
        <div>
            { noHeaderFooter || <NavBars></NavBars>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;