import { Outlet} from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../homelayout/HeroBanner";
import Slider from "../homelayout/Slider";
import Categories from "../homelayout/Categories";

const MainLayout = () => {
  
  return (
    <div>
      <div>
        <Navbar />
        <HeroBanner></HeroBanner>
        <Slider></Slider>
        <Categories></Categories>
        {/* bg-gradient-400 */}
        <div className="py-4  min-h-screen">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  );
};

export default MainLayout;
