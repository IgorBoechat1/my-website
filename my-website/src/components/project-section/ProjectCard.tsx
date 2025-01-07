import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  date: string;
  techStack: string;
  imageUrl: string;
  backgroundStyle: "white" | "transparent";
  slug: string;
  star?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  date,
  techStack,
  imageUrl,
  backgroundStyle,
  slug,
  star,
}) => {
  const isWhiteBackground = backgroundStyle === "white";
  const textColor = isWhiteBackground ? "text-black" : "text-white";
  const hoverBgColor = isWhiteBackground ? "hover:bg-black" : "hover:bg-white";
  const hoverTextColor = isWhiteBackground ? "hover:text-white" : "hover:text-black";

  // Helper to insert stars between words
  const insertStars = (text: string, starElement: React.ReactNode) => {
    const words = text.split(" ");
    return words.flatMap((word, index) => [
      <span key={`word-${index}`} className="inline-block">
        {word}
      </span>,
      index < words.length - 1 && (
        <span key={`star-${index}`} className="mx-1 mt-[-3%] scale-80">
          {starElement}
        </span>
      ),
    ]);
  };

  return (
    <article
      className={`relative ${isWhiteBackground ? "bg-white" : "bg-transparent"} rounded-lg overflow-hidden shadow-lg`}
      
    >
      {/* Image Section */}
      <section className="w-full overflow-hidden ">
        <div className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] grayscale hover:filter-none transition-all duration-500">
          <Image
            src={imageUrl}
            alt={`Preview of the project titled ${title}`}
            className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
            width={600}
            height={400}
          />
        </div>
      </section>

      {/* Project Details Section */}
      <section className="relative p-6 mb-20">
        {/* Date with Star */}
        <div className="flex items-center mb-2">
          <div className="mr-1 transform scale-100 mt-[-14]">{star}</div>
          <h3 className={`text-xs sm:text-base ${textColor}`}>{date}</h3>
        </div>

        {/* Title */}
        <h1 className={`text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-light ${textColor}`}>
          {title}
        </h1>

        {/* Tech Stack with Stars */}
        <div className={`mt-0 flex font-secondary uppercase text-xs sm:text-base items-center ${textColor}`}>
          {insertStars(techStack, star)}
        </div>

        {/* Description */}
        <div className="mt-5">
          <h3 className={`text-sm sm:text-base uppercase ${textColor}`}>{description}</h3>
        </div>

        {/* More Info Button */}
        <Link href={`/projects/${slug}`} passHref>
          <button
            className={`mt-8 py-2 px-6 bg-transparent border-2 border-current font-secondary text-sm ${textColor} ${hoverBgColor} ${hoverTextColor} transition-all duration-300`}
            aria-label={`More information about ${title}`}
          >
            MORE INFO
          </button>
        </Link>
      </section>
    </article>
  );
};

export default ProjectCard;