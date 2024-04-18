import { useParams } from "react-router-dom";
import Facebook from "../../components/dashboard/socialMedia/Facebook";
import Instagram from "../../components/dashboard/socialMedia/Instagram";
import LinkedIn from "../../components/dashboard/socialMedia/LinkedIn";
import PersonalWebsite from "../../components/dashboard/socialMedia/PersonalWebsite";
import SnapChat from "../../components/dashboard/socialMedia/SnapChat";
import TikTok from "../../components/dashboard/socialMedia/TikTok";
import Twitter from "../../components/dashboard/socialMedia/Twitter";
import WhatsApp from "../../components/dashboard/socialMedia/WhatsApp";
import YouTube from "../../components/dashboard/socialMedia/YouTube";

const SocialMedia = () => {
  const { uid } = useParams();
  return (
    <div className="h-screen">
      <h1 className="text_db_36 mb-3">Social Media</h1>

      <div>
        <div className="flex flex-col gap-4">
          <Facebook uid={uid} />
          <Twitter uid={uid} />
          <Instagram uid={uid} />
          <WhatsApp uid={uid} />
          <LinkedIn uid={uid} />
          <YouTube uid={uid} />
          <TikTok uid={uid} />
          <SnapChat uid={uid} />
          <PersonalWebsite uid={uid} />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
