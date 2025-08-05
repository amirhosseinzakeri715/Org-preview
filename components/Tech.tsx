"use client"

const technologies = [
  {
    main: "BLOCKCHAIN",
    border: "border-r border-b border-red-500",
    innerBorder: "border-r border-b border-blue-500",
    mainClass: "text-xs md:text-xl font-bold absolute bottom-1 md:bottom-4 right-1 md:right-4",
    secondary: "DEVOPS",
    secondaryClass: "absolute bottom-1 md:bottom-4 right-1 md:right-4",
    containerClass: "rounded-lg h-full flex flex-col",
    innerContainerClass: "rounded-lg m-1 md:m-4 flex-1 mb-6 md:mb-16",
  },
  {
    main: "BIG DATA",
    border: "border-l border-b border-yellow-500",
    innerBorder: "border-l border-b border-green-400",
    mainClass: "text-xs md:text-xl font-bold absolute bottom-1 md:bottom-4 left-1 md:left-4",
    secondary: "IOT",
    secondaryClass: "absolute bottom-1 md:bottom-4 left-1 md:left-4",
    containerClass: "rounded-lg h-[85%] flex flex-col",
    innerContainerClass: "rounded-lg m-1 md:m-4 flex-1 mb-8 md:mb-20",
    extra: (
      <div className="absolute -bottom-15 md:-bottom-32 right-2 md:right-4 text-right text-sm md:text-3xl font-serif italic">
        <p>Wonderful!!</p>
        <p>Isn&apos;t it?</p>
      </div>
    ),
  },
];

const TechnologyGrid = () => {
  return (
    <div className="max-h-screen bg-black text-white flex items-center justify-center overflow-hidden pb-8 md:pb-20 px-2 md:px-4">
      <div className="grid grid-cols-2 gap-2 md:gap-8 w-full max-w-[700px] md:max-w-[1400px] h-[300px] md:h-[600px]">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
            className={`relative ${tech.border} ${tech.containerClass}`}
          >
            <div
              className={`relative ${tech.innerBorder} ${tech.innerContainerClass}`}
            >
              <h2 className={tech.mainClass}>{tech.main}</h2>
            </div>
            <div className={tech.secondaryClass}>
              <h2 className="text-xs md:text-xl font-bold">{tech.secondary}</h2>
            </div>
            {tech.extra}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
