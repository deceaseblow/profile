import React from "react";

const ShowsCard = ({ show }) => {
  return (
    <div className="w-60 bg-white border-1 border-black shadow-lg  hover:shadow-xl transition-all">
      <img
        src={show.image}
        alt={show.title}
        className="w-full h-90 object-cover mb-3"
      />
      <div className="px-4 py-2"> <h3 className="font-bold text-lg mb-1">{show.title}</h3>
        <div className="flex items-center gap-1 text-gray-600">
          <p className="text-sm text-gray-600">{show.year}</p>
          <span>•</span>
          {show.status && <p className="text-sm font-medium">Status: {show.status}</p>}
        </div>
        <p className="text-sm text-gray-500 mb-1">
          Genres: {show.genres.join(", ")}
        </p>

        {show.comment && <p className="text-sm font-bold italic mt-1">{show.comment}</p>}</div>
    </div>
  );
};

export default ShowsCard;
