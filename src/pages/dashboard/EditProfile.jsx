import { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { CiImageOff } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import {
  useGetUserByUidQuery,
  useUpdateAuserAboutMeMutation,
  useUpdateAuserBasicInfoMutation,
  useUpdateAuserCoverPhotoMutation,
  useUpdateAuserProfilePictureMutation,
} from "../../redux/features/allApis/usersApi";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { uid } = useParams();
  const [profilePictureLoading, setProfilePictureLoading] = useState(false);
  const [coverPhotoLoading, setCoverPhotoLoading] = useState(false);
  const [aboutMeLoading, setAboutMeLoading] = useState(false);
  const [basicInfoLoading, setBasicInfoLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");

  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;
  const { register, handleSubmit, reset } = useForm();

  const { data: singleUser } = useGetUserByUidQuery(uid);
  console.log(singleUser);

  const [updateProfilePicture] = useUpdateAuserProfilePictureMutation();
  const [updateProfileCover] = useUpdateAuserCoverPhotoMutation();
  const [updateAboutMe] = useUpdateAuserAboutMeMutation();
  const [updateBasicInfo] = useUpdateAuserBasicInfoMutation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePhoneChange = (value) => {
    setPhone1(value);
  };
  const handlePhoneChange2 = (value) => {
    setPhone2(value);
  };

  const onProfilePictureSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.profileImage[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setProfilePictureLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const profilePictureUrl = imgResponse?.data?.display_url;

        if (profilePictureUrl) {
          data.profileImage = profilePictureUrl;

          const result = await updateProfilePicture({
            uid: uid,
            data: data,
          });

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Profile Picture Updated Successfully!",
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
          title: "Error uploading Profile Picture to Image Host Server.",
          text: `${response.statusText}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setProfilePictureLoading(false);
    } catch (error) {
      setProfilePictureLoading(false);
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error uploading Profile Picture.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onCoverPhotoSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.profileCover[0]); // Add 'image' parameter
      formData.append("key", img_host_token);
      setCoverPhotoLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();

        const profileCoverUrl = imgResponse?.data?.display_url;

        if (profileCoverUrl) {
          data.profileCover = profileCoverUrl;

          const result = await updateProfileCover({
            uid: uid,
            data: data,
          });

          if (result.data.modifiedCount > 0) {
            Swal.fire({
              title: "Cover Photo Updated Successfully!",
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
          title: "Error uploading Cover Photo to Image Host Server.",
          text: `${response.statusText}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      setCoverPhotoLoading(false);
    } catch (error) {
      setCoverPhotoLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error uploading Cover Photo.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onAboutMeSubmit = async (data) => {
    try {
      setAboutMeLoading(true);
      const result = await updateAboutMe({
        uid: uid,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "About Me Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setAboutMeLoading(false);
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error updating About Me.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onBasicInfoSubmit = async (data) => {
    data.phone = phone1;
    data.alternatePhone = phone2;
    try {
      setBasicInfoLoading(true);
      const result = await updateBasicInfo({
        uid: uid,
        data: data,
      });
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Basic Info Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setBasicInfoLoading(false);
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error updating Basic Info.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const formatDateOfBirth = (dob) => {
    const dateObj = new Date(dob);
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
    <div className="h-screen">
      <div>
        <div>
          <div className="relative">
            {singleUser?.profileCover ? (
              <img
                src={singleUser?.profileCover}
                alt="Cover Photo"
                className="h-48 md:h-72"
              />
            ) : (
              <div className="h-48 md:h-72 flex items-center justify-center border border-solid border-black">
                <div className="flex flex-col items-center">
                  <CiImageOff className="size-16" />
                  <h1 className="text-xl">No Cover Photo Added</h1>
                </div>
              </div>
            )}

            <div className="absolute left-0 -bottom-14 md:-bottom-20 px-3 md:px-8 ">
              <div className="p-2 bg-gray-400 rounded-full">
                {singleUser?.profileImage ? (
                  <img
                    src={singleUser?.profileImage}
                    alt="User Photo"
                    className="size-24 md:size-40 rounded-full"
                  />
                ) : (
                  <div className="size-24 md:size-40 rounded-full flex items-center justify-center border border-solid border-black">
                    <div className="flex flex-col items-center justify-center">
                      <CiImageOff className="size-8" />
                      <h1 className="text-sm text-center">
                        No Profile Photo Added
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute pl-36 md:pl-56 pr-8 py-2 md:py-3 w-full flex items-end justify-between z-0">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">
                  {singleUser?.name ? `${singleUser?.name}` : "Name: No Data"}
                </h1>
                <h2>
                  {singleUser?.designation
                    ? `${singleUser?.designation}`
                    : "Designation: No Data"}
                </h2>
              </div>
              <div>
                <button onClick={openModal} className="bg-[#ff7c15] px-3 py-2">
                  Edit Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 mx-4 flex flex-col gap-4">
        {/* about me and basic info */}
        <div className="grid grid-cols-1 gap-4">
          {/* About Me */}
          <div className="border-2 border-gray-500 w-full h-fit rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              About Me:
            </h1>
            <p>{singleUser?.aboutMe ? `${singleUser?.aboutMe}` : "No Data."}</p>
          </div>
          {/* Info Table */}
          <div className="border-2 border-gray-500 w-full rounded-md p-3 flex flex-col items-start gap-4">
            <h1 className="underline underline-offset-4 leading-3">
              Basic Info:
            </h1>
            <div className="w-[99%] md:w-full overflow-x-auto">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Full Name</td>
                    <td>
                      : {singleUser?.name ? `${singleUser?.name}` : "No Data"}
                    </td>
                    <td>Phone</td>
                    <td>
                      : +
                      {singleUser?.phone ? `${singleUser?.phone}` : "No Data"}
                    </td>
                  </tr>
                  <tr>
                    <td>Father Name</td>
                    <td>
                      :{" "}
                      {singleUser?.fatherName
                        ? `${singleUser?.fatherName}`
                        : "No Data"}
                    </td>
                    <td>Alternate Phone</td>
                    <td>
                      : +
                      {singleUser?.alternatePhone
                        ? `${singleUser?.alternatePhone}`
                        : "No Data"}
                    </td>
                  </tr>
                  <tr>
                    <td>Mother Name</td>
                    <td>
                      :{" "}
                      {singleUser?.motherName
                        ? `${singleUser?.motherName}`
                        : "No Data"}
                    </td>
                    <td>What&apos;s App</td>
                    <td>
                      :{" "}
                      {singleUser?.whatsAppNo
                        ? `${singleUser?.whatsAppNo}`
                        : "No Data"}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      : {singleUser?.email ? `${singleUser?.email}` : "No Data"}
                    </td>
                    <td>Date of Birth</td>
                    <td>
                      :{" "}
                      {singleUser?.dob
                        ? `${formatDateOfBirth(singleUser?.dob)}`
                        : "No Data"}
                    </td>
                  </tr>
                  <tr>
                    <td>Alternate Email</td>
                    <td>
                      :{" "}
                      {singleUser?.alternateEmail
                        ? `${singleUser?.alternateEmail}`
                        : "No Data"}
                    </td>
                    <td>Present Address</td>
                    <td>
                      :{" "}
                      {singleUser?.presentAddress
                        ? `${singleUser?.presentAddress}`
                        : "No Data"}
                    </td>
                  </tr>
                  <tr>
                    <td>Permanent Address</td>
                    <td>
                      :{" "}
                      {singleUser?.permanentAddress
                        ? `${singleUser?.permanentAddress}`
                        : "No Data"}
                    </td>
                    <td>Language</td>
                    <td>
                      :{" "}
                      {singleUser?.preferedLanguage
                        ? `${singleUser?.preferedLanguage}`
                        : "No Data"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <dialog open={isModalOpen} className="modal z-50 mt-10">
        <div className="modal-box w-11/12 max-w-4xl bg-white rounded-none">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {/* Modal content */}
          <div>
            {/* Profile Picture */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-xl">Profile Picture</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="p-2 bg-gray-600 rounded-full">
                  {singleUser?.profileImage ? (
                    <img
                      src={singleUser?.profileImage}
                      alt="User Photo"
                      className="rounded-full w-40 h-40"
                    />
                  ) : (
                    <div className="size-24 md:size-40 rounded-full flex items-center justify-center border border-solid border-black">
                      <div className="flex flex-col items-center justify-center">
                        <CiImageOff className="size-8" />
                        <h1 className="text-sm text-center">
                          No Profile Photo Added
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit(onProfilePictureSubmit)}
                  className="flex items-center"
                >
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    {...register("profileImage")}
                    accept="image/*"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
                  >
                    <AiOutlineCamera className="mr-2" />
                    <span>
                      {profilePictureLoading
                        ? "Uploading..."
                        : "Edit Profile Picture"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            {/* Cover Photo */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-xl">Cover Photo</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-full md:w-3/4">
                  {singleUser?.profileCover ? (
                    <img
                      src={singleUser?.profileCover}
                      alt="User Photo"
                      className="w-full h-56"
                    />
                  ) : (
                    <div className="h-48 md:h-56 flex items-center justify-center border border-solid border-black">
                      <div className="flex flex-col items-center">
                        <CiImageOff className="size-16" />
                        <h1 className="text-xl">No Cover Photo Added</h1>
                      </div>
                    </div>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit(onCoverPhotoSubmit)}
                  className="flex items-center"
                >
                  <input
                    type="file"
                    id="filePInput"
                    name="profileCover"
                    {...register("profileCover")}
                    accept="image/*"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center cursor-pointer bg-gray-300 p-2 md:px-3 md:py-2"
                  >
                    <AiOutlineCamera className="mr-2" />
                    <span>
                      {coverPhotoLoading ? "Uploading..." : "Edit Cover Photo"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            {/* About Me */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-xl">About Me</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <form
                  onSubmit={handleSubmit(onAboutMeSubmit)}
                  className="w-full md:w-2/3 flex flex-col gap-2 items-center"
                >
                  <div className="form-control p-0 border-0">
                    <textarea
                      name="aboutMe"
                      {...register("aboutMe")}
                      cols="30"
                      rows="5"
                      defaultValue={singleUser?.aboutMe}
                      className="border-2 border-gray-400 p-1"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-gray-300 p-2 md:px-3 md:py-2"
                    >
                      <span>
                        {aboutMeLoading ? "Uploading..." : "Edit About Me"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Basic Info */}
            <div className="flex flex-col gap-4 mb-2">
              <h1 className="text-xl">Basic Info</h1>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-red-600 text-sm italic">
                  ** Please fill up all fields to update all data. Otherwise
                  some fields will be empty. **
                </p>
                <form
                  onSubmit={handleSubmit(onBasicInfoSubmit)}
                  className="w-full md:w-2/3 flex flex-col gap-2 items-center"
                >
                  <div className="form-control p-0 border-0">
                    <label htmlFor="name" className="mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      {...register("name")}
                      defaultValue={singleUser?.name}
                      placeholder="Full Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="fatherName" className="mb-1">
                      Father&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      {...register("fatherName")}
                      defaultValue={singleUser?.fatherName}
                      placeholder="Father's Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="motherName" className="mb-1">
                      Mother&apos;s Name
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      {...register("motherName")}
                      defaultValue={singleUser?.motherName}
                      placeholder="Mother's Name"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="designation" className="mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      {...register("designation")}
                      defaultValue={singleUser?.designation}
                      placeholder="Designation"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="phone" className="mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      {...register("phone")}
                      defaultValue={singleUser?.phone}
                      placeholder="Contact No."
                      className="hidden"
                    />
                    <PhoneInput
                      country={"bd"}
                      enableSearch={true}
                      disableSearchIcon={true}
                      value={singleUser?.phone}
                      onChange={handlePhoneChange}
                      inputClass="editProfilePhoneInput w-full"
                      containerClass="editProfilePhoneContainer "
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="alternatePhone" className="mb-1">
                      Alternate Phone Number
                    </label>
                    <input
                      type="text"
                      name="alternatePhone"
                      {...register("alternatePhone")}
                      defaultValue={singleUser?.alternatePhone}
                      placeholder="Alternate Contact No."
                      className="hidden"
                    />
                    <PhoneInput
                      country={"bd"}
                      enableSearch={true}
                      disableSearchIcon={true}
                      value={singleUser?.alternatePhone}
                      onChange={handlePhoneChange2}
                      inputClass="editProfilePhoneInput w-full"
                      containerClass="editProfilePhoneContainer "
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="whatsAppNo" className="mb-1">
                      What&apos;s App No
                    </label>
                    <input
                      type="text"
                      name="whatsAppNo"
                      {...register("whatsAppNo")}
                      defaultValue={singleUser?.whatsAppNo}
                      placeholder="What's App Number"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      defaultValue={singleUser?.email}
                      placeholder="Email Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="alternateEmail" className="mb-1">
                      Alternate Email
                    </label>
                    <input
                      type="email"
                      name="alternateEmail"
                      {...register("alternateEmail")}
                      defaultValue={singleUser?.alternateEmail}
                      placeholder="Alternate Email Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>

                  <div className="form-control p-0 border-0">
                    <label htmlFor="dob" className="mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      {...register("dob")}
                      defaultValue={singleUser?.dob}
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="presentAddress" className="mb-1">
                      Present Address
                    </label>
                    <input
                      type="text"
                      name="presentAddress"
                      {...register("presentAddress")}
                      defaultValue={singleUser?.presentAddress}
                      placeholder="Present Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="permanentAddress" className="mb-1">
                      Permanent Address
                    </label>
                    <input
                      type="text"
                      name="permanentAddress"
                      {...register("permanentAddress")}
                      defaultValue={singleUser?.permanentAddress}
                      placeholder="Permanent Address"
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <div className="form-control p-0 border-0">
                    <label htmlFor="permanentAddress" className="mb-1">
                      Language
                    </label>
                    <select
                      {...register("preferedLanguage")}
                      name="preferedLanguage"
                      defaultValue={singleUser?.preferedLanguage}
                      className="p-1 border-2 border-solid border-yellow-400 rounded-none outline-none placeholder:text-gray-500"
                    >
                      <option value="" disabled>
                        Select One
                      </option>
                      <option value="bangla">Bangla</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-[#ffb700] p-2 md:px-3 md:py-2"
                    >
                      <span>
                        {basicInfoLoading ? "Uploading..." : "Edit Basic Info"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditProfile;
