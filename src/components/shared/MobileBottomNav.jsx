import { FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  return (
    <div className="mobile_bottom_nav d-md-none">
      <div className="bottom_manu">
        <div className="single_bottom_item">
          <Link to="/order">
            <FaCartShopping className="fa-brands" />
            অর্ডার করুন
          </Link>
        </div>
        <div className="single_bottom_item">
          <Link to="/">
            <MdCall className="fa-brands" />
            কল করুন
          </Link>
        </div>
        <div className="single_bottom_item">
          <Link to="https://wa.me/+8801793457630">
            <FaWhatsapp className="fa-brands" />
            হোয়াটসঅ্যাপ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
