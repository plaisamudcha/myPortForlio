import SkillCard from "@/components/SkillCard";
import myImage from "../assets/myImage.png";
import FunFactCard from "@/components/FunFactCard";
import { MYFUNFACT } from "@/lib/myFunFact";
import { MYSKILLCARD } from "@/lib/myskillCard";

function AboutPage() {
  return (
    <div className="py-6 md:py-10 px-4 md:px-0">
      <div className="flex flex-col mb-8 md:mb-10">
        <h1 className="text-2xl md:text-3xl text-white mb-2 text-center md:text-left">
          <span className="text-primary">/</span>about-me
        </h1>
        <p className="text-gray text-center md:text-left">Who am I?</p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0 mb-16 md:mb-20">
        <div className="flex-1 order-2 lg:order-1">
          <p className="text-gray text-justify lg:pr-8 leading-relaxed">
            I graduated with a degree in Civil Engineering, which provided me
            with a strong foundation in mathematics, analytical thinking, and
            logical reasoning. Through both my academic and professional
            experiences, I have developed a keen ability to approach problems
            systematically and solve them efficiently. Driven by my passion for
            problem-solving and structured thinking, I began to pursue
            programming seriously. I am now working toward becoming a Full-Stack
            Developer, as I enjoy both system architecture and hands-on
            development across the Frontend and Backend. My analytical mindset
            allows me to quickly grasp program logic, data structures, and
            complex problem-solving.
          </p>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center relative order-1 lg:order-2">
          <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-80 lg:h-120 overflow-hidden rounded-lg shadow-2xl">
            <img
              src={myImage}
              alt="myProfileImage"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-16 md:mb-20">
        <h1 className="text-2xl md:text-3xl text-white mb-6 md:mb-8 text-center md:text-left">
          <span className="text-primary">#</span>skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {MYSKILLCARD.map((skill, index) => (
            <div
              key={index}
              className="hover:transform hover:scale-105 transition-transform duration-300"
            >
              <SkillCard name={skill.NAME} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mb-10">
        <h1 className="text-2xl md:text-3xl text-white mb-6 md:mb-8 text-center md:text-left">
          <span className="text-primary">#</span>my-fun-facts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-2/3">
          {MYFUNFACT.map((fact) => (
            <div
              key={fact.NUMBER}
              className="hover:transform hover:scale-105 transition-transform duration-300"
            >
              <FunFactCard detail={fact.FACT} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
