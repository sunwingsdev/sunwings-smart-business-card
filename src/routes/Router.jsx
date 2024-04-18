import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomizeHome from "../pages/dashboard/customizeHome/CustomizeHome";
import AllCards from "../pages/dashboard/allCards/AllCards";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import Order from "../pages/order/Order";
import DemoCard from "../pages/DemoCard";
import Profile from "../pages/profile/Profile";
import EditProfile from "../pages/dashboard/EditProfile";
import DemoProfile from "../pages/profile/demo-profile/DemoProfile";
import EditQrCode from "../pages/dashboard/EditQrCode";
import SocialMedia from "../pages/dashboard/SocialMedia";
import UserInquiry from "../pages/dashboard/UserInquiry";
import Themes from "../pages/dashboard/Themes";
import Gallery from "../pages/dashboard/Gallery";
import Education from "../pages/dashboard/Education";
import JobExperience from "../pages/dashboard/JobExperience";
import Test from "../pages/Test";
import PrivateRoute from "./PrivateRoute";
import DemoProfile1 from "../pages/profile/demo-profile-1/DemoProfile1";
import DashboardHome from "../components/dashboard/DashboardHome";
import DynamicProfile from "../pages/profile/DynamicProfile";
import ManageUsers from "../pages/dashboard/ManageUsers";
import Theme3 from "../pages/profile/themes/theme3/Theme3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/demo-card",
        element: <DemoCard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "add-images",
        element: <CustomizeHome />,
      },
      {
        path: "all-cards",
        element: <AllCards />,
      },
      {
        path: "edit-profile/:uid",
        element: <EditProfile />,
      },
      {
        path: "edit-qr-code/:uid",
        element: <EditQrCode />,
      },
      {
        path: "education/:uid",
        element: <Education />,
      },
      {
        path: "job-experiences/:uid",
        element: <JobExperience />,
      },
      {
        path: "social-media/:uid",
        element: <SocialMedia />,
      },
      {
        path: "manage-users/:uid",
        element: <ManageUsers />,
      },
      {
        path: "user-inquiries",
        element: <UserInquiry />,
      },
      {
        path: "themes/:uid",
        element: <Themes />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/user-profile/:id",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/demo-profile",
    element: <DemoProfile />,
  },
  {
    path: "/profile/:uid/:theme",
    element: <DynamicProfile />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/profile-1",
    element: <DemoProfile1 />,
  },
  {
    path: "/test2",
    element: <Theme3 />,
  },
]);

export default router;
