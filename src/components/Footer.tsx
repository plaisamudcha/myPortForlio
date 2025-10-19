import github from "@/assets/github.png";
import facebook from "@/assets/facebook.png";
import { MYURL } from "@/lib/myUrl";
import { CodeXml, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Decorative top border with gradient */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>

      <div className="flex flex-col p-4 sm:p-6 gap-6 sm:gap-8 border-t border-gray-600/50 bg-gray-900/30 backdrop-blur-sm">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0">
          {/* Left Section - Personal Info */}
          <div className="flex-1 text-white space-y-4 max-w-md">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
              <CodeXml color="#C778DD" className="w-6 h-6" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary">
                Samudcha Daengtubtim
              </h3>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <p className="text-gray-300 flex items-center justify-center lg:justify-start">
                <span className="text-primary mr-2">📧</span>
                <a
                  href="mailto:plai_samudcha@hotmail.com"
                  className="hover:text-primary transition-colors duration-300 text-sm sm:text-base break-all"
                >
                  plai_samudcha@hotmail.com
                </a>
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Web designer, Fullstack developer, front-end developer and
                back-end developer.
                <br className="hidden sm:block" />
                Passionate about creating amazing user experiences.
              </p>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <h4 className="text-white font-medium flex items-center">
              <span className="text-primary mr-2">#</span>
              Connect with me
            </h4>

            <div className="flex space-x-4">
              <a
                href={MYURL.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                title="GitHub"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href={MYURL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                title="Facebook"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href={MYURL.LINE}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                title="LINE"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
          <p className="text-gray-400 flex items-center text-center md:text-left">
            © 2025 My Portfolio. Made with
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
            by Samudcha Daengtubtim
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="text-gray-500 text-xs sm:text-sm">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded text-xs">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-16 bg-primary/3 rounded-full blur-2xl"></div>
    </footer>
  );
}

export default Footer;
