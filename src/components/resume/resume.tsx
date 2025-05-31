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
    <div className="flex min-h-screen w-full flex-col gap-4 overflow-y-auto bg-white px-4 py-6 sm:px-6 md:px-8 lg:px-[62px] lg:py-[82px]">
      <div className="mx-auto w-full max-w-[600px]">
        {/* Profile Section */}
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <div
            className="h-20 w-20 shrink-0 rounded-full sm:h-[92px] sm:w-[92px]"
            style={{
              backgroundImage: `url(${profilepic.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <h2 className="text-xl font-bold text-[#111111] sm:text-2xl">
              {personalInfo.name}
            </h2>
            <h2 className="text-sm font-medium text-[#555555]">
              {personalInfo.title}
            </h2>
            <div className="flex gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 rounded-full p-1.5 text-xs transition-colors hover:bg-[#EAEAEA]">
                  <LinkedInIcon />
                </div>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-1 rounded-full p-1.5 text-xs transition-colors hover:bg-[#EAEAEA]">
                  <GitHubIcon />
                </div>
              </a>
              <button onClick={handleResumeClick} className="cursor-pointer">
                <div className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs transition-colors hover:bg-[#EAEAEA]">
                  Resume
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-bold text-[#111111]">About</h3>
          <p className="text-sm font-medium text-[#555555]">
            {personalInfo.about}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">Skills</h3>
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
                      className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-xs text-[#555555] sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">Experience</h3>
          <div className="flex flex-col gap-6">
            <div className="text-sm font-medium text-[#555555]">Full Time</div>
            <div className="flex flex-col gap-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-lg p-3 transition-colors hover:bg-[#F5F5F5]"
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
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <div className="text-sm text-[#555555] sm:w-[140px]">
                      {exp.duration}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="hover:underline text-sm font-medium text-[#111111] group-hover:text-[#555555] inline-flex items-center">
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
          <div className="mt-6">
            <div className="mb-4 text-sm font-medium text-[#555555]">
              Internships
            </div>
            <div className="flex flex-col gap-6">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-lg p-3 transition-colors hover:bg-[#F5F5F5]"
                  onClick={() =>
                    setSelectedInternship({
                      title: internship.title,
                      company: internship.company,
                      location: internship.location,
                      responsibilities: internship.responsibilities,
                    })
                  }
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                    <div className="text-sm text-[#555555] sm:w-[140px]">
                      {internship.duration}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="hover:underline text-sm font-medium text-[#111111] group-hover:text-[#555555] inline-flex items-center">
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

        {/* Projects Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">
            Side Projects
          </h3>
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer rounded-lg p-3 transition-colors hover:bg-[#F5F5F5]"
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
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <div className="text-sm text-[#555555] sm:w-[140px]">
                    {project.duration}
                  </div>
                  <div className="flex flex-col gap-1">
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

        {/* Education Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">Education</h3>
          <div className="flex flex-col gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 sm:flex-row sm:gap-8"
              >
                <div className="text-sm text-[#555555] sm:w-[140px]">
                  {edu.duration}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-sm font-medium text-[#111111]">
                    {edu.degree}
                  </div>
                  <div className="text-sm text-[#555555]">
                    {edu.institution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">Achievement</h3>
          <ul className="ml-4 space-y-2 list-disc text-sm text-[#555555]">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm font-medium">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold text-[#111111]">
            Languages Known
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <div
                key={index}
                className="rounded-full bg-[#F5F5F5] px-3 py-1.5 text-xs sm:text-sm"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
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
