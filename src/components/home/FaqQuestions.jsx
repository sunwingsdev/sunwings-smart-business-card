import { Accordion } from "react-bootstrap";
const FaqQuestions = () => {
  return (
    <section className="visiting_card_faq">
      <div className="faq_heading">
        <h2 className="text_36">আপনাদের সচরাচর কিছু প্রশ্ন ও উত্তর</h2>
      </div>

      <div className="faq_visiting_card_area">
        <div className="container">
          {/* <!-- visiting faq --> */}
          <div className="visiting_faq">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  QR Code কি ও এটা কিভাবে কাজ করে?
                </Accordion.Header>
                <Accordion.Body>
                  QR Code হল একটি মেশিন রিডেবল ছবি যেটার মধ্যে কোন নির্দিষ্ট
                  তথ্য সংরক্ষন করে রাখা যায় ও প্রয়োজনে সেই তথ্য QR Code Scanner
                  দিয়ে দেখা যায়।
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  সান উইংস স্মার্ট বিজনেস কার্ড এর কি মাসিক অথবা বাৎসরিক চার্জ
                  আছে?
                </Accordion.Header>
                <Accordion.Body>
                  সান উইংস স্মার্ট বিজনেস কার্ড শুধু মাত্র একবারেই কিনতে হয় এবং
                  এটা লাইফ টাইম ফ্রি তে ব্যবহার করা যাবে। কোন রকম মাসিক বা
                  বাৎসরিক চার্জ নাই।
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  সেসব ডিভাইসে NFC নাই সেসব ডিভাইসে এটা কিভাবে কাজ করবে?
                </Accordion.Header>
                <Accordion.Body>
                  সান উইংস স্মার্ট বিজনেস কার্ড এ NFC এর বিকল্প হিসেবে QR Code
                  Scanning এর সুবিধা রাখা হয়েছে। যেসব স্মার্টফোনে NFC নাই তারা
                  QR Code ব্যবহার করে তথ্য শেয়ার করতে পারবেন।
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  কিভাবে বুঝবো আমার ফোন NFC সাপোর্টেড কি না?
                </Accordion.Header>
                <Accordion.Body>
                  আপনার স্মার্টফোনের মডেল নাম্বার লিখে গুগলে সার্চ করলে ফোনের
                  ফুল স্পেসিফিকেশন পেয়ে যাবেন সেখান থেকেই আপনি যানতে পারবেন
                  আপনার ফোন NFC Supported কি না। <br /> <br />
                  তাছাড়া বেশিরভাগ ফোনেই NFC অফ করা থাকে তাই আগে ফোনের সেটিং থেকে
                  চেক করে দেখতে হবে যে NFC ON নাকি OFF.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  অর্ডার কনফার্ম করার কত দিনের মধ্যে কার্ড হাতে পাবো?
                </Accordion.Header>
                <Accordion.Body>
                  অর্ডার কনফার্ম করার ৩ থেকে ৫ দিনের মধ্যেই আপনারর সান উইংস
                  স্মার্ট বিজনেস কার্ড টি হাতে পেয়ে যাবেন।
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  সান উইংস স্মার্ট বিজনেস কার্ড টি ব্যবহার করার জন্য ইন্টারনেট
                  কানেকশনের প্রয়োজন হয় কি না?
                </Accordion.Header>
                <Accordion.Body>
                  যেহেতোর সান উইংস স্মার্ট বিজনেস কার্ড এর এর সকল তথ্য ডাইনামিক
                  তাই এটা ব্যবহার করার জন্য ইন্টারনেট কানেকশনের প্রয়োজন হবে।
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;
