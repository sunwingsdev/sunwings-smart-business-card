import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NfcVideoCard = () => {
  return (
    <section className="NFC_video_card">
      <Container>
        <div className="NFC_video_contain">
          <h4 className="text_20 text_border">
            NFC সান উইংস স্মার্ট বিজনেস কার্ড
          </h4>
          <h2 className="text_36">
            ১ বার পে করে কার্ড টি কিনে আজীবন ব্যবহার করুন নিশ্চিন্তে
          </h2>
          <p className="text">
            আমাদের কোন মাসিক কিংবা বাৎসরিক সাবস্ক্রিপশন ফি নেই। তাই শুধু মাত্র
            একবার কিনেই লাইফটাইম ব্যবহার করতে পারবেন।
          </p>
          <div className="NFC_btn">
            <Link to="/order" className="btn2">
              অর্ডার করুন
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NfcVideoCard;
