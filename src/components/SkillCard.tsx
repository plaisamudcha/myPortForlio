import { MYSKILLCARD } from "@/lib/myskillCard";

function SkillCard({ name }: { name: string }) {
  return (
    <div className="flex-1 border border-gray">
      <p className="p-2  text-white">
        {MYSKILLCARD.find((card) => card.NAME === name)?.NAME}
      </p>
      <hr className="border-gray" />
      <p className="text-gray p-2">
        {MYSKILLCARD.find((card) => card.NAME === name)?.DETAILS}
      </p>
    </div>
  );
}

export default SkillCard;
