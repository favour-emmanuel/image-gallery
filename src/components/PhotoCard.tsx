import React, { useState } from "react";
import { assetPhotos } from "../constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const PhotoCard: React.FC<{ photo: assetPhotos }> = ({ photo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleClick = () => setIsPopupVisible(true);
  const handleClosePopup = () => setIsPopupVisible(false);

  const [isLiked, setIsLiked] = useState(photo.isLiked);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleImageClick = () => {
    setIsPopupVisible(true);
  };

  return (
    <>
      <div
        className="relative w-full h-full"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src={photo.url}
          alt=""
          className=" object-cover"
          onClick={handleImageClick}
        />

        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 cursor-pointer">
            <div className="flex justify-end">
              <button className="text-xl" onClick={handleLikeClick}>
                {isLiked ? (
                  <span className="text-xl text-appCyan">
                    <Icon icon="ph:heart-fill" />
                  </span>
                ) : (
                  <span className="border border-gray-600 bg-white text-gray-800 rounded-md p-2 flex justify-center items-center">
                    <Icon icon="ph:heart" />
                  </span>
                )}
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="max-w-[5rem]">
                <img
                  src={photo.photographer.profilePicture}
                  alt={photo.photographer.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
              </div>
              <a
                href={photo.downloadLink}
                download
                className="bg-appCyan text-white flex items-center gap-2 px-4 py-2 rounded-full"
              >
                <span>
                  <Icon icon="prime:download" />
                </span>
                Download
              </a>
            </div>
          </div>
        )}
      </div>

      {isPopupVisible && (
        <div className="fixed z-[999] inset-0 bg-black bg-opacity-75 flex justify-center items-center min-h-screen">
          {/* Close Button */}
          <button
            onClick={handleClosePopup}
            className="absolute top-[2rem] left-[13rem] font-bold text-white z-10"
          >
            <Icon icon="iconoir:cancel" className="text-[33px]" />
          </button>
          <div
            className={`bg-white py-3 px-5 rounded-2xl  w-[43rem] overflow-auto popup ${
              isPopupVisible ? "show" : ""
            }`}
          >
            {/* donwload btn */}
            <div className="my-2 flex justify-end">
              <div className="flex items-center gap-2">
                <a
                  href={photo.downloadLink}
                  download
                  className="bg-appCyan flex items-center gap-2.5 text-white px-4 py-2 rounded"
                >
                  <span className="text-xl">
                    <Icon icon="prime:download" />
                  </span>
                  Download
                </a>
              </div>
            </div>

            {/* Image Container */}
            <div className="w-full h-[25rem] my-5">
              <img
                src={photo.url}
                alt="selected"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            {/* Photographer Information */}
            <div className="mt-2 text-gray-700 flex justify-between">
              <div className="flex gap-2 items-center">
                <img
                  src={photo.photographer.profilePicture}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <p className="font-semibold text-base">
                  {photo.photographer.name}
                </p>
              </div>
              <p>Free to use</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
