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
    <div className="bg-white shadow-md overflow-hidden transition-transform w-64 duration-300">
      <a
        href={manga.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={manga.image && manga.image.trim() !== "" ? manga.image : fallbackImage}
          alt={manga.title}
          className="w-full h-80 object-cover bg-gray-100"
        />
      </a>

      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold">{manga.title}</h2>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <p>By {manga.author || "Unknown"}</p> <span>•</span>
          <p>{manga.year || "N/A"}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {manga.genres && manga.genres.length > 0 ? (
            manga.genres.map((genre, index) => (
              <span
                key={index}
                className="bg-[#000] text-[#fff] text-xs px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))
          ) : (
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
              Unknown
            </span>
          )}
        </div>

        <p className="mt-3 text-xs text-gray-600">
          Status:{" "}
          <span
            className={`font-semibold ${
              manga.status === "completed" ? "text-green-700" : "text-red-600"
            }`}
          >
            {manga.status || "Unknown"}
          </span>
        </p>
      </div>
    </div>
  );
}
