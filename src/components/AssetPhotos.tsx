import { assetPhotos } from "../constants";
import PhotoCard from "./PhotoCard";

const AssetPhotos = () => {
  const photoData: assetPhotos[] = [
    {
      id: "1",
      url: "https://images.pexels.com/photos/26151064/pexels-photo-26151064.jpeg",
      photographer: {
        name: "John Doe",
        profilePicture:
          "https://images.pexels.com/users/avatars/945925404/vitor-diniz-133.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=2",
      },
      isLiked: false,
      downloadLink:
        "https://www.pexels.com/photo/packs-of-fresh-strawberries-and-cherries-26151064/",
      onclick: () => {
        console.log("photo clicked");
      },
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/17939186/pexels-photo-17939186.jpeg",
      photographer: {
        name: "John Doe",
        profilePicture:
          "https://images.pexels.com/users/avatars/665/valeria-boltneva-612.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=2",
      },
      isLiked: false,
      downloadLink:
        "https://www.pexels.com/photo/christian-shrine-in-niche-on-wall-with-flowers-17939186/",
      onclick: () => {
        console.log("photo clicked");
      },
    },
    {
      id: "3",
      url: "https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      photographer: {
        name: "John Doe",
        profilePicture:
          "https://images.pexels.com/users/avatars/320381804/emre-akyol-975.jpeg?auto=compress&fit=crop&h=40&w=40&dpr=2",
      },
      isLiked: false,
      downloadLink:
        "https://images.pexels.com/photos/28407813/pexels-photo-28407813/free-photo-of-blackletes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      onclick: () => {
        console.log("photo clicked");
      },
    },
  ];

  return (
    <div className="py-5 grid lg:grid-cols-3 gap-3 grid-cols-2">
      {photoData.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default AssetPhotos;
