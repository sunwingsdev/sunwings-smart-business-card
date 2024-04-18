import { useState } from "react";
// import banner from "../../../assets/images/banner-1.webp";
import { useForm } from "react-hook-form";
import {
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "../../../redux/features/allApis/bannerApi";
import Swal from "sweetalert2";

const BannerSection = () => {
  const [loading, setLoading] = useState(false);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: allBanner } = useGetBannerQuery();
  // Access the first element's id of the array
  const id = allBanner?.[0]._id;
  const banner = allBanner?.[0].banner;

  const [updateBanner] = useUpdateBannerMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.banner[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const bannerUrl = imgResponse?.data?.display_url;

        if (bannerUrl) {
          data.banner = bannerUrl;

          const result = await updateBanner({
            id: id,
            data: data,
          });

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Banner Updated Successfully!",
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
          title: "Error uploading Banner to Image Host Server.",
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
        title: "Error uploading Banner.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control p-6">
          <h1 className="u_text_26">Banner</h1>
          <div className="update_logo">
            <div className="custom_update_item">
              {errors.banner && (
                <span className="text-red-600">Baner is required.</span>
              )}
              <input
                type="file"
                name="banner"
                {...register("banner", { required: true })}
                className="file-input w-full max-w-md bg-white"
              />
              <button className="U_btn" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>
            <div className="custom_banner">
              <img src={banner} alt="Banner" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BannerSection;
