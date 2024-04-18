import { FaQrcode, FaPenToSquare, FaRegCircleCheck } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";

const WhatIsNfcCard = () => {
  return (
    <section className="what_NFC_card">
      <div className="container-fluid">
        <div className="what_NFC">
          <h2 className="text_36">
            সান উইংস স্মার্ট বিজনেস কার্ড কি ও এটা কিভাবে কাজ করে?
          </h2>
          <p className="text mb-3">
            সান উইংস স্মার্ট বিজনেস কার্ড হল একটি অত্যধুনিক প্রযুক্তি NFC এনাবল
            ও QR Code প্রিন্টেড স্মার্ট বিজনেস/ভিজিটিং কার্ড। যেটা প্লাস্টিক
            (PVC) ম্যাটেরিয়ালে তৈরি। এই কার্ড টি কাগজের বিজনেস কার্ড এর বিকল্প
            হিসেবে ব্যবহার করা হয়। এটি কাগজের প্রিন্টেড বিজনেস/ভিজিটিং কার্ড এর
            স্মার্ট ও ডিজিটাল সংস্করন বলা যেতে পারে।
          </p>

          <div className="card_works">
            {/* <!-- NFC_card_words --> */}
            <div className="NFC_card_words">
              <FaAddressCard className="card_icon" />
              <p className="text">
                সান উইংস স্মার্ট বিজনেস কার্ড টি সংগ্রহ করুন ও প্রোফাইল তৈরি
                করুন
              </p>
            </div>
            {/* <!-- NFC_card_words --> */}
            <div className="NFC_card_words">
              <FaQrcode className="card_icon" />
              <p className="text">
                যার সাথে তথ্য শেয়ার করতে চাচ্ছেন তার ফোনের কাছে কার্ড টি ট্যাপ
                করুন অথবা QR Code স্ক্যান করুন
              </p>
            </div>
            {/* <!-- NFC_card_words --> */}
            <div className="NFC_card_words">
              <FaPenToSquare className="card_icon" />
              <p className="text">
                প্রয়োজনীয় তথ্য শেয়ার করুন, ভিউ করুন অথবা প্রয়োজনে ফোন বুকে
                সংরক্ষন করে রাখুন
              </p>
            </div>
          </div>

          <h2 className="text_36 mt-5">
            সান উইংস স্মার্ট বিজনেস কার্ড ব্যবহারের সুবিধা সমূহ
          </h2>
          <p className="text mb-3">
            সান উইংস স্মার্ট বিজনেস কার্ড হল একটি অত্যধুনিক প্রযুক্তি NFC এনাবল
            ও QR Code প্রিন্টেড স্মার্ট বিজনেস/ভিজিটিং কার্ড। যেটা প্লাস্টিক
            (PVC) ম্যাটেরিয়ালে তৈরি। এই কার্ড টি কাগজের বিজনেস কার্ড এর বিকল্প
            হিসেবে ব্যবহার করা হয়। এটি কাগজের প্রিন্টেড বিজনেস/ভিজিটিং কার্ড এর
            স্মার্ট ও ডিজিটাল সংস্করন বলা যেতে পারে।
          </p>

          <div className="flex flex-col gap-4 mb-5">
            {/* <!-- NFC_card_words --> */}
            <div className="flex items-center gap-2">
              <div>
                <FaRegCircleCheck className="curcke_icon text-2xl" />
              </div>
              <p className="text">
                এই কার্ড টি আপনার ক্লায়েন্টস, কাস্টমারস, কলিগস অথবা আপনার
                ফ্রেন্ডসদের সামনে আপনার ইম্প্রেশন বাড়িয়ে তুলবে
              </p>
            </div>
            {/* <!-- NFC_card_words --> */}
            <div className="flex items-center gap-2">
              <div>
                <FaRegCircleCheck className="curcke_icon text-2xl" />
              </div>
              <p className="text">
                এই কার্ড এর দ্বারা কাগজের ভিজিটিং/বিজনেস কার্ড এর চেয়ে অনেক বেশি
                পরিমান এ ইনফরমেশন শেয়ার করা যায়
              </p>
            </div>

            {/* <!-- NFC_card_words --> */}
            <div className="flex items-center gap-2">
              <div>
                <FaRegCircleCheck className="curcke_icon text-2xl" />
              </div>
              <p className="text">
                কার্ডের ইনফরমেশ মোবাইল এ সেভ করে রাখা যায় জন্য ইনফরমেশন ভুল
                হওয়ার অথবা হারানোর সম্ভাবনা থাকে না
              </p>
            </div>

            {/* <!-- NFC_card_words --> */}
            <div className="flex items-center gap-2">
              <div>
                <FaRegCircleCheck className="curcke_icon text-2xl" />
              </div>
              <p className="text">
                হাজার হাজার কাগজের ভিজিটিং কার্ডের পরিবর্তে 1 টি মাত্র কার্ড
                সারা জীবন ব্যবহার করা যায় তাই অনেক সাশ্রয় হয়
              </p>
            </div>

            {/* <!-- NFC_card_words --> */}
            <div className="flex items-center gap-2">
              <div>
                <FaRegCircleCheck className="curcke_icon text-2xl" />
              </div>
              <p className="text">
                কাগজের ভিজিটিং কার্ডের অপচয় অনেকাংশে কমিয়ে দেয় এই কার্ড
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNfcCard;
