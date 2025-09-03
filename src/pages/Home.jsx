import { useAppData } from "../context/AppDataContext";

const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};

export default function Home() {
  const { data, loading } = useAppData();

  if (loading) return <p className="text-center mt-4">Loading list...</p>;

  return (
    <div>
      <div className="pb-10 px-4 md:px-10">
        <h2
          className="text-center text-[30px] font-bold mb-2 capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]"
          style={fontStyle}
        >
          Home
        </h2>
        <div className=" flex flex-col gap-5 px-5 md:pl-10 md:pt-10">
          <div>
            <h2 className="text-center text-black font-bold tracking-wider text-[25px] md:text-start">
              LIST OF THINGS TO KEEP IN MIND
            </h2>
            <div>
              {data?.list && data.list.length > 0 ? (
                <ul className="list-disc list-inside space-y-2 pl-5 text-[16px] md:text-[18px] tracking-wide text-gray-800 mt-2">
                  {data.list.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-black hover:translate-x-1 transition-all duration-200 text-[20px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 text-center italic mt-2 md:text-start">
                  No list available yet.
                </p>
              )}
            </div>
          </div>
          {/* 
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-center text-black font-bold tracking-wider text-[25px] md:text-start">
              Soon to be added...
            </h2>
            <div>
              <p>very uninsteresting parag.</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-center text-black font-bold tracking-wider text-[25px] md:text-start">
              Soon to be added...
            </h2>
            <div>
              <p>Another very uninsteresting parag.</p>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
}
