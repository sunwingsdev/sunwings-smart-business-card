import { Link } from "react-router-dom";
import { useGetLogoQuery } from "../../redux/features/allApis/logoApi";
import { useGetBannerQuery } from "../../redux/features/allApis/bannerApi";

const Header = () => {
  const { data: allLogo, isLoading, isError } = useGetLogoQuery();

  const logo = allLogo?.[0].logo;

  const { data: allBanner } = useGetBannerQuery();
  const banner = allBanner?.[0].banner;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error during Fetch...</p>;
  }

  return (
    <header className="header">
      <div className="header_top">
        <div className="container-fluid">
          {/* header top logo */}
          <div className="header_top_logo mb-3">
            <Link href="index.html">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* header banner */}
          <div className="header_banner">
            <img src={banner} alt="banner-1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
