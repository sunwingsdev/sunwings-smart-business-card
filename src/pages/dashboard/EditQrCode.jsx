import { QRCode } from "react-qrcode-logo";
import { useState } from "react";
import { HuePicker } from "react-color";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useUpdateQRCodeMutation } from "../../redux/features/allApis/usersApi";

const EditQrCode = () => {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const { register, handleSubmit, setValue, watch } = useForm();

  const [updateQrCode] = useUpdateQRCodeMutation();

  const handleBgColorChange = (color) => {
    setValue("bgColor", color.hex);
    setBgColor(color.hex);
  };

  const handleFgColorChange = (color) => {
    setValue("fgColor", color.hex);
    setFgColor(color.hex);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // Add bgColor and fgColor to the data object
      data.bgColor = bgColor;
      data.fgColor = fgColor;
      const result = await updateQrCode({ uid: uid, data: data });
      setLoading(false); // Ensure loading state is set to false
      if (result.data && result.data.modifiedCount > 0) {
        Swal.fire({
          title: "QR Code Generated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to generate QR Code.",
          text: "No modifications made.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      setLoading(false); // Ensure loading state is set to false
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error generating QR Code.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="h-screen">
      <h1 className="text_db_36 mb-3">Generate Qr Code</h1>
      <div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 items-start"
          >
            <div className="flex flex-col md:flex-row gap-20 w-full">
              <div className="flex flex-col gap-4 items-start">
                <div className="form-control">
                  <label htmlFor="qrCode" className="mb-1">
                    Qr Code Data
                  </label>
                  <input
                    type="text"
                    name="qrCode"
                    placeholder="Enter your QR Code data"
                    {...register("qrCode")}
                    className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                  />
                </div>
                <div className="form-control">
                  <label className="mb-1">Choose Background color</label>
                  <HuePicker
                    color={bgColor}
                    onChangeComplete={(color) => handleBgColorChange(color)}
                  />
                </div>

                <div className="form-control">
                  <label className="mb-1">Choose Border color</label>
                  <HuePicker
                    color={fgColor}
                    onChangeComplete={(color) => handleFgColorChange(color)}
                  />
                </div>
                <button
                  type="submit"
                  className="ml-1 bg-[#ff7c15] px-3 py-1 hover:bg-white border-2 border-solid border-[#ff7c15] transition-all ease-in-out duration-300"
                >
                  {loading ? "Generating..." : " Generate QR Code"}
                </button>
              </div>
              <div>
                <QRCode
                  value={watch("qrCode")}
                  fgColor={fgColor}
                  bgColor={bgColor}
                  size={300}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQrCode;
