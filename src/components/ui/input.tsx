import { cn } from "@/lib/utils";
import { useState } from "react";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

function Input({ className, label, type, placeholder, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className="relative">
      {isFocused && (
        <label
          htmlFor={props.id}
          className={cn(
            "absolute left-3 bottom-6.5 mt-1 text-white bg-background px-1"
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        data-slot="input"
        placeholder={isFocused ? "" : placeholder}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-gray h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:border-white",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </div>
  );
}

export { Input };
