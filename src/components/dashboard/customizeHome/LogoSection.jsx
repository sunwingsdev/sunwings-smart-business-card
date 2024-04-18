import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  useGetLogoQuery,
  useUpdateLogoMutation,
} from "../../../redux/features/allApis/logoApi";

const LogoSection = () => {
  const [loading, setLoading] = useState(false);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  // const baseUrl = import.meta.env.VITE_BASE_API_URL;

  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: allLogo } = useGetLogoQuery();
  // Access the first element's id of the array
  const id = allLogo?.[0]._id;
  const logo = allLogo?.[0].logo;
  // console.log(id);

  const [updateLogo] = useUpdateLogoMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.logo[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const logoUrl = imgResponse?.data?.display_url;

        if (logoUrl) {
          data.logo = logoUrl;

          const result = await updateLogo({
            id: id,
            data: data,
          });

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Logo Updated Successfully!",
              text: "Press OK to continue",
              icon: "success",
              confirmButtonText: "OK",
            });
            reset();
          }
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Error uploading logo to Image Host Server.",
          text: `${response.statusText}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error uploading logo.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control p-6">
          <h1 className="u_text_26">Logo</h1>
          <div className="update_logo">
            <div className="custom_update_item">
              {errors.logo && (
                <span className="text-red-600">Logo is required.</span>
              )}
              <input
                type="file"
                name="logo"
                {...register("logo", { required: true })}
                className="file-input w-full max-w-md bg-white"
              />
              <button className="U_btn" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
            <div className="custom_logo">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogoSection;
