import { InternshipDetailsProps } from "../../constant/types";

const InternshipDetails = ({
  title,
  company,
  location,
  responsibilities,
}: InternshipDetailsProps) => (
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <div className="text-lg font-medium text-[#111111]">{title}</div>
      <div className="text-base text-[#555555]">
        {company}
        {location && `, ${location}`}
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
  </div>
);

export default InternshipDetails;
