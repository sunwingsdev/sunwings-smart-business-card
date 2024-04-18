import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/info_card_logo.png";
import Footer from "../../components/shared/Footer";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { BeatLoader } from "react-spinners";
import MobileBottomNav from "../../components/shared/MobileBottomNav";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    setLoading(true);
    signIn(data.email, data.pwd)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login Successfull.", {
          style: {
            border: "1px solid #10f510",
            padding: "16px",
            color: "#10f510",
          },
          iconTheme: {
            primary: "#10f510",
            secondary: "#FFFAEE",
          },
        });

        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-56" />
        </Link>
      </div>
      <div className="registration">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
              <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 className="text_36 mb-3 text-white">লগইন করুন</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset className="p-4">
                    <div className="form-card">
                      <p className="text-red-600">{errorMessage}</p>
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

                      {/* password */}
                      <div className="form-control border-0 p-0">
                        <label htmlFor="pwd" className="fieldlabels">
                          Password: <span className="text-red-600 mr-1">*</span>
                          <span>
                            {errors.pwd && (
                              <span className="text-red-600 text-sm italic">
                                {errors.pwd.type === "required" &&
                                  "This field is required"}
                              </span>
                            )}
                          </span>
                        </label>
                        <input
                          type="password"
                          name="pwd"
                          {...register("pwd", {
                            required: true,
                          })}
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <button type="submit" className="next action-button">
                      {loading ? (
                        <BeatLoader color="#ffff" size={15} />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </fieldset>
                </form>
                <div className="my-1">
                  <p className="text-lg">
                    Don&apos;t have an account? Please{" "}
                    <span className="text-white underline">
                      <Link to="/registration">Register.</Link>
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

export default Login;
