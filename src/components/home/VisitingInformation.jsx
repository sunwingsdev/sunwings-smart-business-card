import { FaAddressCard } from "react-icons/fa";
import { FaPenToSquare, FaQrcode } from "react-icons/fa6";
import { useGetAllStanndardCardImageQuery } from "../../redux/features/allApis/standardCardImageApi";
import { useGetAllPremiumCardImageQuery } from "../../redux/features/allApis/premiumCardImageApi";

const VisitingInformation = () => {
  const { data: allStandardCardInfo } = useGetAllStanndardCardImageQuery();
  const { data: allPremiumCardInfo } = useGetAllPremiumCardImageQuery();

  const latestStandardImage =
    allStandardCardInfo && allStandardCardInfo.length > 0
      ? allStandardCardInfo[allStandardCardInfo.length - 1]?.standardCardImage
      : null;
  const latestPremiumImage =
    allPremiumCardInfo && allPremiumCardInfo.length > 0
      ? allPremiumCardInfo[allPremiumCardInfo.length - 1]?.premiumCardImage
      : null;
  return (
    <section className="visiting_information">
      <div className="container-fluid">
        {/* <!-- visiting contain --> */}
        <div className="visiting_contain">
          <h4 className="text_20">
            আধুনিক যুগে ইনফরমেশন শেয়ার হবে আধুনিক পদ্ধতিতে
          </h4>
          <h2 className="text_36">সান উইংস স্মার্ট বিজনেস কার্ড</h2>
          <p className="text mb-3">
            আমরা অনেকেই হয়ত এখনো প্রফেশনাল ভাবে আমাদের তথ্য শেয়ারের জন্য কাগজের
            প্রিন্টেড বিজনেস কার্ড বা ভিজিটিং কার্ড ব্যবহার করি। কিন্তু বেশীরভাগ
            ক্ষেত্রেই দেখা যায় এই বিজনেস/ভিজিটিং কার্ড প্রয়োজনে আমাদের খুব একটা
            কাজে আসে না, তার কারন হল আমরা এই বিজনেস/ভিজিটিং কার্ড ফেলে দেই অথবা
            হারিয়ে ফেলি।
          </p>
          <p className="text mb-3">
            এছাড়াও কাজগের প্রিন্টেড বিজনেস/ভিজিটিং কার্ডে খুব কম তথ্যই শেয়ার করা
            যায়। ফলে বিজনেস সম্পর্কে বা নিজের সম্পর্কে অনেক গুরুত্বপূর্ন তথ্যই
            অন্যদের সামনে উপস্থাপন করা সম্ভব হয় না।
          </p>
          <p className="text">
            এই সমস্যা সমাধানে সান উইংস স্মার্ট বিজনেস কার্ড নিয়ে এসেছে অভিনব এক
            অত্যাধুনিক সমাধান – NFC/QR স্মার্ট বিজনেস/ভিজিটিং কার্ড
          </p>

          {/* <!-- start NFC QR --> */}
          <div className="NFC_QR">
            <div className="nfc_img_2">
              <img src={latestStandardImage} alt="NFC-QR-1" />
            </div>
            <div className="nfc_img_1">
              <img src={latestPremiumImage} alt="NFC-QR-2" />
            </div>
          </div>

          <h4 className="text_20">
            খুব সহজে পার্সোনাল অথবা বিজনেস ইনফরমেশন শেয়ার করুন ক্লায়েন্টস,
            কাস্টমারস, কলিগস অথবা ফ্রেন্ডস দের সাথে শুধু মাত্র কার্ড টি ফোনের
            সাথে ট্যাপ অথবা কিউ আর কোড স্ক্যান করে।
          </h4>
          <h2 className="text_36">কার্ড টি যেভাবে কাজ করে</h2>

          <div className="card_works">
            {/* <!-- card words single --> */}
            <div className="card_words_single mb-3">
              <FaAddressCard className="card_icon" />
              <p className="text">
                এটি একটি NFC Technology এর প্ল্যাস্টিক কার্ড তাই ইনফরমেশন শেয়ার
                করার জন্য যার সাথে শেয়ার করতে চাচ্ছেন তার ফোনে কার্ড টি ট্যাপ
                করুন
              </p>
            </div>

            {/* <!-- card words single --> */}
            <div className="card_words_single mb-3">
              <FaQrcode className="card_icon2" />
              <p className="text">
                কার্ড টি ফোনের সাথে ট্যাপ করলে অথবা কিউ আর স্ক্যান করলে তার ফোনে
                কার্ডের প্রোফাইল ওপেন হবে। এখন সে চাইলে তার ফোনে আপনার কন্টাক্ট
                ডিটেইলস সেভ করে রাখতে পারবে ও প্রয়োজনে অনুযায়ী আপনার সাথে
                যোগাযোগ করতে পারবে।
              </p>
            </div>

            {/* <!-- card words single --> */}
            <div className="card_words_single">
              <FaPenToSquare className="card_icon" />
              <p className="text">
                আপনি আপনার কার্ডের প্রোফাইলে যখন খুশি ইনফরমেশন এড, এডিট, আপডেট,
                অথবা ডিলিট করতে পারবেন
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingInformation;
