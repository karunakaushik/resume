"use client";

import React, { useState } from "react";
import Modal from "../Modal";
import ExperienceDetails from "./ExperienceDetails";
import InternshipDetails from "./InternshipDetails";
import ProjectDetails from "./ProjectDetails";
import GitHubIcon from "../../constant/GitHubIcon";
import LinkedInIcon from "../../constant/LinkedInIcon";
import ExternalLinkArrow from "../../constant/ExternalLinkArrow";
import {
  ExperienceDetailsProps,
  InternshipDetailsProps,
  ProjectDetailsProps,
} from "../../constant/types";
import profilepic from "@/assets/profilepic.jpg";

import { resumeData } from "@/constant/data/resumeData";

function Resume() {
  const {
    personalInfo,
    experience,
    internships,
    projects,
    education,
    languages,
    achievements,
    skills,
  } = resumeData;
  const [selectedExp, setSelectedExp] = useState<ExperienceDetailsProps | null>(
    null
  );
  const [selectedInternship, setSelectedInternship] =
    useState<InternshipDetailsProps | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<ProjectDetailsProps | null>(null);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(personalInfo.resumePdf, "_blank");
  };

  return (
    <div className="flex w-[100vw] items-center h-[100vh] justify-start py-[82px] px-[62px] flex-col gap-4 overflow-y-auto">
      <div className="flex flex-col gap-4 w-[600px]">
        <div className="flex gap-4 h-fit items-center pb-[50px]">
          <div
            className="w-[92px] h-[92px] rounded-full"
            style={{
              backgroundImage: `url(${profilepic.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-[#111111]">
              {personalInfo.name}
            </h2>
            <h2 className="text-sm font-medium text-[#555555]">
              {personalInfo.title}
            </h2>
            <div className="flex gap-2 items-center">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 text-xs  w-fit rounded-full hover:bg-[#EAEAEA] transition-colors">
                  <LinkedInIcon />
                </div>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 text-xs  w-fit rounded-full hover:bg-[#EAEAEA] transition-colors">
                  <GitHubIcon />
                </div>
              </a>
              <button onClick={handleResumeClick} className="cursor-pointer">
                <div className="flex items-center px-2 py-1 gap-1 text-xs w-fit rounded-full hover:bg-[#EAEAEA] transition-colors">
                  Resume
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">About</div>
          <p className="text-sm font-medium text-[#555555]">
            {personalInfo.about}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">Skills</div>
          <div className="flex flex-col gap-6">
            {skills.map((skillCategory, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="text-sm font-medium text-[#555555]">
                  {skillCategory.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="text-sm px-3 py-1 bg-[#F5F5F5] rounded-full text-[#555555]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-sm font-bold text-[#111111]">Experience</div>
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-[#555555]">Full Time</div>
            <div className="flex flex-col gap-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="flex gap-8 cursor-pointer hover:bg-[#F5F5F5] p-2 rounded-lg transition-colors"
                  onClick={() =>
                    setSelectedExp({
                      title: exp.title,
                      company: exp.company,
                      location: exp.location,
                      responsibilities: exp.responsibilities,
                      technologies: exp.technologies,
                    })
                  }
                >
                  <div className="text-sm text-[#555555] w-[140px]">
                    {exp.duration}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="text-sm hover:underline  font-medium text-[#111111] group-hover:text-[#555555] inline-flex items-center">
                        {exp.title}
                        <ExternalLinkArrow />
                      </div>
                      <div className="text-sm text-[#555555]">
                        {exp.company}, {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-[#555555]">
              Internships
            </div>
            <div className="flex flex-col gap-8">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="flex gap-8 cursor-pointer hover:bg-[#F5F5F5] p-2 rounded-lg transition-colors"
                  onClick={() =>
                    setSelectedInternship({
                      title: internship.title,
                      company: internship.company,
                      location: internship.location,
                      responsibilities: internship.responsibilities,
                    })
                  }
                >
                  <div className="text-sm text-[#555555] w-[140px]">
                    {internship.duration}
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <div className="text-sm hover:underline  font-medium text-[#111111] group-hover:text-[#555555] inline-flex items-center">
                        {internship.title}
                        <ExternalLinkArrow />
                      </div>
                      <div className="text-sm text-[#555555]">
                        {internship.company}
                        {internship.location && `, ${internship.location}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="text-sm font-bold text-[#111111]">Side Projects</div>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex gap-8 cursor-pointer hover:bg-[#F5F5F5] p-2 rounded-lg transition-colors"
                onClick={() =>
                  setSelectedProject({
                    title: project.title,
                    organization: project.organization,
                    description: project.description,
                    technologies: project.technologies,
                    github: project.github,
                    link: project.link,
                  })
                }
              >
                <div className="text-sm text-[#555555] w-[140px]">
                  {project.duration}
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="hover:underline text-sm font-medium text-[#111111] group-hover:text-[#555555] inline-flex items-center">
                      {project.title}
                      <ExternalLinkArrow />
                    </div>
                    <div className="text-sm text-[#555555]">
                      {project.organization}
                    </div>
                    {project.github && (
                      <div
                        className="flex items-center gap-1 text-sm text-[#555555]"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                      >
                        <GitHubIcon />
                        Github
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">Education</div>
          <div className="flex flex-col gap-8">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-8">
                <div className="text-sm text-[#555555] w-[140px]">
                  {edu.duration}
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">
                      {edu.degree}
                    </div>
                    <div className="text-sm text-[#555555]">
                      {edu.institution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">Achievement</div>
          <ul className="list-disc text-sm text-[#555555] ml-4 space-y-2">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm font-medium">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">
            Languages Known
          </div>
          <div className="flex gap-2">
            {languages.map((language, index) => (
              <div
                key={index}
                className="text-sm px-3 py-1 bg-[#F5F5F5] rounded-full"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title="Experience Details"
      >
        {selectedExp && <ExperienceDetails {...selectedExp} />}
      </Modal>

      <Modal
        isOpen={!!selectedInternship}
        onClose={() => setSelectedInternship(null)}
        title="Internship Details"
      >
        {selectedInternship && <InternshipDetails {...selectedInternship} />}
      </Modal>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title="Project Details"
      >
        {selectedProject && <ProjectDetails {...selectedProject} />}
      </Modal>
    </div>
  );
}

export default Resume;
