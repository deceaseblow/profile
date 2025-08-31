import React from "react";
import { useAppData } from "../context/AppDataContext";

function Links() {
  const { getLinks, loading } = useAppData();
  
  if (loading) {
    return <p className="text-center mt-4 text-gray-500">Loading...</p>;
  }
  
  const links = getLinks();
  
  return (
    <div className="md:px-20 pb-10 sm:px-15 pb-10 px-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Useful Links! (click on the name to visit ! )</h1>
      </div>
      {links.length === 0 ? (
        <p className="text-center text-gray-400">No links found.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">#</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Name</th>
                <th className="py-3 px-4 text-left text-gray-700 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              {links.map((link, index) => {
                const linkUrl = link.url ;
                return (
                  <tr
                    key={linkUrl || index} 
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" font-semibold hover:underline"
                      >
                        {link.name}
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      {link.description || "—"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Links;