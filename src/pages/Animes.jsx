import FooterDivider from "../assets/FooterDivider.png";

const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};

export default function Animes() {
  return (
    <div className="pb-10 px-4 md:px-10">
      <h2 className="text-center text-[22px] font-bold mb-2  capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]" style={fontStyle}>
        Animes
      </h2>
      <div className="text-center">
        <div className="h-80 flex items-center justify-center mb-6 sm:h-160">
          <h1>Nothing to see here yet...</h1>
        </div>
        <div className="flex justify-center">
          <img
            src={FooterDivider}
            alt=""
            className="block sm:hidden w-full max-w-xs"
          />
          <div className="hidden sm:flex w-full justify-between gap-2">
            <img src={FooterDivider} alt="" className="w-1/4" />
            <img src={FooterDivider} alt="" className="w-1/4" />
            <img src={FooterDivider} alt="" className="w-1/4" />
            <img src={FooterDivider} alt="" className="w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
