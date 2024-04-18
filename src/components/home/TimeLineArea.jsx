import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegCircle } from "react-icons/fa";
const TimeLineArea = () => {
  return (
    <VerticalTimeline lineColor="rgb(33, 150, 243)" animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        icon={<FaRegCircle />}
      >
        <h3 className="vertical-timeline-element-title">
          অর্ডার কনফার্মেশন ফেজ
        </h3>

        <p>
          আপনি অর্ডার প্লেস করার কিছুক্ষনের মধ্যেই আমাদের একজন প্রতিনিধি ফোন কল
          করে আপনার অর্ডার টি কনফার্ম করবেন
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          fontSize: "20px",
        }}
        icon={<FaRegCircle />}
      >
        <h3 className="vertical-timeline-element-title">কার্ড ডিজাইন ফেজ</h3>

        <p>
          আপনার পছন্দ অনুযায়ী ডিজাইন করার জন্য ডিজাইন সেকশন হতে আপনার সাথে
          যোগাযোগ করে ডিজাইন কনফার্ম করা হবে
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          fontSize: "20px",
        }}
        icon={<FaRegCircle />}
      >
        <h3 className="vertical-timeline-element-title">
          প্রিন্টিং, প্যাকেজিং ও ডেলিভেরি
        </h3>

        <p>
          কার্ডের ডিজাইন কনফার্ম হলে, কার্ড টি প্রিন্টিং সেকশন এ পাঠানো হবে এরপর
          প্যাকেজিং করে আপনার সুবিধামত স্থানে ডেলিভেরি করা হবে
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          fontSize: "20px",
        }}
        icon={<FaRegCircle />}
      >
        <h3 className="vertical-timeline-element-title">আফটার সেল সাপোর্ট</h3>

        <p>
          আপনি কার্ড হাতে পাওয়ার পর যেকোন কিছু জানার জন্য অথবা যেকোন টেকনিক্যাল
          সাপোর্টের জন্য যোগাযোগ করতে পারবেন
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLineArea;
