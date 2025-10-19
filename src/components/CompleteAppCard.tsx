interface CompleteAppCardProps {
  title?: string;
  description?: string;
  technologies?: string[];
  liveUrl?: string;
  imageUrl?: string;
  githubUrl?: string;
}

function CompleteAppCard({
  title = "ChertNodes",
  description = "Minecraft servers hosting",
  technologies = ["HTML", "SCSS", "Python", "Flask"],
  liveUrl,
  imageUrl,
  githubUrl,
}: CompleteAppCardProps) {
  return (
    <div className="flex-1 border border-gray-600 bg-gray-800/50 overflow-hidden hover:border-primary transition-colors">
      {/* Image */}
      <div className="h-48 bg-gray-700 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              className="px-4 py-2 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-colors rounded text-sm inline-block"
            >
              Live &lt;~&gt;
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 transition-colors rounded text-sm"
            >
              GitHub &gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompleteAppCard;
