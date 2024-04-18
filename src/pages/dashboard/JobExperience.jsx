import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useCreateJobExperienceMutation,
  useDeleteJobExperienceMutation,
} from "../../redux/features/allApis/jobExperienceApi";
import { useGetUserByUidQuery } from "../../redux/features/allApis/usersApi";

const JobExperience = () => {
  const { uid } = useParams();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [createJobExperience] = useCreateJobExperienceMutation();
  const { data: singleUser } = useGetUserByUidQuery(uid);

  const onSubmit = async (data) => {
    data.uid = uid;
    if (isCurrentlyWorking) {
      data.endDate = "Present";
    }
    try {
      setLoading(true);
      const result = await createJobExperience({ uid: uid, data: data });

      if (result.data) {
        Swal.fire({
          title: "Job Experience Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
      } else {
        Swal.fire({
          title: "Job Experience Added Failed!",
          text: "Press OK to continue",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    } catch (error) {
      console.error("An unexpected error occurred", error);
      setLoading(false);
    }
  };

  const [deleteExperience] = useDeleteJobExperienceMutation();

  const handleCheckboxChange = (e) => {
    setIsCurrentlyWorking(e.target.checked);
  };

  const handleDelete = async (_id) => {
    Swal.fire({
      title: `Are you sure to Delete ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteExperience({ uid: uid, id: _id });
          if (result.data.message === "Job Experience deleted successfully") {
            Swal.fire(
              "Deleted!",
              "This Experience has been deleted.",
              "success"
            );
          }
        } catch (error) {
          console.error("Error deleting Experience", error);
          Swal.fire(
            "Error",
            "An error occurred while deleting experience.",
            "error"
          );
        }
      }
    });
  };

  const formatDate = (date) => {
    if (!date) {
      return "Present";
    }
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("default", { month: "short" });
    const year = dateObj.getFullYear();

    // Determine the suffix for the day
    let suffix;
    if (day === 1 || day === 21 || day === 31) {
      suffix = "st";
    } else if (day === 2 || day === 22) {
      suffix = "nd";
    } else if (day === 3 || day === 23) {
      suffix = "rd";
    } else {
      suffix = "th";
    }

    return `${day}${suffix} ${month} ${year}`;
  };
  return (
    <div className="flex flex-col gap-4 my-10">
      <h1 className="text_db_36 mb-3">Job Experiences</h1>
      <div className="flex flex-col md:flex-row-reverse md:items-start justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-4">
            {singleUser &&
              singleUser?.jobExperience?.map((userExperience) => (
                <div
                  key={userExperience?._id}
                  className="bg-gray-200 p-4 rounded-md flex flex-col gap-1 relative w-full"
                >
                  <div
                    onClick={() => handleDelete(userExperience?._id)}
                    className="p-2 bg-gray-500 rounded-full flex items-center justify-center absolute -right-2 -top-2 cursor-pointer"
                  >
                    <FaXmark className="text-white" />
                  </div>
                  <h1 className="text-sm">
                    Company: {userExperience?.companyName}
                  </h1>
                  <h1 className="text-sm">
                    Designation: {userExperience?.designation}
                  </h1>
                  <h1 className="text-sm">
                    Experience: {userExperience?.experience}
                  </h1>
                  <h1 className="text-sm">
                    Duration: {formatDate(userExperience?.startDate)} -{" "}
                    {userExperience.endDate &&
                    /\d{4}-\d{2}-\d{2}/.test(userExperience.endDate)
                      ? formatDate(userExperience.endDate)
                      : "Present"}
                  </h1>
                </div>
              ))}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-lg leading-3 underline">Add Job Experience</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-2 items-center"
          >
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="companyName" className="mb-2">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                {...register("companyName")}
                placeholder="Company Name"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="designation" className="mb-2">
                Designation:
              </label>
              <input
                type="text"
                name="designation"
                {...register("designation")}
                placeholder="Designation"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="experience" className="mb-2">
                Experience:
              </label>
              <input
                type="text"
                name="experience"
                {...register("experience")}
                placeholder="Type Experience as like 6 months or 2 years"
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label htmlFor="startDate" className="mb-2">
                Start Date:
              </label>
              <input
                type="date"
                name="startDate"
                {...register("startDate")}
                className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
              />
            </div>
            <div className="form-control p-0 border-0 bg-transparent">
              <label
                htmlFor="endDateCheckbox"
                className="mb-2 flex items-center gap-2 "
              >
                <input
                  type="checkbox"
                  id="endDateCheckbox"
                  checked={isCurrentlyWorking}
                  onChange={handleCheckboxChange}
                />
                <span>Currently work here</span>
              </label>
            </div>
            {isCurrentlyWorking ? null : (
              <div className="form-control p-0 border-0 bg-transparent">
                <label htmlFor="endDate" className="mb-2">
                  End Date:
                </label>
                <input
                  type="date"
                  name="endDate"
                  {...register("endDate")}
                  className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 bg-white"
                />
              </div>
            )}
            <div className="mt-2">
              <button
                type="submit"
                className="bg-[#ffb700] p-2 md:px-3 md:py-2"
              >
                {loading ? "Uploading..." : "Add Experience"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobExperience;
