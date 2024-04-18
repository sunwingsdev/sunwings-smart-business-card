import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <section className="discount_area">
      <div className="container">
        <div className="whatsApp_contain px-6">
          <div className="whatsapp_item">
            <h2 className="text-3xl font-semibold text-[#ff7201] mb-7 leading-10">
              কর্পোরেট অফিসের জন্য নিতে চাচ্ছেন?
            </h2>
            <p className="text mb-3">
              আপনি যদি আপনার কোম্পানির জন্য কর্পোরেট প্ল্যান নিতে চান তাহলে
              যোগাযোগ করুন
            </p>
          </div>
          <Link
            to="https://wa.me/+8801793457630"
            target="_blank"
            className="w-1/2"
          >
            <div className="btn3 btn_wa">
              <div className="flex items-center gap-2">
                <FaWhatsapp />
                <p>হোয়াটসঅ্যাপ মেসেজ করুন</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp;
