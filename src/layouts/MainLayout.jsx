import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/home/Header";
import Menu from "../components/home/Menu";
import MobileBottomNav from "../components/shared/MobileBottomNav";

const MainLayout = () => {
  return (
    <div className="bg-white">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default MainLayout;
