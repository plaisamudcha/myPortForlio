import { CodeXml } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <CodeXml color="yellow" className="w-6 h-6 sm:w-7 sm:h-7" />
      <span className="text-white font-bold text-lg sm:text-xl">Samudcha</span>
    </div>
  );
}

export default Logo;
