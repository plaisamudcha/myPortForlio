import { Button } from "./ui/button";

function LiveButton({ name }: { name?: string }) {
  return (
    <Button className="px-3 py-4 bg-background border border-primary rounded-none hover:bg-[#c778dd] hover:cursor-pointer">
      <div className="flex space-x-2">
        <p className="text-lg">{name} &lt;~&gt; </p>
      </div>
    </Button>
  );
}

export default LiveButton;
