import { Button } from "./ui/button";
import { Play } from "lucide-react";

function DemoButton() {
  return (
    <Button className="px-3 py-4 bg-background border border-gray rounded-none hover:bg-gray hover:cursor-pointer">
      <div className="flex space-x-2 items-center">
        <p className="text-lg">Demo</p>
        <Play />
      </div>
    </Button>
  );
}

export default DemoButton;
