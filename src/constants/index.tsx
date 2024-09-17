export interface navItem {
  label: string;
  path: string;
  onclick: () => void;
}

export interface assetNavItem {
  label: string;
  path: string;
  onclick: () => void;
}

export interface assetPhotos {
  id: string;
  url: string;
  photographer: {
    name: string;
    profilePicture: string;
  };
  isLiked: boolean;
  downloadLink: string;
  onclick: () => void;
}
