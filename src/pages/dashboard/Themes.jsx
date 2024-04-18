import { FaEye } from "react-icons/fa";
import { BiSolidSelectMultiple } from "react-icons/bi";
import demoOfficeCard1 from "../../assets/images/demo_offices_card/1-demo-card.webp";

import demoOfficeCard2 from "../../assets/images/demo_offices_card/1.webp";

import { useParams } from "react-router-dom";
import {
  useGetUserByUidQuery,
  useUpdateThemeMutation,
} from "../../redux/features/allApis/usersApi";
import { useState } from "react";
import toast from "react-hot-toast";

const Themes = () => {
  const { uid } = useParams();
  const { data: singleUser } = useGetUserByUidQuery(uid);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [updateTheme] = useUpdateThemeMutation();
  const handleThemeSelect = async (theme) => {
    try {
      await updateTheme({ uid, data: { theme } });
      setSelectedTheme(theme);
      toast.success(`${theme} selected successfully!`);
    } catch (error) {
      console.error("Error updating theme:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 my-10">
      <h1 className="text_db_36">Themes</h1>
      <div className="my-10 bg-white p-4 border-t-2 border-solid border-[#ff8400] rounded-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="border border-solid border-black">
              <div>
                <img src={demoOfficeCard1} alt="Demo theme card" />
              </div>
              <h1 className="my-3 text text-center">Theme 1</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                className={`flex items-center gap-2 text-white px-3 py-1 rounded-md ${
                  selectedTheme === "theme1" ? "bg-gray-500" : "bg-[#ff8400]"
                }`}
                onClick={() => handleThemeSelect("theme1")}
              >
                <BiSolidSelectMultiple />
                <span>
                  {selectedTheme === "theme1" ? "Selected" : "Select"}
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#ff8400] text-white px-3 py-1 rounded-md">
                <FaEye />
                Preview
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="border border-solid border-black">
              <div>
                <img src={demoOfficeCard2} alt="Demo theme card" />
              </div>
              <h1 className="my-3 text text-center">Theme 2</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                className={`flex items-center gap-2 text-white px-3 py-1 rounded-md ${
                  selectedTheme === "theme2" ? "bg-gray-500" : "bg-[#ff8400]"
                }`}
                onClick={() => handleThemeSelect("theme2")}
              >
                <BiSolidSelectMultiple />
                <span>
                  {selectedTheme === "theme2" ? "Selected" : "Select"}
                </span>
              </button>
              <button className="flex items-center gap-2 bg-[#ff8400] text-white px-3 py-1 rounded-md">
                <FaEye />
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
