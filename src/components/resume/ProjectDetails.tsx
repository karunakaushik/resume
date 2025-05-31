import { ProjectDetailsProps } from "../../constant/types";
import GitHubIcon from "../../constant/GitHubIcon";

const ProjectDetails = ({
  title,
  organization,
  description,
  technologies,
  github,
  link,
}: ProjectDetailsProps) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <div className="text-lg font-medium text-[#111111]">{title}</div>
      <div className="text-base text-[#555555]">{organization}</div>
      {github && (
        <div
          className="flex items-center gap-1 text-sm text-[#555555] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            window.open(link, "_blank");
          }}
        >
          <GitHubIcon />
          Github
        </div>
      )}
    </div>
    <div className="flex flex-col gap-4">
      <div className="text-sm font-bold text-[#111111]">Project Details</div>
      <ul className="list-disc text-sm text-[#555555] ml-4 space-y-2">
        {description.map((desc, idx) => (
          <li key={idx}>{desc}</li>
        ))}
      </ul>
    </div>
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

export default ProjectDetails;
