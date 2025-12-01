import { useEffect } from "react";

export default function MangaCard({ manga }) {
  const fallbackImage =
    "https://dennymfg.com/cdn/shop/products/ckgrayHigh_grande.jpg?v=1619109728";

  useEffect(() => {
    if (manga.link) {
      const linkTag = document.createElement("link");
      linkTag.rel = "prefetch";
      linkTag.href = manga.link;
      document.head.appendChild(linkTag);

      return () => {
        document.head.removeChild(linkTag);
      };
    }
  }, [manga.link]);

  return (
    <div className="bg-[#111] border border-gray-700 shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden rounded-lg transition-transform duration-300 w-40 sm:w-56 md:w-64">
      <a
        href={manga.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={manga.image && manga.image.trim() !== "" ? manga.image : fallbackImage}
          alt={manga.title}
          className="w-full h-56 sm:h-64 md:h-80 object-cover bg-gray-900 filter transition duration-300" /* grayscale hover: grayscale-0 */
        />
      </a>
      <div className="p-3 sm:p-4 flex flex-col gap-2 text-white">
        <h2 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">
          {manga.title}
        </h2>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
          {manga.genres && manga.genres.length > 0 ? (
            manga.genres.map((genre, index) => (
              <span
                key={index}
                className="border border-gray-500 text-gray-300 text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full tracking-wide uppercase"
              >
                {genre}
              </span>
            ))
          ) : (
            <span className="border border-gray-600 text-gray-400 text-[10px] sm:text-xs px-2 py-1 rounded-full">
              Unknown
            </span>
          )}
        </div>
        <p className="mt-2 text-[10px] sm:text-[11px] text-gray-400 uppercase">
          Status : {" "}
          <span
            className={`font-semibold ${
              manga.status === "completed" ? "text-white" : "text-red-400"
            }`}
          >
            {manga.status || "Unknown"}
          </span>
        </p>
      </div>
    </div>
  );
}