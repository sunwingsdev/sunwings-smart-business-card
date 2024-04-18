import { useForm } from "react-hook-form";
import "./VisitingInformationSection.css";
import {
  useGetAllVisitingInfoQuery,
  useUpdateVisitingInfoMutation,
} from "../../../../redux/features/allApis/visitingInformationApi";
import Swal from "sweetalert2";
import { useState } from "react";

const VisitingInformationSection = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: allVisitingInfo } = useGetAllVisitingInfoQuery();
  const vInfo = allVisitingInfo?.[0];

  console.log("vInfo", vInfo?._id);
  const [updateVisintingInfo] = useUpdateVisitingInfoMutation();
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await updateVisintingInfo({
        id: vInfo?._id,
        data: data,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Info Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Info Updated Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control p-6">
          <h1 className="u_text_26">Visiting Information</h1>
          <div className="visiting_contain1 mt-3">
            <div className="form-control border-0 p-0">
              {errors.subTitle && (
                <span className="text-red-600 mb-1">
                  Sub Title is required.
                </span>
              )}
              <input
                type="text"
                name="subTitle"
                defaultValue={vInfo?.subTitle}
                {...register("subTitle", { required: true })}
                placeholder="SubTitle"
                className="input input-bordered input-warning w-full bg-white"
              />
            </div>
            <div className="form-control border-0 p-0">
              {errors.title && (
                <span className="text-red-600 mb-1">Title is required.</span>
              )}
              <input
                type="text"
                name="title"
                defaultValue={vInfo?.title}
                {...register("title", { required: true })}
                placeholder="Title"
                className="input input-bordered input-warning w-full bg-white"
              />
            </div>
            <div className="form-control border-0 p-0">
              {errors.description && (
                <span className="text-red-600 mb-1">
                  Description is required.
                </span>
              )}
              <textarea
                name="description"
                defaultValue={vInfo?.description}
                {...register("description", { required: true })}
                className="textarea textarea-warning bg-white"
                placeholder="Description"
              ></textarea>
            </div>
            <button className="U_btn" type="submit">
              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VisitingInformationSection;
