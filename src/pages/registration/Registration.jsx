import { useContext, useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useCreateAuserMutation } from "../../redux/features/allApis/usersApi";
import { BeatLoader } from "react-spinners";
import MobileBottomNav from "../../components/shared/MobileBottomNav";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Registration = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [phone1, setPhone1] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const img_host_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const img_host_url = `https://api.imgbb.com/1/upload?key=${img_host_token}`;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const nextStep = () => {
    handleSubmit((data) => {
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
      }
    })();
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const [createAUser] = useCreateAuserMutation();

  const handlePhoneChange = (value) => {
    setPhone1(value);
  };

  const onSubmit = async (data) => {
    data.phone = phone1;

    try {
      const formData = new FormData();
      formData.append("image", data.profileImage[0]);
      formData.append("key", img_host_token);
      setLoading(true);

      const response = await fetch(img_host_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const imgResponse = await response.json();
        const profileImageUrl = imgResponse?.data?.display_url;

        if (profileImageUrl) {
          data.profileImage = profileImageUrl;
        }

        // Register user with Firebase authentication
        createUser(data.email, data.pwd)
          .then((result) => {
            const loggedUser = result.user;

            updateUserProfile(data.fullName, data.profileImage, data.phone)
              .then(() => {
                const newUser = {
                  uid: loggedUser.uid,
                  name: data.fullName,
                  email: data.email,
                  phone: data.phone,
                  whatsAppNo: data.whatsAppNo,
                  address: data.address,
                  dob: data.dob,
                  preferedLanguage: data.preferedLanguage,
                  gender: data.gender,
                  socialMedia: data.socialMedia,
                  userName: data.userName,
                  pwd: data.pwd,
                  profileImage: profileImageUrl,
                  agree: data.agree,
                };

                // Save user data to database
                createAUser(newUser)
                  .then((result) => {
                    if (result.data) {
                      // Success message
                      Swal.fire({
                        title: "Registration Successful!",
                        text: "Press OK to continue",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                      reset(); // Reset form fields
                      setLoading(false);
                      navigate("/");
                    } else {
                      // Handle database save failure
                      Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Error saving user data to database.",
                        text: "Please try again later.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                    }
                  })
                  .catch((error) => {
                    console.error("Error saving user data to database:", error);
                    // Handle database save failure
                    Swal.fire({
                      position: "center",
                      icon: "error",
                      title: "Error saving user data to database.",
                      text: "Please try again later.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  });
              })
              .catch((error) => {
                console.error("Error updating user profile:", error);
                // Handle updating user profile failure
              });
          })
          .catch((error) => {
            console.error("Error registering user:", error);
            // Handle registering user failure
          });
      }
    } catch (error) {
      console.log(error);
      // Handle any errors
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error registering user.",
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
        <h3 className="text_36">
          দয়া করে শতভাগ নিশ্চিত হয়ে প্রোফাইল তৈরি করুন।
        </h3>
      </div>
      <div className="registration mt-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 className="text_26 mb-3 text-white">Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {step === 1 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* full name */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="fullName" className="fieldlabels">
                            Full Name:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.fullName && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="fullName"
                            {...register("fullName", { required: true })}
                            placeholder="Full Name"
                          />
                        </div>
                        {/* email */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="email" className="fieldlabels">
                            Email: <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.email && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.email.type === "required"
                                    ? "This field is required."
                                    : "Invalid email address"}
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="email"
                            name="email"
                            {...register("email", {
                              required: true,
                              pattern: /^\S+@\S+\.\S+$/,
                            })}
                            placeholder="Email Address"
                          />
                        </div>
                        {/* phone */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="phone" className="fieldlabels">
                            Contact No.:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <br />
                            <span className="text-xs leading-3 text-red-500 italic">
                              Be carefull ! Double check your phone number
                              before submit.
                            </span>
                          </label>
                          <div className="flex items-center w-full">
                            <input
                              type="text"
                              name="phone"
                              {...register("phone")}
                              placeholder="Contact No."
                              className="hidden"
                            />
                            <PhoneInput
                              country={"bd"}
                              enableSearch={true}
                              disableSearchIcon={true}
                              value={phone1}
                              onChange={handlePhoneChange}
                              inputClass="phoneInput"
                              containerClass="mb-3"
                            />
                          </div>
                        </div>

                        {/* what's app number */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="whatsAppNo" className="fieldlabels">
                            What&apos;s App No.:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.whatsAppNo && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.whatsAppNo.type === "required" &&
                                    "This field is required."}
                                  {errors.whatsAppNo.type === "pattern" &&
                                    `${errors.whatsAppNo.message}`}
                                </span>
                              )}
                            </span>
                          </label>

                          <input
                            type="text"
                            name="whatsAppNo"
                            {...register("whatsAppNo", {
                              required: true,
                              pattern: {
                                value: /^\d{10,}$/,
                                message: "Invalid WhatsApp number format.",
                              },
                            })}
                            placeholder="What's App No."
                          />
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={nextStep}
                      />
                    </fieldset>
                  )}

                  {step === 2 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* address */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="address" className="fieldlabels">
                            Address:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.address && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="address"
                            {...register("address", { required: true })}
                            placeholder="Address"
                          />
                        </div>
                        {/* date of birth */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="dob" className="fieldlabels">
                            Date Of Birth:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.dob && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            {...register("dob", { required: true })}
                            placeholder="Date Of Birth"
                          />
                        </div>
                        {/* prefered language */}
                        <div className="form-control border-0 p-0 ">
                          <label
                            htmlFor="preferedLanguage"
                            className="fieldlabels"
                          >
                            Prefered Language:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.preferedLanguage && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <select
                            name="preferedLanguage"
                            {...register("preferedLanguage", {
                              required: true,
                            })}
                            className="p-2 border"
                          >
                            <option value="">Select One</option>
                            <option value="bangla">Bangla</option>
                            <option value="english">English</option>
                          </select>
                        </div>
                      </div>
                      <input
                        type="button"
                        name="next"
                        className="next action-button"
                        value="Next"
                        onClick={nextStep}
                      />
                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={prevStep}
                      />
                    </fieldset>
                  )}

                  {step === 3 && (
                    <fieldset className="p-4">
                      <div className="form-card">
                        {/* user name */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="userName" className="fieldlabels">
                            User Name:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.userName && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="userName"
                            {...register("userName", {
                              required: true,
                            })}
                            placeholder="User Name eg. vismo123"
                          />
                        </div>
                        {/* password */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="pwd" className="fieldlabels">
                            Password:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.pwd && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.pwd.type === "required" &&
                                    "This field is required"}
                                  {errors.pwd.type === "minLength" &&
                                    "Password must be at least 6 characters long"}
                                  {errors.pwd.type === "pattern" &&
                                    "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="pwd"
                            {...register("pwd", {
                              required: true,
                              minLength: 6,
                              pattern:
                                /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })}
                            placeholder="Password"
                          />
                        </div>
                        {/* confirm password */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="cpwd" className="fieldlabels">
                            Confirm Password:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.cpwd && (
                                <span className="text-red-600 text-sm italic">
                                  {errors.cpwd.type === "required" &&
                                    "This field is required"}
                                  {errors.cpwd.type === "validate" &&
                                    errors.cpwd.message}
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="password"
                            name="cpwd"
                            {...register("cpwd", {
                              required: true,
                              validate: (value) =>
                                value === watch("pwd") ||
                                "Password do not match",
                            })}
                            placeholder="Confirm Password"
                          />
                        </div>
                        {/* profile image */}
                        <div className="form-control border-0 p-0">
                          <label htmlFor="profileImage" className="fieldlabels">
                            Upload Your Photo:{" "}
                            <span className="text-red-600 mr-1">*</span>
                            <span>
                              {errors.profileImage && (
                                <span className="text-red-600 text-sm italic">
                                  This field is required.
                                </span>
                              )}
                            </span>
                          </label>
                          <input
                            type="file"
                            name="profileImage"
                            {...register("profileImage", { required: true })}
                            accept="image/*"
                          />
                        </div>
                        {/* checkbox of terms and condition and privacy policy */}
                        <div className="form-group">
                          {errors.agree && (
                            <span className="text-red-600 text-sm italic">
                              This field is required.
                            </span>
                          )}
                          <div className="custom-control custom-checkbox chackbox_input">
                            <input
                              type="checkbox"
                              name="agree"
                              {...register("agree", { required: true })}
                              className="custom-control-input"
                              id="agree_regi"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="agree_regi"
                            >
                              I agree to the{" "}
                              <span className="text-[#ff7c15] hover:underline font-semibold">
                                <Link to="/">privacy policy</Link>
                              </span>
                              <span> and </span>
                              <span className="text-[#ff7c15] hover:underline font-semibold">
                                <Link to="/">terms and conditions.</Link>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="next action-button"
                        disabled={loading}
                      >
                        {loading ? (
                          <BeatLoader color="#ffff" size={15} />
                        ) : (
                          "Submit"
                        )}
                      </button>

                      <input
                        type="button"
                        name="previous"
                        className="previous action-button-previous"
                        value="Previous"
                        onClick={prevStep}
                      />
                    </fieldset>
                  )}
                </form>
                <div className="my-1">
                  <p className="text-lg">
                    Already have an account? Please{" "}
                    <span className="text-white underline">
                      <Link to="/login">Login.</Link>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <MobileBottomNav />
      </div>
    </div>
  );
};

export default Registration;
