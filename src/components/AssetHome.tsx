import { Icon } from "@iconify/react/dist/iconify.js";
import AssetPhotos from "./AssetPhotos";

const AssetHome = () => {
  return (
    <div className="lg:px-10 py-3">
      <div className="flex justify-between items-center">
        <h3 className="text-[#2C343E] text-[23px] font-semibold">
          Free Stock Photos
        </h3>
        <button className="flex items-center px-3 py-2.5 gap-3 border border-[#DFDFE0] rounded-lg text-[15px]">
          Trending{" "}
          <span>
            <Icon icon="jam:chevron-down" />
          </span>
        </button>
      </div>
      <AssetPhotos />
    </div>
  );
};

export default AssetHome;
