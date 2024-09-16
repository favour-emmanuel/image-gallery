import notFoundImage from "../assets/404.jpg";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-[20rem] my-2">
        <img src={notFoundImage} alt="Not Found Image" />
      </div>
      <h1 className="font-bold text-2xl w-full max-w-[35rem] text-center leading-8 mx-auto">
        <span className="font-extrabold text-appCyan text-3xl"> Ooops!</span>{" "}
        Seems like the page you are looking for does not{" "}
        <span className="text-appCyan">exist</span>
      </h1>
    </div>
  );
};

export default NotFoundPage;
