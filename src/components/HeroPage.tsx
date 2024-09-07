import { Icon } from "@iconify/react/dist/iconify.js";

const HeroPage = () => {
  return (
    <div className="hero_bg">
      <div className="h-full w-full bg-black/60  absolute text-white">
        <div className="flex flex-col justify-center h-full items-center">
          <h1 className=" text-3xl font-bold w-full max-w-[40rem] flex justify-center">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </h1>
          <div className="flex justify-between items-center bg-appWhite px-2 py-3 rounded-lg w-full max-w-[33rem]">
            <div className="text-appGray flex items-center gap-4 w-full max-w-[30rem]">
              <div className="text-xl flex items-center gap-2">
                <Icon icon="system-uicons:picture" className="text-appBlack" />
                <h3 className="text-base">Photos</h3>
              </div>
              <input
                type="search"
                placeholder="Search for free photos"
                className="text-appGray bg-transparent text-lg font-semibold outline-none w-full"
              />
            </div>
            <h1 className="text-appGray text-2xl cursor-pointer hover:text-appCyan">
              <Icon icon="ant-design:search-outlined" />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
