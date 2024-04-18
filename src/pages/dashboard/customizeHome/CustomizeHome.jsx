import "./CustomizeHome.css";

import LogoSection from "../../../components/dashboard/customizeHome/LogoSection";
import BannerSection from "../../../components/dashboard/customizeHome/BannerSection";
import StandardCardSection from "../../../components/dashboard/customizeHome/StandardCardSection";
import PremiumCardSection from "../../../components/dashboard/customizeHome/PremiumCardSection";

const CustomizeHome = () => {
  return (
    <div>
      <h1 className="text_db_36">Customize Images</h1>
      {/* Logo Section */}
      <LogoSection />

      {/* Banner Section */}
      <BannerSection />

      {/* Visiting Information Section */}
      {/* <VisitingInformationSection/> */}

      {/* Standard Card Section */}
      <StandardCardSection />

      {/* Premium Card Section */}
      <PremiumCardSection />
    </div>
  );
};

export default CustomizeHome;
