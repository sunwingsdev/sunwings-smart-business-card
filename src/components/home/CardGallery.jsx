import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useState } from "react";
import { useGetAllStanndardCardImageQuery } from "../../redux/features/allApis/standardCardImageApi";
import { useGetAllPremiumCardImageQuery } from "../../redux/features/allApis/premiumCardImageApi";
import { Link } from "react-router-dom";

const CardGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [officeLightboxOpen, setOfficeLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [officeLightboxIndex, setOfficeLightboxIndex] = useState(0);
  const route = window.location.pathname;

  const { data: allStandardCardInfo, isLoading: standardCardsLoading } =
    useGetAllStanndardCardImageQuery();

  const { data: allPremiumCardInfo, isLoading: premiumCardsLoading } =
    useGetAllPremiumCardImageQuery();

  if (standardCardsLoading || premiumCardsLoading) {
    return <div>Loading...</div>;
  }

  const demoImages = allStandardCardInfo?.map((url, index) => ({
    url: url.standardCardImage,
    title: `Demo Card ${index + 1}`,
  }));

  const officeImages = allPremiumCardInfo?.map((url, index) => ({
    url: url.premiumCardImage,
    title: `Office Id Card ${index + 1}`,
  }));

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };
  const openOfficeLightbox = (index) => {
    setOfficeLightboxOpen(true);
    setOfficeLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };
  const closeOfficeLightbox = () => {
    setOfficeLightboxOpen(false);
    setOfficeLightboxIndex(0);
  };
  return (
    <section className="card_gallery">
      <div className="container">
        <div className="card_gallery_contain">
          <h2 className="text_36">ডেমো কার্ড ডিজাইন</h2>

          {/* <!-- all card gallery --> */}
          <div>
            <div className="all_card_gallery">
              {demoImages?.map((image, index) => (
                <div key={index} onClick={() => openLightbox(index)}>
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{ width: "100%", height: "auto" }}
                    className="image-wrapper p-0"
                  />
                </div>
              ))}
            </div>
            {lightboxOpen && (
              <div className="custom-lightbox">
                <Lightbox
                  images={demoImages}
                  onClose={closeLightbox}
                  index={lightboxIndex}
                  zoomStep={0.1}
                />
              </div>
            )}
          </div>
          {route === "/demo-card" ? (
            <></>
          ) : (
            <div className="all_card_view">
              <Link to="/demo-card" className="btn4">
                <span>সকল কার্ড দেখুন</span>
              </Link>
            </div>
          )}

          <div className="offices_id_card_heading">
            <h2 className="text_36">ডেমো এম্পলয়ি অফিস আইডি কার্ড ডিজাইন</h2>
          </div>

          {/* <!-- all card gallery --> */}
          <div>
            <div className="office_card_gallery">
              {officeImages?.map((image, index) => (
                <div key={index} onClick={() => openOfficeLightbox(index)}>
                  <img
                    src={image.url}
                    alt={image.title}
                    style={{ width: "100%", height: "auto" }}
                    className="image-wrapper p-0"
                  />
                </div>
              ))}
            </div>
            {officeLightboxOpen && (
              <div className="custom-lightbox">
                <Lightbox
                  images={officeImages}
                  onClose={closeOfficeLightbox}
                  index={officeLightboxIndex}
                  zoomStep={0.1}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGallery;
