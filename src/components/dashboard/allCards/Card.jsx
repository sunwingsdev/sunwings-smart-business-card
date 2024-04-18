import sCard from "../../../assets/images/demo-card/normal/1.jpeg";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-white">
      <div className="p-3">
        <div>
          <img src={sCard} alt="Card Image" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#ff7201] mt-3">
            প্রিমিয়াম স্মার্ট বিজনেস কার্ড
          </h3>
          <del className="text-[#9e3434]">১৯৯৯ টাকা</del>
          <p className="text-black text-xl">৯৯৯ টাকা</p>
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <button className="flex items-center gap-1 text-lg bg-red-600 text-white hover:text-black hover:bg-red-500 px-3 py-1">
            <MdDeleteForever /> <span>Delete</span>
          </button>
          <button className="flex items-center gap-1 text-lg text-white bg-[#ff7201] hover:bg-[#c25903] px-3 py-1">
            <BiSolidEdit /> <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
