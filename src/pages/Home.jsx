import CardGallery from "../components/home/CardGallery";
import Discount from "../components/home/Discount";
import FaqQuestions from "../components/home/FaqQuestions";
import NfcDemoCardProfile from "../components/home/NfcDemoCardProfile";
import NfcVideoCard from "../components/home/NfcVideoCard";
import StandardCard from "../components/home/StandardCard";
import StartFreeTrial from "../components/home/StartFreeTrial";
import StartNfcTechnology from "../components/home/StartNfcTechnology";
import TimeLineArea from "../components/home/TimeLineArea";
import UserContactForm from "../components/home/UserContactForm";
import VisitingInformation from "../components/home/VisitingInformation";
import WhatIsNfcCard from "../components/home/WhatIsNfcCard";
import WhatsApp from "../components/home/WhatsApp";

const Home = () => {
  return (
    <div>
      <VisitingInformation />
      <NfcVideoCard />
      <WhatIsNfcCard />
      <StartFreeTrial />
      <StartNfcTechnology />
      <TimeLineArea />
      <Discount />
      <CardGallery />
      <WhatsApp />
      <NfcDemoCardProfile />
      <StandardCard />
      <WhatsApp />
      <FaqQuestions />
      <UserContactForm />
    </div>
  );
};

export default Home;
