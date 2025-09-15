import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import image from "../../public/img/image.png";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
          <img
            src={image}
            alt=""
            className="w-[250px] sm:w-[300px] rounded-full"
          />

          <div className="space-y-1 sm:space-y-3">
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
              Bedar Azeddine
            </h1>
            <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
              Web Developer
            </h3>
            <p className="max-w-[500px] text-sm text-gray-500">
              MERN Stack Developer | React, Node.js, Express, MongoDB | Frontend
              & Backend Web Development.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-3">
            <a href="https://github.com/AzeddineBd" target="_blank">
              <BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-black p-2 text-white transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/azeddine-bedar-120945172/"
              target="_blank"
            >
              <BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-black p-2 text-white transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12" />
            </a>
            <a href="https://www.facebook.com/azze.dine.134219" target="_blank">
              <BiLogoFacebook className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-black p-2 text-white transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12" />
            </a>
            <a href="https://x.com/ABedar27931" target="_blank">
              <FaXTwitter className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-black p-2 text-white transition-all duration-200 hover:scale-110 hover:border-black hover:bg-white hover:text-black md:h-12 md:w-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
