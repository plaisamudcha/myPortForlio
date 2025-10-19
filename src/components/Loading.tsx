import { CodeXml } from "lucide-react";

function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background animated dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${1.5 + (i % 3) * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main loading content */}
      <div className="text-center z-10 relative">
        {/* Animated logo */}
        <div className="mb-8 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <CodeXml
                className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute inset-0 animate-ping">
                <CodeXml className="w-16 h-16 sm:w-20 sm:h-20 text-primary opacity-30" />
              </div>
            </div>
          </div>

          {/* Brand name */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 animate-pulse">
            Samudcha Portfolio
          </h1>
        </div>

        {/* Loading animation */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="flex space-x-1">
            <div
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-3 h-3 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <p className="text-gray text-lg animate-pulse">
            Loading amazing experience...
          </p>
          <div className="flex items-center justify-center">
            <div className="text-primary animate-pulse">
              <span className="inline-block animate-pulse">#</span>
              <span className="ml-1 text-gray">preparing portfolio</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-xs mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-purple-400 h-full rounded-full animate-loading-progress" />
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-ping"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent" />
    </div>
  );
}

export default Loading;
