import Job from "../component/Job";
import { experiences, education } from "../../data";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36"
    >
      <h1 className="text-center text-5xl font-light">
        Experience & Education
      </h1>

      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          {education.map((exp, index) => (
            <div className="flex-1" key={index}>
              <Job
                title={exp.title}
                company={exp.company}
                date={exp.date}
                description={exp.description}
              />
            </div>
          ))}
        </div>
        <div className="flex-1">
          {experiences.map((exp, index) => (
            <div className="flex-1" key={index}>
              <Job
                title={exp.title}
                company={exp.company}
                date={exp.date}
                description={exp.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
