import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Discount = () => {
  return (
    <section className="discount_area my-10">
      <div className="container">
        <div className="discount_contain">
          <h2 className="text_36">চলছে সীমিত সময়ের জন্য 15% ডিস্কাউন্ট</h2>
          <Link to="/order" className="">
            <div className="btn3 btn_d">
              <div className="flex items-center gap-2">
                <FaCartShopping />
                অর্ডার করুন
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discount;
