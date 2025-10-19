interface SmallProjectCardProps {
  title?: string;
  description?: string;
  technologies?: string[];
  jsitorUrl?: string;
  githubUrl?: string;
}

function SmallProjectCard({
  title,
  description,
  technologies = [],
  jsitorUrl,
  githubUrl,
}: SmallProjectCardProps) {
  return (
    <div className="flex-1 border border-gray-600 bg-gray-800/50 overflow-hidden hover:border-primary transition-colors">
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
          {jsitorUrl && (
            <a
              href={jsitorUrl}
              className="px-4 py-2 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-colors rounded text-sm inline-block"
            >
              Jsitor &lt;~&gt;
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

export default SmallProjectCard;
