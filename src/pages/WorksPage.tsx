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
    <div className="py-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl text-white mb-2">
          <span className="text-primary">/</span>projects
        </h1>
        <p className="text-gray"> List of my projects</p>
      </div>
      <div className="flex flex-col mb-20">
        <h1 className="text-3xl text-white mb-5">
          <span className="text-primary">#</span>my-works-and-complete-apps
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <CompleteAppCard
            title="Portfolio"
            description="My portfolio website to showcase my skills, projects, and experiences as a developer."
            technologies={["React", "TypeScript", "Tailwind CSS"]}
            imageUrl={portForlioProject}
            githubUrl={MYPROJECTGITHUB.PORTFOLIO}
          />
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
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl text-white mb-5">
          <span className="text-primary">#</span>small-and-fun-projects
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <SmallProjectCard
            title="Wordle game"
            description="A simple word guessing game inspired by the popular Wordle game."
            technologies={["HTML", "CSS", "JavaScript", "React"]}
            jsitorUrl={MYSMALLPROJECTJSITOR.WORDLE}
          />
          <SmallProjectCard
            title="Multi Counter"
            description="A multi-counter application that allows users to create and manage multiple counters."
            technologies={["HTML", "CSS", "JavaScript", "React"]}
            jsitorUrl={MYSMALLPROJECTJSITOR.MULTI_COUTER}
          />
          <SmallProjectCard
            title="NestJS E-commerce"
            description="A full-featured e-commerce application built with NestJS."
            technologies={["NestJS", "TypeScript", "PostgreSQL"]}
            githubUrl={MYSMALLPROJECTGITHUB.NESTJS_ECOMMERCE}
          />
          <SmallProjectCard
            title="NestJS Blog"
            description="A simple blog application built with NestJS."
            technologies={["NestJS", "TypeScript", "PostgreSQL"]}
            githubUrl={MYSMALLPROJECTGITHUB.NESTJS_BLOG}
          />
          <SmallProjectCard
            title="React TypeScript Starter"
            description="A starter template for building React applications with TypeScript."
            technologies={["React", "TypeScript", "Vite"]}
            githubUrl={MYSMALLPROJECTGITHUB.REACT_TYPESCRIPT}
          />
          <SmallProjectCard
            title="Express TypeScript Starter"
            description="A starter template for building Express applications with TypeScript."
            technologies={["Express", "TypeScript", "Node.js"]}
            githubUrl={MYSMALLPROJECTGITHUB.EXPRESS_TYPESCRIPT}
          />
          <SmallProjectCard
            title="Product Catalog"
            description="A simple product catalog application."
            technologies={["HTML", "CSS", "JavaScript", "React"]}
            jsitorUrl={MYSMALLPROJECTJSITOR.PRODUCT_CATALOG}
          />
          <SmallProjectCard
            title="Topping Calculator"
            description="A topping calculator for customizing food orders."
            technologies={["HTML", "CSS", "JavaScript", "React"]}
            jsitorUrl={MYSMALLPROJECTJSITOR.TOPPING_CALCULATOR}
          />
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
