import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";

function DotsButton({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-26 h-26flex flex-col justify-between", {
        ...props,
      })}
    >
      <div className="flex justify-between h-1/5 items-center">
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
      </div>
      <div className="flex justify-between h-1/5 items-center">
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
      </div>
      <div className="flex justify-between h-1/5 items-center">
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
      </div>
      <div className="flex justify-between h-1/5 items-center">
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
      </div>
      <div className="flex justify-between h-1/5 items-center">
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
        <Dot color="#ABB2BF" width="auto" height="auto" />
      </div>
    </div>
  );
}

export default DotsButton;
