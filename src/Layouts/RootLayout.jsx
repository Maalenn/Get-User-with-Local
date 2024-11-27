import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Scroll from "../components/Scroll";
// import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Scroll />
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
