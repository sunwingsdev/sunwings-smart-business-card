import logo from "../assets/images/info_card_logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import {
  FaAddressCard,
  FaShareAltSquare,
  FaImage,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";
import { LuImagePlus, LuReceipt } from "react-icons/lu";
import { RiProfileFill } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { FaPersonCircleQuestion, FaMoneyCheckDollar } from "react-icons/fa6";
import { TiEdit } from "react-icons/ti";
import "./DashboardLayout.css";
import { useContext } from "react";
import MobileBottomNav from "../components/shared/MobileBottomNav";
import { AuthContext } from "../providers/AuthProvider";
import { useGetUserByUidQuery } from "../redux/features/allApis/usersApi";
import { IoMdMenu } from "react-icons/io";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { data: singleUser } = useGetUserByUidQuery(user?.uid);

  const topMenuItems = (
    <>
      <li>
        <NavLink
          to="home"
          className={({ isActive }) =>
            isActive ? "activeNavLink" : "nonactiveNavLink"
          }
        >
          <div className="flex items-center gap-2">
            <MdDashboard />
            <span>Dashboard</span>
          </div>
        </NavLink>
      </li>
      {singleUser?.role === "admin" && (
        <>
          <li>
            <NavLink
              to="add-images"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <LuImagePlus />
                <span>Add Images</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="all-cards"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaAddressCard />
                <span>All Cards</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`manage-users/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <MdManageAccounts />
                <span>Manage Users</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`manage-orders/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <MdManageAccounts />
                <span>Manage Order</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="user-inquiries"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaPersonCircleQuestion />
                <span>User Inquiry</span>
              </div>
            </NavLink>
          </li>
        </>
      )}

      {singleUser?.role === "user" && (
        <>
          <li>
            <NavLink
              to={`edit-profile/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <RiProfileFill />
                <span>Edit Profile</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`education/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaUserGraduate />
                <span>Education</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`job-experiences/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaBriefcase />
                <span>Job Experience</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`edit-qr-code/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <BsQrCode />
                <span>QR Code</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`social-media/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaShareAltSquare />
                <span>Social Media</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`themes/${singleUser?.uid}`}
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <TiEdit />
                <span>Themes</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="gallery"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaImage />
                <span>Gallery</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="plans"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <FaMoneyCheckDollar />
                <span>Plans</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="transactions"
              className={({ isActive }) =>
                isActive ? "activeNavLink" : "nonactiveNavLink"
              }
            >
              <div className="flex items-center gap-2">
                <LuReceipt />
                <span>Transactions</span>
              </div>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          {/* navbar */}
          <nav className="relative flex w-full flex-wrap items-center justify-between bg-white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              <Link
                className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
                to="/"
              >
                <img src={logo} alt="website Logo" className="w-40" />
              </Link>
              <div className="ml-5 flex items-center justify-between">
                {/* <input
                    type="search"
                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  /> */}

                {/* <!--Search icon--> */}
                {/* <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span> */}
                <label
                  htmlFor="my-drawer"
                  className="drawer-button cursor-pointer"
                >
                  <IoMdMenu size={30} className="text-[#ff8400]" />
                </label>
              </div>
            </div>
          </nav>
          <div className="px-5 h-screen">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Side Bar */}
          <ul className=" p-4 w-80 min-h-full text-base-content bg-[#ebe6e6]">
            <Link
              className="ml-2 text-xl text-neutral-800 dark:text-neutral-200 mb-10"
              to="/"
            >
              <img src={logo} alt="website Logo" className="w-40" />
            </Link>
            {topMenuItems}
          </ul>
        </div>
      </div>
      <MobileBottomNav />
    </>
  );
};

export default DashboardLayout;
