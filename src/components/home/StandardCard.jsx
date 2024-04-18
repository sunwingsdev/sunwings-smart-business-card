import demoCardImg5 from "../../assets/images/demo-card/normal/5.jpeg";
import demoCardImg3 from "../../assets/images/demo-card/normal/3.jpeg";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const StandardCard = () => {
  return (
    <section className="standard_card">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="standar_card_img">
              <img src={demoCardImg5} alt="" />
            </div>
          </div>
          <div className="col-lg-6 margin_top">
            <h2 className="text_26">
              স্ট্যান্ডার্ড সান উইংস স্মার্ট বিজনেস কার্ড
            </h2>
            <p className="text mb-3">
              এই প্ল্যান টি অর্ডার করার পূর্বে প্ল্যান এর বিস্তারিত জেনে নিন
            </p>
            <div className="card_works">
              <h2 className="text_26 mt-4">কার্ডের ফিচার সমূহ</h2>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">
                  1 NFC চিপ ও QR Code প্রিন্টেড প্লাস্টিক (PVC) কার্ড
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">ভার্চুয়াল প্রোফাইল এক্সেস</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">কন্টাক্ট ডিটেইলস ফোন বুকে সেভ করার অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">প্রোফাইল পিকচার, কভার ফটো অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">আনলিমিটেড কাস্টম কন্টাক্ট ও সোশ্যাল লিংক</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">
                  QR Code ডাউনলোড ও যেকোন যায়গায় ব্যবহারের সুবিধা
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">
                  4 গ্যালারী ইমেজ ডিসপ্লে অপশন ( 10 প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">কাস্টমাইজ কার্ড ডিজাইন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">1 থিম এক্সেস ( 8 থিম এভাইলেবল )</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">
                  প্রডাক্ট এবং সার্ভিস ডিসপ্লে সেকশন ( প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">
                  পোর্টফলিও ডিসপ্লে সেকশন ( প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">
                  টেস্টিমনিয়ালস স্লাইডার অপশন ( প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">
                  প্রয়োজন অনুযায়ী যেকোন কাস্টম সেকশন ( প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">
                  কাস্টম Javascript/CSS ( প্রিমিয়ামে এভাইলেবল )
                </p>
              </div>
              <div className="nfc_img_contain card_price">
                <del>১৪৯৯ টাকা</del>
                <p className="text">১২৫০ টাকা</p>
                <Link to="/order" className="btn3">
                  অর্ডার করুন
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center margin_top mt-5">
          <div className="col-lg-6 order_bottom margin_top">
            <h2 className="text_26">প্রিমিয়াম সান উইংস স্মার্ট বিজনেস কার্ড</h2>
            <p className="text mb-3">
              এই প্ল্যান টি অর্ডার করার পূর্বে প্ল্যান এর বিস্তারিত জেনে নিন
            </p>
            <div className="card_works">
              <h2 className="text_26 mt-4">কার্ডের ফিচার সমূহ</h2>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">
                  1 NFC চিপ ও QR Code প্রিন্টেড প্লাস্টিক (PVC) কার্ড
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">ভার্চুয়াল প্রোফাইল এক্সেস</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">কন্টাক্ট ডিটেইলস ফোন বুকে সেভ করার অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">প্রোফাইল পিকচার, কভার ফটো অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">আনলিমিটেড কাস্টম কন্টাক্ট ও সোশ্যাল লিংক</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">10 টা গ্যালারী ইমেজ ডিসপ্লে অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">
                  QR Code ডাউনলোড ও যেকোন যায়গায় ব্যবহারের সুবিধা
                </p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">কাস্টমাইজ কার্ড ডিজাইন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleCheck className="p_icon" />
                </div>
                <p className="text">প্রডাক্ট এবং সার্ভিস ডিসপ্লে সেকশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">৮ প্রিমেড প্রিমিয়াম থিম এক্সেস</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">পোর্টফলিও ডিসপ্লে সেকশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">টেস্টিমনিয়ালস স্লাইডার অপশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">প্রয়োজন অনুযায়ী যেকোন কাস্টম সেকশন</p>
              </div>
              {/* <!-- NFC_card_words --> */}
              <div className="NFC_card_words stander_card_item">
                <div>
                  <FaRegCircleXmark className="p_icon" />
                </div>
                <p className="text">কাস্টম Javascript/CSS</p>
              </div>
              <div className="nfc_img_contain card_price">
                <del>১৯৯৯ টাকা</del>
                <p className="text">১৬৯৯ টাকা</p>
                <Link to="/order" className="btn3">
                  অর্ডার করুন
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="standar_card_img">
              <img src={demoCardImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardCard;
