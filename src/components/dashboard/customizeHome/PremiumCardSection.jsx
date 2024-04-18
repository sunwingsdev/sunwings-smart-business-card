import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreatePremiumCardImageMutation,
  useGetAllPremiumCardImageQuery,
} from "../../../redux/features/allApis/premiumCardImageApi";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const PremiumCardSection = () => {
  const [loading, setLoading] = useState(false);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: allCardInfo } = useGetAllPremiumCardImageQuery();

  const [createPremiumCardImage] = useCreatePremiumCardImageMutation();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.premiumCardImage[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const premiumCardImageUrl = imgResponse?.data?.display_url;

        if (premiumCardImageUrl) {
          data.premiumCardImage = premiumCardImageUrl;

          const result = await createPremiumCardImage(data);

          if (result.data) {
            Swal.fire({
              title: "Premium Card Image Uploaded Successfully!",
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
          title: "Error uploading Premium Card Image to Image Host Server.",
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
        title: "Error uploading Premium Card Image.",
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
          <h1 className="u_text_26">Premium Card Images</h1>

          <div className="flex flex-col-reverse md:flex-col gap-5 h-auto">
            <div className="custom_update_item">
              {errors.premiumCardImage && (
                <span className="text-red-600">This Field is required.</span>
              )}
              <input
                type="file"
                name="premiumCardImage"
                {...register("premiumCardImage", { required: true })}
                className="file-input w-full max-w-xl bg-white border border-black"
              />
              <button className="U_btn" type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Submit"}
              </button>
            </div>

            <div className="h-60">
              <Swiper
                spaceBetween={30}
                pagination={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  // when window width is <= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 3,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {allCardInfo?.map((cardInfo, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={cardInfo.premiumCardImage}
                      alt=""
                      className="h-56"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PremiumCardSection;
