import { useState } from "react";
import { useForm } from "react-hook-form";

import { FaGlobe } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useCreatePersonalWebsiteMutation,
  useDeletePersonalWebsiteMutation,
} from "../../../redux/features/allApis/socialMediaApi/personalWebsiteApi";
import { useGetUserByUidQuery } from "../../../redux/features/allApis/usersApi";

const PersonalWebsite = ({ uid }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createPersonalWebsiteLink] = useCreatePersonalWebsiteMutation();
  const { data: singleUser } = useGetUserByUidQuery(uid);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await createPersonalWebsiteLink({ uid: uid, data: data });

      if (result.data) {
        Swal.fire({
          title: "Link Added Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
        setLoading(false);
      } else {
        Swal.fire({
          title: "Link Added Failed!",
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

  const [deletePersonalWebsite] = useDeletePersonalWebsiteMutation();

  const handleDelete = async (_id) => {
    Swal.fire({
      title: `Are you sure to Delete this ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deletePersonalWebsite({ uid: uid, id: _id });
          if (
            result.data.message === "Personal Website link deleted successfully"
          ) {
            Swal.fire("Deleted!", "This Link has been deleted.", "success");
          }
        } catch (error) {
          console.error("Error deleting Link", error);
          Swal.fire(
            "Error",
            "An error occurred while deleting the link.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl">Personal Websites</h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-2 w-full">
          <div className="w-full flex flex-col gap-2 items-start">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-1 w-full">
                <div className="form-control border-0 p-0 w-full">
                  <input
                    type="text"
                    name="website"
                    {...register("website", {
                      required: "Website link is required",
                      pattern: {
                        value:
                          /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?/,
                        message: "Please enter a valid website link",
                      },
                    })}
                    placeholder="Website Link"
                    className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500 w-full"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-xs">
                      {errors.website.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <button type="submit" className="bg-gray-300 md:px-10 md:py-2">
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
        <h1 className="underline underline-offset-4 leading-3">
          Personal Websites:
        </h1>
        <div className="w-full flex flex-col gap-2">
          {singleUser &&
            singleUser?.website?.map((we, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-full w-full bg-white pr-2"
              >
                <div className="flex items-center">
                  <div className="bg-[#ffb700] rounded-s-full w-14 p-2 flex items-center justify-center  mr-2">
                    <FaGlobe className="text-white" size={25} />
                  </div>
                  <div className="">
                    <Link to={we?.website?.website}>
                      {we?.website?.website?.length > 35 ? (
                        <>
                          {we?.website?.website?.slice(0, 35)}
                          ...
                        </>
                      ) : (
                        we?.website?.website
                      )}
                    </Link>
                  </div>
                </div>

                <div
                  onClick={() => handleDelete(we._id)}
                  className="border-2 border-black rounded-full cursor-pointer"
                >
                  <FaXmark />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalWebsite;
