import { Outlet} from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../homelayout/HeroBanner";
import Slider from "../homelayout/Slider";
import Categories from "../homelayout/Categories";
import WhyChooseUs from "../homelayout/WhyChooseUs";

const MainLayout = () => {
  
  return (
    <div>
      <div>
        <Navbar />
        <HeroBanner></HeroBanner>
        <Slider></Slider>
        <Categories></Categories>
        <div className="py-4  min-h-screen">
          <Outlet />
        </div>
        <WhyChooseUs></WhyChooseUs>
        <Footer/>
      </div>

      <Toaster/>
    </div>
  );
};

export default MainLayout;
