import { IoIosArrowRoundForward } from "react-icons/io";

const ProjectCard = ({ img, title, teck, description, url }) => {
  return (
    <div className="text-left space-y-2 border-2 hover:scale-105 transition-all duration-200 cursor-pointer px-8 py-10 border-black rounded-lg hover:bg-gray-50 relative">
      <img src={img} alt={title} className="rounded-lg shadow-lg" />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <h3 className="text-xl text-gray-700">{teck}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        href={url}
        target="_blank"
        className="flex items-center underline absolute bottom-4"
      >
        <p className="">Source Code</p>
        <IoIosArrowRoundForward className="-rotate-45 " />
      </a>
    </div>
  );
};

export default ProjectCard;
