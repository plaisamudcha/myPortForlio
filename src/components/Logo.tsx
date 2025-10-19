import logo from "@/assets/letter-p.png";

function Logo() {
  return (
    <div className="flex gap-3">
      <img src={logo} alt="Logo" className="w-8 h-8" />
      <span className="text-white font-bold text-xl">Samudcha</span>
    </div>
  );
}

export default Logo;
