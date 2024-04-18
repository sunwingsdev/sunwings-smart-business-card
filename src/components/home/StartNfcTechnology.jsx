import officeIdImg1 from "../../assets/images/offices-id/1.jpeg";
import demoCardImg1 from "../../assets/images/demo-card/2.jpeg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StartNfcTechnology = () => {
  return (
    <section className="what_NFC_card">
      <div className="container-fluid">
        <div className="NFC_technology_contain">
          <h2 className="text_36">আমাদের কার্ডের ফিচার সমূহ</h2>
          <p className="text">
            আমরা দিচ্ছি অত্যাধুনিক NFC Technology এর ডিজিটাল কার্ড
          </p>
        </div>

        {/* <!-- NFC technology --> */}
        <div className="NFC_technology_item">
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">
              প্রোফাইল এ নাম, ডেজিগনেশন, ছবি ও কভার ফটো এড করতে পারবেন
            </p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">
              কোম্পানি, এডিশনাল কোম্পানি, জব এক্সপেরিয়েন্স ইত্যাদি দেখাতে পারবেন
            </p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">
              ইচ্ছেমত মোবাইল নং, ইমেইল এড্রেস, সোশ্যাল মিডিয়া ইত্যাদি এড করতে
              পারবেন
            </p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">গ্যালারীতে ছবি অথব ভিডিও দেখাতে পারবেন</p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">প্রডাক্ট অথবা সার্ভিস সো-কেসিং করাতে পারবেন</p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">পোর্টফলিও এড করতে পারবেন</p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">কাস্টমার ফিডব্যাক বা রিভিউ এড করতে পারবেন</p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">কিউ আর কোড দেখতে পারবেন</p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">
              ইনকোয়ারি ফর্মে কার্ডের ভিউয়ার দের কাছ থেকে ইনকোয়ারি নিতে পারবেন
            </p>
          </div>
          {/* <!-- NFC_card_words --> */}
          <div className="NFC_card_words">
            <div>
              <FaRegCircleCheck className="curcke_icon" />
            </div>
            <p className="text">
              আপনার প্রয়োজন মত যেকোন কাস্টমা সেকশন এড করতে পারবেন
            </p>
          </div>
        </div>

        {/* <!-- start NFC QR --> */}
        <div className="NFC_QR NFC_card">
          <div className="row">
            <div className="col-md-6">
              <div className="nfc_img_1 NFC_card_item">
                <Link to="/order">
                  {" "}
                  <img src={demoCardImg1} alt="NFC-QR" />{" "}
                </Link>
                <div className="nfc_img_contain">
                  <Link to="/order">
                    <h3 className="text_26">প্রিমিয়াম স্মার্ট বিজনেস কার্ড</h3>
                  </Link>
                  <del>১৯৯৯ টাকা</del>
                  <p>৯৯৯ টাকা</p>
                  <Link to="/order" className="btn3">
                    অর্ডার করুন
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 nfc_price_box0">
              <div className="nfc_img_2 NFC_card_item">
                <Link to="/order">
                  <img src={officeIdImg1} alt="NFC-QR-2" />
                </Link>
                <div className="nfc_img_contain">
                  <Link to="/order">
                    <h3 className="text_26">
                      প্রিমিয়াম স্মার্ট অফিস আইডি কার্ড
                    </h3>
                  </Link>
                  <del>১৯৯৯ টাকা</del>
                  <p>১৬৯৯ টাকা</p>
                  <Link to="/order" className="btn3">
                    অর্ডার করুন
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartNfcTechnology;
