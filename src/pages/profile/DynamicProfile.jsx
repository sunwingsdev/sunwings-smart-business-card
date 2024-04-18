import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserByUidQuery } from "../../redux/features/allApis/usersApi";
import Theme1 from "./themes/Theme1";
import Theme2 from "./themes/Theme2";

const DynamicProfile = () => {
  const { theme } = useParams();
  const { user } = useContext(AuthContext);

  const { data: singleUser } = useGetUserByUidQuery(user?.uid);

  const firstFacebookLink = singleUser?.facebook?.[0]?.facebook?.facebook;
  const firstTwitterLink = singleUser?.twitter?.[0]?.twitter?.twitter;
  const firstWhatsAppLink = singleUser?.whatsapp?.[0]?.whatsapp?.whatsapp;
  const firstLinkedInLink = singleUser?.linkedin?.[0]?.linkedin.linkedin;

  const formatDate = (date) => {
    if (!date) {
      return "Present";
    }
    const dateObj = new Date(date);
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

  const renderProfileByTheme = () => {
    switch (theme) {
      case "theme1":
        return (
          <Theme1
            firstFacebookLink={firstFacebookLink}
            firstTwitterLink={firstTwitterLink}
            firstWhatsAppLink={firstWhatsAppLink}
            firstLinkedInLink={firstLinkedInLink}
            singleUser={singleUser}
            formatDate={formatDate}
          />
        );
      case "theme2":
        return (
          <Theme2
            firstFacebookLink={firstFacebookLink}
            firstTwitterLink={firstTwitterLink}
            firstWhatsAppLink={firstWhatsAppLink}
            firstLinkedInLink={firstLinkedInLink}
            singleUser={singleUser}
            formatDate={formatDate}
          />
        );
      default:
        return <div>Invalid theme</div>;
    }
  };

  return renderProfileByTheme();
};

export default DynamicProfile;
