import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBanner from "../homelayout/HeroBanner";
import Slider from "../homelayout/Slider";
import Categories from "../homelayout/Categories";
import WhyChooseUs from "../homelayout/WhyChooseUs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading)
    return <div className="text-center py-10 text-gray-600">Loading your HomePage...</div>;


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
        <Footer />
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
