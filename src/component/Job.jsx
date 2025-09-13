const Job = ({ title, company, date, description }) => {
  return (
    <div className="relative space-y-1 border-l-2 p-8 text-left">
      <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
      <p className="font-light text-lg text-gray-600">{company}</p>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <span className="absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-black"></span>
    </div>
  );
};

export default Job;
