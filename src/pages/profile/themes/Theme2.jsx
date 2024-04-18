import { Link } from "react-router-dom";
import "../demo-profile/DemoProfile.css";
import coverImg from "../../../assets/images/banner-1.webp";
import profileImg from "../../../assets/images/vismo.jpg";
import { FaSquareFacebook, FaSquareXTwitter, FaTiktok } from "react-icons/fa6";
import { IoLogoLinkedin, IoLogoYoutube } from "react-icons/io5";
import {
  FaInstagram,
  FaSnapchat,
  FaGlobe,
  FaWhatsappSquare,
} from "react-icons/fa";
import img1 from "../../../assets/images/demo/5.jpeg";
import img2 from "../../../assets/images/demo/6.jpeg";
import img3 from "../../../assets/images/demo/7.jpeg";
import img4 from "../../../assets/images/demo-card/4.jpeg";

const Theme2 = ({
  firstFacebookLink,
  firstTwitterLink,
  firstWhatsAppLink,
  firstLinkedInLink,
  singleUser,
  formatDate,
}) => {
  return (
    <div>
      <div className="container">
        <div className="demo_profile_containe">
          <div className="row">
            {singleUser && singleUser?.profileCover?.length > 0 && (
              <div className="profile_cover_img">
                <img src={singleUser?.profileCover} alt="Cover-image" />
              </div>
            )}

            <div className="profile_img">
              {singleUser && singleUser?.profileImage?.length > 0 && (
                <img
                  src={singleUser?.profileImage}
                  alt=""
                  className="rounded mb-2 img-thumbnail"
                />
              )}

              <div className="">
                {singleUser && singleUser?.name?.length > 0 && (
                  <h2 className="text_ph">{singleUser?.name}</h2>
                )}
                {singleUser && singleUser?.designation?.length > 0 && (
                  <p className="text_p">{singleUser?.designation}</p>
                )}
              </div>
            </div>
            <div className="col-lg-3 mt-4">
              {singleUser && singleUser?.aboutMe?.length > 0 && (
                <div className="text_contain text-gray-600">
                  <p>{singleUser?.aboutMe}</p>
                </div>
              )}
            </div>
            <div className="col-lg-9 mt-4">
              {singleUser && singleUser?.aboutMe?.length > 0 && (
                <div className="text_title">
                  <p>{singleUser?.aboutMe}</p>
                </div>
              )}

              <div className="text_contain">
                <h2 className="text_ph text-gray-600">About Me</h2>
                {singleUser && (
                  <div className="row mt-2">
                    <div className="col-md-6 table-responsive-sm">
                      <table className="table">
                        <tbody className="">
                          <tr>
                            <td>Full Name</td>
                            <td>: {singleUser?.name}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>: {singleUser?.email}</td>
                          </tr>
                          <tr>
                            <td>Contact No</td>
                            <td>: {singleUser?.phone}</td>
                          </tr>
                          <tr>
                            <td>What&apos;s App</td>
                            <td>: {singleUser?.whatsAppNo}</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td>: {singleUser?.presentAddress}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6 table-responsive-sm">
                      <table className="table">
                        <tbody className="">
                          <tr>
                            <td>Date Of Birth</td>
                            <td>: {formatDate(singleUser?.dob)}</td>
                          </tr>
                          <tr>
                            <td>Language</td>
                            <td>: {singleUser?.preferedLanguage}</td>
                          </tr>
                          <tr>
                            <td>Alternate Contact</td>
                            <td>: {singleUser?.alternatePhone}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
              <div className="text_contain">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="text_ph text-gray-600">Job Experience</h2>
                    {singleUser &&
                      singleUser?.jobExperience?.length > 0 &&
                      singleUser?.jobExperience?.map((jE) => (
                        <div key={jE._id} className="row mt-2">
                          <div className="col-md-12">
                            <div className="job_experience contact_info mt-0 text-gray-600">
                              <ul>
                                <li>Company : {jE?.companyName}</li>
                                <li>Designation : {jE?.designation}</li>
                                <li>
                                  Duration : {formatDate(jE?.startDate)} -{" "}
                                  {jE.endDate &&
                                  /\d{4}-\d{2}-\d{2}/.test(jE.endDate)
                                    ? formatDate(jE.endDate)
                                    : "Present"}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="col-md-6">
                    <h2 className="text_ph text-gray-600">Education</h2>
                    {singleUser &&
                      singleUser?.education?.length > 0 &&
                      singleUser?.education?.map((edu) => (
                        <div key={edu._id} className="row mt-2">
                          <div className="col-md-12">
                            <div className="job_experience contact_info mt-0 text-gray-600">
                              <ul>
                                <li>Degree : {edu?.degree}</li>
                                <li>Institution : {edu?.institution}</li>
                                <li>Duration : {edu?.duration} Years</li>
                                <li>Passing Year : {edu?.passingYear}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="text_contain">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="text_ph text-gray-600">Social Media</h2>
                    <div className="row mt-2">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul className="">
                            {singleUser &&
                              singleUser?.facebook?.map((fb) => (
                                <li key={fb._id}>
                                  <Link to={fb?.facebook?.facebook}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaSquareFacebook className="text-3xl text-blue-600" />
                                      <span>
                                        {fb?.facebook?.facebook?.length > 35 ? (
                                          <>
                                            {fb?.facebook?.facebook?.slice(
                                              0,
                                              35
                                            )}
                                            ...
                                          </>
                                        ) : (
                                          fb?.facebook?.facebook
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.twitter?.map((tw) => (
                                <li key={tw._id}>
                                  <Link to={tw?.twitter?.twitter}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaSquareXTwitter className="text-3xl text-black" />
                                      <span>
                                        {tw?.twitter?.twitter?.length > 35 ? (
                                          <>
                                            {tw?.twitter?.twitter?.slice(0, 35)}
                                            ...
                                          </>
                                        ) : (
                                          tw?.twitter?.twitter
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.linkedin?.map((lik) => (
                                <li key={lik._id}>
                                  <Link to={lik?.linkedin?.linkedin}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <IoLogoLinkedin className="text-3xl text-blue-700" />
                                      <span>
                                        {lik?.linkedin?.linkedin?.length >
                                        35 ? (
                                          <>
                                            {lik?.linkedin?.linkedin?.slice(
                                              0,
                                              35
                                            )}
                                            ...
                                          </>
                                        ) : (
                                          lik?.linkedin?.linkedin
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.instagram?.map((ins) => (
                                <li key={ins._id}>
                                  <Link to={ins?.instagram?.instagram}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaInstagram className="text-3xl gradient-instagram" />
                                      <span>
                                        {ins?.instagram?.instagram?.length >
                                        35 ? (
                                          <>
                                            {ins?.instagram?.instagram?.slice(
                                              0,
                                              35
                                            )}
                                            ...
                                          </>
                                        ) : (
                                          ins?.instagram?.instagram
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.whatsapp?.map((wha) => (
                                <li key={wha._id}>
                                  <Link to={wha?.whatsapp?.whatsapp}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaWhatsappSquare className="text-3xl text-green-700" />
                                      <span>
                                        {wha?.whatsapp?.whatsapp?.length >
                                        35 ? (
                                          <>
                                            {wha?.whatsapp?.whatsapp?.slice(
                                              0,
                                              35
                                            )}
                                            ...
                                          </>
                                        ) : (
                                          wha?.whatsapp?.whatsapp
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h2 className="text_ph"></h2>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.tiktok?.map((tik) => (
                                <li key={tik._id}>
                                  <Link to={tik?.tiktok?.tiktok}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaTiktok className="text-2xl text-black" />
                                      <span>
                                        {tik?.tiktok?.tiktok?.length > 35 ? (
                                          <>
                                            {tik?.tiktok?.tiktok?.slice(0, 35)}
                                            ...
                                          </>
                                        ) : (
                                          tik?.tiktok?.tiktok
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.snapchat?.map((sna) => (
                                <li key={sna._id}>
                                  <Link to={sna?.snapchat?.snapchat}>
                                    <div className="flex items-center gap-2 text-base text-gray-600">
                                      <FaSnapchat className="text-3xl text-yellow-400" />
                                      <span>
                                        {sna?.snapchat?.snapchat?.length >
                                        35 ? (
                                          <>
                                            {sna?.snapchat?.snapchat?.slice(
                                              0,
                                              35
                                            )}
                                            ...
                                          </>
                                        ) : (
                                          sna?.snapchat?.snapchat
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.website?.map((we) => (
                                <li key={we._id}>
                                  <Link to={we?.website?.website}>
                                    <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                      <FaGlobe className="text-3xl text-black" />
                                      <span>
                                        {we?.website?.website?.length > 35 ? (
                                          <>
                                            {we?.website?.website?.slice(0, 35)}
                                            ...
                                          </>
                                        ) : (
                                          we?.website?.website
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="job_experience contact_info mt-0">
                          <ul>
                            {singleUser &&
                              singleUser?.youtube?.map((yu) => (
                                <li key={yu._id}>
                                  <Link to={yu?.youtube?.youtube}>
                                    <div className="flex items-center gap-2 text-base mt-2 text-gray-600">
                                      <IoLogoYoutube className="text-3xl text-red-600" />
                                      <span>
                                        {yu?.youtube?.youtube?.length > 35 ? (
                                          <>
                                            {yu?.youtube?.youtube?.slice(0, 35)}
                                            ...
                                          </>
                                        ) : (
                                          yu?.youtube?.youtube
                                        )}
                                      </span>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* start gallery */}
            <div className="gallery contact_info">
              <h2 className="text_ph text-gray-600">Job Experience</h2>
              <div className="all_card_gallery mt-2">
                <div className="image-wrapper">
                  <Link href="#" data-fancybox="gallery">
                    <img className="image-1" src={img1} />
                  </Link>
                </div>
                <div className="image-wrapper">
                  <Link data-fancybox="gallery">
                    <img className="image-1" src={img2} />
                  </Link>
                </div>
                <div className="image-wrapper">
                  <Link data-fancybox="gallery">
                    <img className="image-1" src={img3} />
                  </Link>
                </div>
                <div className="image-wrapper">
                  <Link data-fancybox="gallery">
                    <img className="image-1" src={img4} />
                  </Link>
                </div>
              </div>
            </div>
            {/* end gallery */}

            {/* contact us */}
            <div className="contact_profile">
              <h2 className="text_ph text-gray-600 mb-3">Contact</h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <textarea
                    type="password"
                    className="form-control"
                    placeholder="Message"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            {/* contact us */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme2;
