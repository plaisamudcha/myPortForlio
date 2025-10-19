function SkillCard({ name, details }: { name: string; details: string }) {
  return (
    <div className="flex-1 border border-gray">
      <p className="p-2  text-white">{name}</p>
      <hr className="border-gray" />
      <p className="text-gray p-2">{details}</p>
    </div>
  );
}

export default SkillCard;
