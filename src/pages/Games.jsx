import React from "react";
import { useAppData } from "../context/AppDataContext";

function Games() {
    const { data, loading } = useAppData();

    if (loading) return <p className="text-center mt-4 text-gray-500">Loading games...</p>;
    if (!data?.games || data.games.length === 0)
        return <p className="text-center text-gray-400">No games available.</p>;

    return (
        <div className="px-10 mx-auto space-y-10">
            {data.games.map((gameCategory) => (
                <div key={gameCategory.name}>
                    <h2 className="text-3xl font-bold mb-6 capitalize text-black font-mono tracking-wider border-b-4 border-black pb-2"
                        style={{
                            textShadow: '2px 2px 0px white, 4px 4px 0px black',
                            imageRendering: 'pixelated'
                        }}>
                        {gameCategory.name} Games
                    </h2>
                    <div className="flex flex-wrap gap-5 items-center md:gap-10 md:items-start justify-center">
                        {gameCategory.links.map((link) => (
                            <div
                                key={link.url}
                                className="relative group cursor-pointer"
                                style={{
                                    imageRendering: 'pixelated',
                                    filter: 'contrast(1.2)'
                                }}
                            >
                                <div
                                    className="w-70 h-40 p-6 bg-white items-center justify-center    border-4 border-black shadow-lg transition-all duration-200 font-mono
                                               hover:shadow-xl hover:translate-x-1 hover:translate-y-1 transform
                                               relative overflow-hidden"
                                    style={{
                                        boxShadow: '8px 8px 0px black',
                                        imageRendering: 'pixelated'
                                    }}
                                >
                                    <div className="absolute top-0 left-0 w-4 h-4 bg-black"></div>
                                    <div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
                                    <div className="absolute bottom-0 left-0 w-4 h-4 bg-black"></div>
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-black"></div>

                                    <div className="absolute top-1 left-1 w-2 h-2 bg-white"></div>
                                    <div className="absolute top-1 right-1 w-2 h-2 bg-white"></div>
                                    <div className="absolute bottom-1 left-1 w-2 h-2 bg-white"></div>
                                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-white"></div>

                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-center relative z-10"
                                    >
                                        <h3 className="font-bold text-[25px] mb-2 text-black uppercase tracking-wide leading-tight
                                                       group-hover:text-white group-hover:bg-black px-2 py-1 transition-all duration-200
                                                       border-2 border-transparent group-hover:border-black"
                                            style={{
                                                textShadow: '1px 1px 0px white',
                                                imageRendering: 'pixelated'
                                            }}>
                                            {link.name}
                                        </h3>

                                       
                                    </a> 
                                    <p className="text-sm text-center text-gray-700 leading-relaxed px-2 font-medium">
                                            {link.description}
                                        </p>

                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                                </div>

                                <div
                                    className="absolute top-2 left-2 w-full h-full bg-black -z-10 border-4 border-black"
                                    style={{ imageRendering: 'pixelated' }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Games;