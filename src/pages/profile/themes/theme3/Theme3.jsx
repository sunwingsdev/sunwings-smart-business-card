import './Theme3.css'
import profile_pik from '../../../../assets/images/theme3/profil.jpeg'
import banner from '../../../../assets/images/theme3/banner.jpeg'
import footer from '../../../../assets/images/theme3/footer.jpeg'
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSnapchat,
  FaMapMarkerAlt,
  FaRegStar,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import img1 from "../../../../assets/images/demo/5.jpeg";
import img2 from "../../../../assets/images/demo/6.jpeg";
import img3 from "../../../../assets/images/demo/7.jpeg";
import img4 from "../../../../assets/images/demo/5.jpeg";
const Theme3 = () => {
  return (
    <div>
        
      <header className="header_area">
        <div className="container">
          <div className="header_bg_img">
            <div className="header_contain">
              <div className="header_img_left">
                <img src={profile_pik} alt=""/>
              </div>
              <div className="header_right_item">
                <h2 className="theme_text_40">MD SHOHEL RANA </h2>
                <h4 className="them_text_26">Chief Executive Officer</h4>
              <div className="header_con d-flex gap-2 mt-2">
                <h5 className="them_text_16">01793457630</h5>
                <a href="#" className="save_btn">Save</a>
              </div>
                <div className="header_social_icon">
                  <Link><FaFacebook className='theme3_icon icon_facebook'/></Link>
                  <Link><FaWhatsapp className='theme3_icon icon_whatsapp'/></Link>
                  <Link><FaLinkedin className='theme3_icon icon_linkedin'/></Link>
                  <Link><FaTwitter className='theme3_icon icon_twitter'/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="contact_area">
        <div className="container">

          <div className="theme_chart">
            <ul>
              <li className='message_bg'><Link target="_blank" to="http://wa.me/+8801793457630">Whats App</Link></li>
              <li><Link>Messages</Link></li>
            </ul>
          </div>

          <div className="visiting_faq theme3_faq">
          <Accordion>
                {/* {singleUser?.phone?.length > 0 &&
                  singleUser?.alternatePhone?.length > 0 && ( */}
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <FaPhone className="demo_icon" />
                        Phone
                      </Accordion.Header>
                      <Accordion.Body>
                        {/* {singleUser?.phone && ( */}
                          <p className="break-words">
                            {/* + {singleUser.phone} */}
                          </p>
                        {/* )} */}
                        {/* {singleUser?.alternatePhone && ( */}
                          <p className="break-words">
                            {/* + {singleUser.alternatePhone} */}
                          </p>
                        {/* )} */}
                      </Accordion.Body>
                    </Accordion.Item>
                  {/* )} */}

                    {/* {singleUser?.email?.length > 0 &&
                      singleUser?.alternateEmail?.length > 0 && ( */}
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <FaEnvelope className="demo_icon" />
                            Email
                          </Accordion.Header>
                          <Accordion.Body>
                            {/* {singleUser?.email && (
                              <p className="break-words">{singleUser.email}</p>
                            )}
                            {singleUser?.alternateEmail && (
                              <p className="break-words">
                                {singleUser.alternateEmail}
                              </p>
                            )} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      {/* )} */}

                    {/* {singleUser?.facebook?.length > 0 && ( */}
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <FaFacebook className="demo_icon" />
                          Facebook
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.facebook.map((fb, i) => ( */}
                            <Link
                              // key={i}
                              // to={fb?.facebook?.facebook}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {fb?.facebook?.facebook} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.whatsapp?.length > 0 && ( */}
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <FaWhatsapp className="demo_icon" />
                          WhatsApp
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.whatsapp.map((wha, i) => ( */}
                            <Link
                              // key={i}
                              // to={wha.whatsapp.whatsapp}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {wha.whatsapp.whatsapp} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )}/ */}

                    {/* {singleUser?.linkedin?.length > 0 && ( */}
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <FaLinkedin className="demo_icon" />
                          Linkedin
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.linkedin.map((lin, i) => ( */}
                            <Link
                              // key={i}
                              // to={lin?.linkedin?.linkedin}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {lin.linkedin.linkedin} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.twitter?.length > 0 && ( */}
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <FaTwitter className="demo_icon" />
                          Twitter
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.twitter.map((fb, i) => ( */}
                            <Link
                              // key={i}
                              // to={fb?.twitter?.twitter}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {fb?.twitter?.twitter} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.instagram?.length > 0 && ( */}
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <FaInstagram className="demo_icon" />
                          Instagram
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.instagram.map((fb, i) => ( */}
                            <Link
                              // key={i}
                              // to={fb?.instagram?.instagram}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {fb.instagram.instagram} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.youtube && singleUser.youtube.length > 0 && ( */}
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <FaYoutube className="demo_icon" />
                          YouTube
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.youtube.map((yu, i) => ( */}
                            <Link
                              // key={i}
                              // to={yu?.youtube?.youtube}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {yu?.youtube?.youtube} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.tiktok?.length > 0 && ( */}
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <FaTiktok className="demo_icon" />
                          Tiktok
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.tiktok.map((ti, i) => ( */}
                            <Link
                              // key={i}
                              // to={ti?.tiktok?.tiktok}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {ti?.tiktok?.tiktok} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.snapchat?.length > 0 && ( */}
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <FaSnapchat className="demo_icon" />
                          Snapchat
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.snapchat.map((sn, i) => ( */}
                            <Link
                              // key={i}
                              // to={sn?.snapchat?.snapchat}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {sn?.snapchat?.snapchat} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.website?.length > 0 && ( */}
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>
                          <TbWorldWww className="demo_icon" />
                          Website
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.website.map((we, i) => ( */}
                            <Link
                              // key={i}
                              // to={we?.website?.website}
                              className="hover:text-blue-500"
                            >
                              <p className="break-words">
                                {/* {we?.website?.website} */}
                              </p>
                            </Link>
                          {/* ))} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}

                    {/* {singleUser?.presentAddress?.length > 0 && ( */}
                      <Accordion.Item eventKey="11">
                        <Accordion.Header>
                          <FaMapMarkerAlt className="demo_icon" />
                          Location
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {singleUser.presentAddress} */}
                        </Accordion.Body>
                      </Accordion.Item>
                    {/* )} */}
                  </Accordion>
          </div>

          <div className="row">
            <div className="col-md-6">
              {/* <!-- Education --> */}
          {/* {singleUser && singleUser?.education?.length > 0 && ( */}
            <div className="job_experience contact_info">
              <h2 className="text_26">Education</h2>
              <div className="flex flex-col gap-4">
                {/* {singleUser?.education?.map((education) => ( */}
                  <ul 
                  // key={education._id}
                  >
                    <li>Degree :
                      {/* {education?.degree} */}
                    </li>
                    <li>Institution : 
                      {/* {education?.institution} */}
                    </li>
                    <li>Duration : 
                      {/* {education?.duration}  */}
                      Years
                    </li>
                    <li>Passing Year : 
                      {/* {education?.passingYear}  */}
                    </li>
                  </ul>
                {/* ))} */}
              </div>
            </div>
          {/* )} */}
            </div>
            <div className="col-md-6">
              {/* <!-- Education --> */}
          {/* {singleUser && singleUser?.education?.length > 0 && ( */}
            <div className="job_experience contact_info">
              <h2 className="text_26">Job Experience</h2>
              <div className="flex flex-col gap-4">
                {/* {singleUser?.education?.map((education) => ( */}
                  <ul 
                  // key={education._id}
                  >
                    <li>Degree :
                      {/* {education?.degree} */}
                    </li>
                    <li>Institution : 
                      {/* {education?.institution} */}
                    </li>
                    <li>Duration : 
                      {/* {education?.duration}  */}
                      Years
                    </li>
                    <li>Passing Year : 
                      {/* {education?.passingYear}  */}
                    </li>
                  </ul>
                {/* ))} */}
              </div>
            </div>
          {/* )} */}
            </div>
          </div>

          {/* <!-- start Gallery images --> */}
          <div className="gallery contact_info">
            <h2 className="text_26">Gallery Images</h2>
            {/* <!-- all card gallery --> */}
            <div className="all_card_gallery">
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/5.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img1} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/6.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img2} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a href="assets/images/demo/7.jpeg" data-fancybox="gallery">
                  <img className="image-1" src={img3} />
                </a>
              </div>
              {/* <!-- image wrapper --> */}
              <div className="image-wrapper">
                <a
                  href="assets/images/demo-card/4.jpeg"
                  data-fancybox="gallery"
                >
                  <img className="image-1" src={img4} />
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end Gallery images --> */}

        </div>
      </section>

      <footer className="footer_area">
        <div className="container">
          <div className="footer_bg_img">
              <h2 className="them_text_36">Product by: <br/> 64EAB & Sunwings</h2>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Theme3;