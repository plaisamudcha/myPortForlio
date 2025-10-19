import github from "@/assets/github.png";
import facebook from "@/assets/facebook.png";
import line from "@/assets/line.png";
import { MYURL } from "@/lib/myUrl";

function Footer() {
  return (
    <div className="flex flex-col p-5 gap-8 border-t border-gray">
      <div className="flex justify-between">
        <div className="text-white space-y-2">
          <p>
            Samudcha Daengtubtim - &nbsp;&nbsp;&nbsp;
            <span className="text-gray">plai_samudcha@hotmail.com</span>
          </p>
          <p>
            Web designer, Fullstack developer, front-end developer and back-end
            developer
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-white">Media</p>
          <div className="flex space-x-3">
            <a href={MYURL.GITHUB} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-6 h-6" />
            </a>
            <a href={MYURL.FACEBOOK} target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" className="w-6 h-6" />
            </a>
            <a href={MYURL.LINE} target="_blank" rel="noopener noreferrer">
              <img src={line} alt="line" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-gray text-center">
        © 2025 My Portfolio. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
