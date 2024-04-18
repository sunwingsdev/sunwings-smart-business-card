import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdLogout, MdDashboard } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useGetUserByUidQuery } from "../../redux/features/allApis/usersApi";

const Menu = () => {
  const { user, logOut } = useContext(AuthContext);

  const { data: singleUser } = useGetUserByUidQuery(user?.uid);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Success.", {
          style: {
            border: "1px solid #ff8400",
            padding: "16px",
            color: "#ff8400",
          },
          iconTheme: {
            primary: "#ff8400",
            secondary: "#FFFAEE",
          },
        });
      })
      .catch((error) => {
        toast.error(`${error}`, {
          style: {
            border: "1px solid #e70f0f",
            padding: "16px",
            color: "#e70f0f",
          },
          iconTheme: {
            primary: "#e70f0f",
            secondary: "#FFFAEE",
          },
        });
      });
  };
  return (
    <section className="header_menu">
      <div className="container-fluid">
        <Row className="row">
          <Col lg={6}>
            <nav className="menu_area">
              <ul>
                <li>
                  <Link className="btn1" to="/demo-card">
                    <span className="flex items-center justify-center gap-2">
                      <FaAddressCard className="text-[#ff8400] text-xl" />
                      <small>ডেমো কার্ড ডিজাইন</small>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="btn1" to="/order">
                    <span className="flex items-center justify-center gap-2">
                      <FaCartShopping className="text-[#ff8400] text-xl" />
                      <small>কার্ড অর্ডার করুন</small>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <div className="col-lg-6 menu_margin_t">
            <nav className="menu_area">
              <ul>
                {user ? (
                  <>
                    <li>
                      <Link className="btn1" to="/dashboard/home">
                        <span className="flex items-center justify-center gap-2">
                          <MdDashboard className="text-[#ff8400] text-xl" />
                          <small>ড্যাশবোর্ড</small>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn1"
                        to={`/profile/${user?.uid}/${singleUser?.theme}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <FaAddressBook className="text-[#ff8400] text-xl" />
                          <small>প্রোফাইল দেখুন</small>
                        </span>
                      </Link>
                    </li>
                    <li onClick={handleLogOut}>
                      <button className="btn1">
                        <span className="flex items-center justify-center gap-2">
                          <MdLogout className="text-[#ff8400] text-xl" />
                          <small>লগ আউট</small>
                        </span>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link className="btn1" to="/registration">
                        <span className="flex items-center justify-center gap-2">
                          <FaAddressBook className="text-[#ff8400] text-xl" />
                          <small>প্রোফাইল তৈরি করুন</small>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="btn1" to="/login">
                        <span className="flex items-center justify-center gap-2">
                          <RiLoginBoxFill className="text-[#ff8400] text-xl" />
                          <small>লগইন করুন</small>
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default Menu;
