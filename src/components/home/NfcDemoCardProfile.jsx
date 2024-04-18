import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

import officeCard1 from "../../assets/images/demo_offices_card/1.webp";
import officeCard2 from "../../assets/images/demo_offices_card/2.webp";
import officeCard3 from "../../assets/images/demo_offices_card/3.webp";
import officeCard4 from "../../assets/images/demo_offices_card/4.webp";

const NfcDemoCardProfile = () => {
  return (
    <section className="NFC_demo_card_profile mt-4">
      <div className="container">
        <div className="NFC_demo_profile_header">
          <h2 className="text_36">ডেমো কার্ড প্রোফাইল</h2>
        </div>

        <div className="all_card_gallery profile_card_gallery">
          {/* <!-- single card gallery --> */}
          <div className="single_card_gallery">
            <div className="image_wrapper_profile">
              <Link to="https://badar.sunwingsinfocard.com/" target="_blank">
                <img className="image-1" src={officeCard1} />
              </Link>
            </div>
            <Link
              to="https://badar.sunwingsinfocard.com/"
              target="_blank"
              className="btn3 btn_profile"
            >
              <FaRegEye className="profile_icon" />
              কার্ড প্রোফাইল থিম
            </Link>
          </div>

          {/* <!-- single card gallery --> */}
          <div className="single_card_gallery">
            <div className="image_wrapper_profile">
              <Link to="demo-1.html" target="_blank">
                <img className="image-1" src={officeCard2} />
              </Link>
            </div>
            <Link to="demo-1.html" target="_blank" className="btn3 btn_profile">
              <FaRegEye className="profile_icon" />
              কার্ড প্রোফাইল থিম
            </Link>
          </div>

          {/* <!-- single card gallery --> */}
          <div className="single_card_gallery">
            <div className="image_wrapper_profile">
              <Link to="demo-1.html" target="_blank">
                <img className="image-1" src={officeCard3} />
              </Link>
            </div>
            <Link to="demo-1.html" target="_blank" className="btn3 btn_profile">
              <FaRegEye className="profile_icon" />
              কার্ড প্রোফাইল থিম
            </Link>
          </div>

          {/* <!-- single card gallery --> */}
          <div className="single_card_gallery">
            <div className="image_wrapper_profile">
              <Link to="demo-1.html" target="_blank">
                <img className="image-1" src={officeCard4} />
              </Link>
            </div>
            <Link to="demo-1.html" target="_blank" className="btn3 btn_profile">
              <FaRegEye className="profile_icon" />
              কার্ড প্রোফাইল থিম
            </Link>
          </div>
        </div>
        <div className="all_card_view">
          <Link to="/demo-profile" className="btn4">
            <span>সকল ডেমো প্রোফাইল দেখুন</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NfcDemoCardProfile;
