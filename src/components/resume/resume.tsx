import React from "react";
import profilepic from "@/assets/profilepic.jpg";

function Resume() {
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
              Karuna Kumari Kaushik
            </h2>
            <h2 className="text-sm font-medium text-[#555555]">
              Software Engineer at Swivl
            </h2>
            <div className="text-xs px-2 bg-[#F5F5F5] w-fit rounded-full">
              Linkedin
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">About</div>
          <p className="text-sm font-medium text-[#555555]">
            I am a software engineer with a passion for building scalable and
            efficient systems. I am currently working at Swivl as a software
            engineer.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-sm font-bold text-[#111111]">Experience</div>
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-[#555555]">Full Time</div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="text-sm text-[#555555] w-[140px]">
                  Jun 2023 - Current
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">
                      Software Engineer
                    </div>
                    <div className="text-sm text-[#555555]">
                      Swivl, Bangalore
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="text-sm text-[#555555] w-[140px]">
                  Aug 2022 - Jun 2023
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">
                      Software Developer
                    </div>
                    <div className="text-sm text-[#555555]">Genpact, Noida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium text-[#555555]">
              Internships
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="text-sm text-[#555555] w-[140px]">
                  May 2021 - July 2021
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">
                      Software Developer Executive
                    </div>
                    <div className="text-sm text-[#555555]">
                      KocharTech, Gurugram
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="text-sm text-[#555555] w-[140px]">
                  May 2020 - July 2020
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-sm font-medium text-[#111111]">
                      Front-end Developer
                    </div>
                    <div className="text-sm text-[#555555]">Tech-Table</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        {/* <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">
            Languages Known
          </div>
          <div className="flex gap-2">
            <div className="text-sm px-3 py-1 bg-[#F5F5F5] rounded-full">
              English
            </div>
            <div className="text-sm px-3 py-1 bg-[#F5F5F5] rounded-full">
              Hindi
            </div>
          </div>
        </div> */}

        {/* Projects Section */}
        <div className="flex flex-col gap-6">
          <div className="text-sm font-bold text-[#111111]">Side Projects</div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div className="text-sm text-[#555555] w-[140px]">
                Nov 2020 - Dec 2020
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-sm font-medium text-[#111111]">
                    Perfect Parking Lot Application
                  </div>
                  <div className="text-sm text-[#555555]">InOut 7.0</div>
                  <div className="flex items-center gap-1 text-sm text-[#555555]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-sm text-[#555555] w-[140px]">
                Jun 2020 - Aug 2020
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-sm font-medium text-[#111111]">
                    ENTERTAIN-THE-CREW
                  </div>
                  <div className="text-sm text-[#555555]">
                    Microsoft Codess India
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#555555]">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Github
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-sm font-bold text-[#111111]">Education</div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div className="text-sm text-[#555555] w-[140px]">
                June 2018 - July 2022
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-sm font-medium text-[#111111]">
                    Bachelor of Technology
                  </div>
                  <div className="text-sm text-[#555555]">
                    Indian Institute of Technology, Roorkee
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-sm text-[#555555] w-[140px]">
                2015 - 2017
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <div className="text-sm font-medium text-[#111111]">
                    Intermediate, Science
                  </div>
                  <div className="text-sm text-[#555555]">
                    Ashok Inter School Daudnagar, Aurangabad (Bihar)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
