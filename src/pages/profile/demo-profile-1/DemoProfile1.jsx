import { Accordion } from "react-bootstrap";
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

const DemoProfile1 = () => {
  return (
    <div>

      <section className="profile pt-1 px-1">
        <div className="container">
          <div className="main-body">
          
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card bg-white">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                      <div className="mt-3">
                        <h4 className="">John Doe</h4>
                        <p className="text-secondary mb-3">Full Stack Developer</p>
                        <div className="flex gap-3">
                          <button className="btn btn-primary">WhatsApp</button>
                          <button className="btn btn-outline-primary">Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-white mt-3">
                  <ul className="list-group list-group-flush">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <FaPhone className="demo_icon" />
                          Phone
                        </Accordion.Header>
                        <Accordion.Body>
                          QR
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <FaEnvelope className="demo_icon" />
                          Email
                        </Accordion.Header>
                        <Accordion.Body>
                          email
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          <FaFacebook className="demo_icon" />
                          Facebook
                        </Accordion.Header>
                        <Accordion.Body>
                          facebook
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          <FaWhatsapp className="demo_icon" />
                          WhatsApp
                        </Accordion.Header>
                        <Accordion.Body>
                          whatsapp
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          <FaLinkedin className="demo_icon" />
                          Linkedin
                        </Accordion.Header>
                        <Accordion.Body>
                          Linkedin
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          <FaTwitter className="demo_icon" />
                          Twitter
                        </Accordion.Header>
                        <Accordion.Body>
                          Twitter
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>
                          <FaInstagram className="demo_icon" />
                          Instagram
                        </Accordion.Header>
                        <Accordion.Body>
                          Instagram
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          <FaYoutube className="demo_icon" />
                          YouTube
                        </Accordion.Header>
                        <Accordion.Body>
                          YouTube
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="8">
                        <Accordion.Header>
                          <FaTiktok className="demo_icon" />
                          Tiktok
                        </Accordion.Header>
                        <Accordion.Body>
                          Tiktok
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>
                          <FaSnapchat className="demo_icon" />
                          Snapchat
                        </Accordion.Header>
                        <Accordion.Body>
                          Snapchat
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>
                          <TbWorldWww className="demo_icon" />
                          Website
                        </Accordion.Header>
                        <Accordion.Body>
                          Website
                        </Accordion.Body>
                      </Accordion.Item>
                      
                      <Accordion.Item eventKey="11">
                        <Accordion.Header>
                          <FaMapMarkerAlt className="demo_icon" />
                          Location
                        </Accordion.Header>
                        <Accordion.Body>
                          Location
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card bg-white mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Kenneth Valdez
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Father Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        fip jukmuh
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mother Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Mahi 
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        bayarea@gamil.com
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Alternate Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        bayarea@gamil.com
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Permanent Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        bayarea
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        01737351549
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Alternate Phone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        01737351549
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">What's App</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        01737351549
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Date of Birth</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        12/06/2000
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Present Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Dhaka, Mirpur
                      </div>
                    </div>
                    <hr/>
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Language</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bangla
                      </div>
                    </div>
                    <hr/>
                  </div>
                </div>

                <div className="row gutters-sm">
                  <div className="col-sm-6 mb-3">
                    <div className="card bg-white">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">Education</h6>
                        <div className="flex flex-col gap-4">
                          <ul>
                            <li>Degree : Web Designer</li>
                            <li>Institution : Thankugaon</li>
                            <li>Duration : 2017 Years</li>
                            <li>Passing Year : 2024 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="card bg-white">
                      <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3">Job Experiences</h6>
                        <div className="flex flex-col gap-4">
                          <ul>
                            <li>Degree : Web Designer</li>
                            <li>Institution : Thankugaon</li>
                            <li>Duration : 2017 Years</li>
                            <li>Passing Year : 2024 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>

    </div>
  )
};

export default DemoProfile1;