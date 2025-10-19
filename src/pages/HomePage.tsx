import myImage from "../assets/mypicturehome.png";
import CompleteAppCard from "../components/CompleteAppCard";
import SmallProjectCard from "../components/SmallProjectCard";
import SkillCard from "../components/SkillCard";
import LiveButton from "@/components/LiveButton";
import DotsButton from "@/components/DotsButton";
import { MYPROJECTGITHUB, MYSMALLPROJECTGITHUB } from "@/lib/myProjectGitHub";
import portForlioProject from "@/assets/portForlioProject.png";
import aboutImage from "../assets/myImage.png";
import { NavLink } from "react-router";

function HomePage() {
  return (
    <div className="py-6 md:py-10 space-y-12 md:space-y-20 relative overflow-hidden px-4 md:px-0">
      {/* Background decorative dots - hide on mobile */}
      <div className="hidden lg:block absolute top-20 left-10 opacity-10">
        <DotsButton />
      </div>
      <div className="hidden lg:block absolute top-96 right-20 opacity-15">
        <DotsButton />
      </div>
      <div className="hidden lg:block absolute bottom-40 left-1/4 opacity-5">
        <DotsButton />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center relative z-10 gap-8 lg:gap-0">
        <div className="flex-1 relative order-2 lg:order-1">
          {/* Decorative element behind text - hide on mobile */}
          <div className="hidden lg:block absolute -top-10 -left-10 opacity-20">
            <DotsButton />
          </div>
          <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl mb-4 relative z-10 text-center lg:text-left">
            My name is Samudcha(pai) is a{" "}
            <span className="text-primary">full-stack developer</span>
          </h1>
          <p className="text-gray mb-6 relative z-10 text-center lg:text-left">
            I craft responsive websites where technologies
            <br className="hidden sm:block" />
            meet creativity
          </p>
          <div className="relative z-10 flex justify-center lg:justify-start">
            <LiveButton name="Contact me!!" />
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2">
          {/* Decorative frame around image - hide on mobile */}
          <div className="hidden lg:block absolute top-4 right-4 w-80 h-80 border border-primary opacity-20"></div>
          <div className="relative group flex items-center justify-center">
            <img
              src={myImage}
              alt="Profile - Samudcha Daengtubtim, Full-stack Developer"
              className="w-64 h-64 sm:w-80 sm:h-80 
                         object-cover object-center
                         relative z-10 
                         rounded-xl lg:rounded-2xl
                         shadow-2xl hover:shadow-primary/30 
                         transition-all duration-700 ease-out
                         hover:scale-110 hover:rotate-2
                         border-4 border-gray-600/50 hover:border-primary/70
                         filter hover:brightness-115 hover:contrast-115
                         group-hover:drop-shadow-[0_0_25px_rgba(199,120,221,0.4)]
                         mx-auto
                         ring-2 ring-primary/20 hover:ring-primary/50
                         transform-gpu
                         backdrop-blur-sm"
              loading="lazy"
              onLoad={() => console.log("Profile image loaded successfully")}
              onError={(e) => {
                console.error("Failed to load profile image");
                e.currentTarget.style.backgroundColor = "#374151";
                e.currentTarget.style.display = "flex";
                e.currentTarget.style.alignItems = "center";
                e.currentTarget.style.justifyContent = "center";
                e.currentTarget.innerHTML = `
                  <div class="text-gray-400 text-center">
                    <svg class="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                    </svg>
                    <p class="text-sm">Image not found</p>
                  </div>
                `;
              }}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
              <div className="bg-gray-800 border border-gray-600 px-2 sm:px-3 py-1 sm:py-2 flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-gray text-xs sm:text-sm">
                  Currently working on Portfolio
                </span>
              </div>
            </div>
          </div>
          {/* Additional decorative dots - hide on mobile */}
          <div className="hidden lg:block absolute -bottom-10 -right-5 opacity-10">
            <DotsButton />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border border-gray-600 p-4 sm:p-6 lg:p-8 relative bg-gray-900/30 backdrop-blur-sm">
        <div className="absolute top-0 left-4 sm:left-8 transform -translate-y-1/2 bg-background px-2">
          <span className="text-primary text-lg">#</span>
        </div>
        {/* Decorative corner elements */}
        <div className="absolute top-2 right-2 opacity-30">
          <div className="w-4 h-4 border-t border-r border-primary"></div>
        </div>
        <div className="absolute bottom-2 left-2 opacity-30">
          <div className="w-4 h-4 border-b border-l border-primary"></div>
        </div>
        <blockquote className="text-white text-center text-lg sm:text-xl relative z-10">
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts."
        </blockquote>
        <div className="text-center sm:text-right mt-4 relative z-10">
          <cite className="text-gray">— Winston Churchill</cite>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative">
        {/* Background decoration - hide on mobile */}
        <div className="hidden lg:block absolute -top-10 left-1/3 opacity-5">
          <DotsButton />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 relative z-10 gap-4 sm:gap-0">
          <h2 className="text-white text-xl sm:text-2xl text-center sm:text-left">
            <span className="text-primary">#</span>projects
          </h2>
          <NavLink
            to="/works"
            className="text-white hover:text-primary transition-colors duration-300 hover:underline text-center sm:text-right"
          >
            View all ~~&gt;
          </NavLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          <div className="relative lg:col-span-1">
            {/* Subtle glow effect behind card */}
            <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl"></div>
            <CompleteAppCard
              title="Portfolio"
              description="My portfolio website to showcase my skills, projects, and experiences as a developer."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              imageUrl={portForlioProject}
              githubUrl={MYPROJECTGITHUB.PORTFOLIO}
            />
          </div>

          <div className="space-y-4 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0 lg:space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/3 rounded-lg blur-lg"></div>
              <SmallProjectCard
                title="NestJS E-commerce"
                description="A full-featured e-commerce application built with NestJS."
                technologies={["NestJS", "TypeScript", "PostgreSQL"]}
                githubUrl={MYSMALLPROJECTGITHUB.NESTJS_ECOMMERCE}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/3 rounded-lg blur-lg"></div>
              <SmallProjectCard
                title="React TypeScript Starter"
                description="A starter template for building React applications with TypeScript."
                technologies={["React", "TypeScript", "Vite"]}
                githubUrl={MYSMALLPROJECTGITHUB.REACT_TYPESCRIPT}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0">
          <div className="flex-1 relative">
            <h2 className="text-white text-xl sm:text-2xl mb-6 sm:mb-8 text-center lg:text-left">
              <span className="text-primary">#</span>skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              <div className="hover:transform hover:scale-105 transition-transform duration-300">
                <SkillCard name="Languages" />
              </div>
              <div className="hover:transform hover:scale-105 transition-transform duration-300">
                <SkillCard name="Databases" />
              </div>
              <div className="hover:transform hover:scale-105 transition-transform duration-300">
                <SkillCard name="Tools" />
              </div>
              <div className="hover:transform hover:scale-105 transition-transform duration-300">
                <SkillCard name="Others" />
              </div>
              <div className="hover:transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <SkillCard name="Frameworks" />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-end relative">
            {/* Enhanced decorative pattern */}
            <div className="w-80 h-80 flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10">
                <DotsButton />
              </div>
              <div className="absolute inset-8 opacity-20 transform rotate-45">
                <DotsButton />
              </div>
              <div className="grid grid-cols-5 gap-2 opacity-30 relative z-10">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 border border-primary rounded-sm animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative">
        <div className="hidden lg:block absolute top-10 right-1/4 opacity-5">
          <DotsButton />
        </div>
        <h2 className="text-white text-xl sm:text-2xl mb-6 sm:mb-8 relative z-10 text-center lg:text-left">
          <span className="text-primary">#</span>about-me
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start relative z-10 gap-8 lg:gap-0">
          <div className="flex-1 lg:pr-8 relative order-2 lg:order-1">
            <p className="text-gray mb-4">Hello, I'm Samudcha!</p>
            <p className="text-gray mb-4">
              I'm a self-taught full-stack developer. I can develop responsive
              websites from scratch and raise them into modern user-friendly web
              experiences.
            </p>
            <p className="text-gray mb-6">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <div className="flex justify-center lg:justify-start">
              <NavLink
                to="/contact"
                className="px-4 py-2 border border-primary text-primary hover:bg-primary cursor-pointer hover:text-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Read more -&gt;
              </NavLink>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative order-1 lg:order-2">
            {/* Decorative frame - hide on mobile */}
            <div className="hidden lg:block absolute top-4 left-4 w-80 h-80 border border-primary/20 rounded-lg"></div>
            <div className="w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-lg relative z-10 shadow-2xl">
              <img
                src={aboutImage}
                alt="About me"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="relative">
        <div className="hidden lg:block absolute bottom-0 left-10 opacity-10">
          <DotsButton />
        </div>
        <h2 className="text-white text-xl sm:text-2xl mb-6 sm:mb-8 relative z-10 text-center lg:text-left">
          <span className="text-primary">#</span>contacts
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start relative z-10 gap-8 lg:gap-0">
          <div className="flex-1 relative text-center lg:text-left">
            <p className="text-gray mb-6">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Enhanced contact card with glow effect */}
            <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl"></div>
            <div className="border border-gray-600 p-4 sm:p-6 bg-gray-800/70 backdrop-blur-sm rounded-lg relative z-10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 w-full max-w-sm">
              <h3 className="text-white mb-4 flex items-center justify-center lg:justify-start">
                <span className="text-primary mr-2">#</span>
                Message me here
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group justify-center lg:justify-start">
                  <span className="text-primary text-lg">📧</span>
                  <span className="text-gray group-hover:text-white transition-colors text-sm sm:text-base break-all">
                    plai_samudcha@hotmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 group justify-center lg:justify-start">
                  <span className="text-primary text-lg">💬</span>
                  <span className="text-gray group-hover:text-white transition-colors">
                    @paisamudcha
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
