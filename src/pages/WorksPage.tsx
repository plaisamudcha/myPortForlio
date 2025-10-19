import CompleteAppCard from "@/components/CompleteAppCard";
import portForlioProject from "@/assets/portForlioProject.png";
import {
  MYPROJECTGITHUB,
  MYSMALLPROJECTGITHUB,
  MYSMALLPROJECTJSITOR,
} from "@/lib/myProjectGitHub";
import TTT from "@/assets/TTT.png";
import myPersonalProjectImage from "@/assets/myPersonalProject.png";
import HR from "@/assets/HR.png";
import SmallProjectCard from "@/components/SmallProjectCard";

function WorksPage() {
  return (
    <div className="py-6 md:py-10 px-4 md:px-0">
      <div className="flex flex-col mb-8 md:mb-10">
        <h1 className="text-2xl md:text-3xl text-white mb-2 text-center md:text-left">
          <span className="text-primary">/</span>projects
        </h1>
        <p className="text-gray text-center md:text-left">
          List of my projects
        </p>
      </div>

      <div className="flex flex-col mb-16 md:mb-20">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-8 text-center md:text-left">
          <span className="text-primary">#</span>my-works-and-complete-apps
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <CompleteAppCard
              title="Portfolio"
              description="My portfolio website to showcase my skills, projects, and experiences as a developer."
              technologies={["React", "TypeScript", "Tailwind CSS"]}
              imageUrl={portForlioProject}
              githubUrl={MYPROJECTGITHUB.PORTFOLIO}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <CompleteAppCard
              title="TTT (โครงการไทยเที่ยวไทย)"
              description="A comprehensive travel platform designed to enhance the travel experience for users in Thailand by providing detailed information on destinations, accommodations, and activities."
              technologies={[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "NestJS",
                "PostgreSQL",
              ]}
              imageUrl={TTT}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <CompleteAppCard
              title="Hospital Management System"
              description="A web application for my personal project for managing hospital operations, including patient records, appointments, and billing."
              technologies={[
                "React",
                "Javascript",
                "Tailwind CSS",
                "ExpressJs",
                "mySQL",
                "Docker",
                "Kubernetes",
              ]}
              imageUrl={myPersonalProjectImage}
              githubUrl={MYPROJECTGITHUB.PERSONALPROJECT}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
            <CompleteAppCard
              title="HR Management System"
              description="A web application for my group project for managing HR operations, including employee records, attendance, and payroll."
              technologies={[
                "React",
                "Javascript",
                "Tailwind CSS",
                "ExpressJs",
                "mySQL",
              ]}
              imageUrl={HR}
              githubUrl={MYPROJECTGITHUB.GROUPPROJECT}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white mb-6 md:mb-8 text-center md:text-left">
          <span className="text-primary">#</span>small-and-fun-projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="Wordle game"
              description="A simple word guessing game inspired by the popular Wordle game."
              technologies={["HTML", "CSS", "JavaScript", "React"]}
              jsitorUrl={MYSMALLPROJECTJSITOR.WORDLE}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="Multi Counter"
              description="A multi-counter application that allows users to create and manage multiple counters."
              technologies={["HTML", "CSS", "JavaScript", "React"]}
              jsitorUrl={MYSMALLPROJECTJSITOR.MULTI_COUTER}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="NestJS E-commerce"
              description="A full-featured e-commerce application built with NestJS."
              technologies={["NestJS", "TypeScript", "PostgreSQL"]}
              githubUrl={MYSMALLPROJECTGITHUB.NESTJS_ECOMMERCE}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="NestJS Blog"
              description="A simple blog application built with NestJS."
              technologies={["NestJS", "TypeScript", "PostgreSQL"]}
              githubUrl={MYSMALLPROJECTGITHUB.NESTJS_BLOG}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="React TypeScript Starter"
              description="A starter template for building React applications with TypeScript."
              technologies={["React", "TypeScript", "Vite"]}
              githubUrl={MYSMALLPROJECTGITHUB.REACT_TYPESCRIPT}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="Express TypeScript Starter"
              description="A starter template for building Express applications with TypeScript."
              technologies={["Express", "TypeScript", "Node.js"]}
              githubUrl={MYSMALLPROJECTGITHUB.EXPRESS_TYPESCRIPT}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="Product Catalog"
              description="A simple product catalog application."
              technologies={["HTML", "CSS", "JavaScript", "React"]}
              jsitorUrl={MYSMALLPROJECTJSITOR.PRODUCT_CATALOG}
            />
          </div>
          <div className="hover:transform hover:scale-105 transition-transform duration-300">
            <SmallProjectCard
              title="Topping Calculator"
              description="A topping calculator for customizing food orders."
              technologies={["HTML", "CSS", "JavaScript", "React"]}
              jsitorUrl={MYSMALLPROJECTJSITOR.TOPPING_CALCULATOR}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
