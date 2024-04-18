import { FaAddressCard, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const StartFreeTrial = () => {
  return (
    <section className="NFC_free_trial">
      <Container className="container">
        <h2 className="text_36">
          ফ্রি ট্রায়াল একাউন্টে রেজিস্টার করে নিজেই ডেমো বানিয়ে ব্যবহার করে
          দেখুন
        </h2>
        <div className="free_trial_btn">
          <Link
            to="/registration"
            className="btn2 flex items-center justify-center gap-2"
          >
            <FaAddressCard className="trial_icon" />
            <p>ফ্রি ট্রায়াল দেখতে রেজিস্টার করুন</p>
          </Link>
        </div>
        <div className="free_trial_socil_icon flex justify-center">
          <Link to="https://www.facebook.com/sunwingsinfocard">
            <FaSquareFacebook />
          </Link>
          <Link to="/">
            <FaLinkedin />
          </Link>
          <Link to="https://wa.me/+8801793457630">
            <FaSquareWhatsapp />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default StartFreeTrial;
