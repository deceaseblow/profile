import { useAppData } from "../context/AppDataContext";
import ExamsTable from "../comp/ExamsTable";
import Socials from "../comp/Socials";
import ListKeep from "../comp/ListKeep";
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
          className="text-center text-[22px] font-bold mb-2 capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]"
          style={fontStyle}
        >
          Home
        </h2>
        <div className="flex flex-col gap-5 px-5 md:pl-10 md:pt-10">
          <Socials />
          <ListKeep />
        {/*  <ExamsTable /> */} 
        </div>
      </div>
    </div>
  );
}
