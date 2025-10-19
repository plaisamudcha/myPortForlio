import SkillCard from "@/components/SkillCard";
import myImage from "../assets/myImage.png";
import FunFactCard from "@/components/FunFactCard";
import { MYFUNFACT } from "@/lib/myFunFact";
import { MYSKILLCARD } from "@/lib/myskillCard";

function AboutPage() {
  return (
    <div className="py-10">
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl text-white mb-2">
          <span className="text-primary">/</span>about-me
        </h1>
        <p className="text-gray">Who am I?</p>
      </div>
      <div className="flex justify-between items-start h-100">
        <p className="flex-1 text-gray indent-5 text-justify pr-8">
          I graduated with a degree in Civil Engineering, which provided me with
          a strong foundation in mathematics, analytical thinking, and logical
          reasoning. Through both my academic and professional experiences, I
          have developed a keen ability to approach problems systematically and
          solve them efficiently. Driven by my passion for problem-solving and
          structured thinking, I began to pursue programming seriously. I am now
          working toward becoming a Full-Stack Developer, as I enjoy both system
          architecture and hands-on development across the Frontend and Backend.
          My analytical mindset allows me to quickly grasp program logic, data
          structures, and complex problem-solving.
        </p>
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-80 h-120 overflow-hidden">
            <img
              src={myImage}
              alt="myProfileImage"
              className="w-full h-full object-cover object-top absolute bottom-30 left-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-40">
        <h1 className="text-3xl text-white mb-5">
          <span className="text-primary">#</span>skills
        </h1>
        <div className="flex justify-between gap-4">
          {MYSKILLCARD.map((skill, index) => (
            <SkillCard key={index} name={skill.NAME} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-10">
        <h1 className="text-3xl text-white mb-5">
          <span className="text-primary">#</span>my-fun-facts
        </h1>
        <div className="flex w-2/3 flex-wrap gap-4">
          {MYFUNFACT.map((fact) => (
            <FunFactCard key={fact.NUMBER} detail={fact.FACT} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
