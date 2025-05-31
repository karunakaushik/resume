import { ExperienceDetailsProps } from "../../constant/types";

const ExperienceDetails = ({
  title,
  company,
  location,
  responsibilities,
  technologies,
}: ExperienceDetailsProps) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <div className="text-lg font-medium text-[#111111]">{title}</div>
      <div className="text-base text-[#555555]">
        {company}, {location}
      </div>
    </div>
    {responsibilities && (
      <div className="flex flex-col gap-4">
        <div className="text-sm font-bold text-[#111111]">Responsibilities</div>
        <ul className="list-disc text-sm text-[#555555] ml-4 space-y-2">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx}>{responsibility}</li>
          ))}
        </ul>
      </div>
    )}
    {technologies && (
      <div className="flex flex-col gap-4">
        <div className="text-sm font-bold text-[#111111]">
          Technologies Used
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#F5F5F5] rounded-full text-sm text-[#555555]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ExperienceDetails;
