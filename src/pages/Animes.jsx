import FooterDivider from "../assets/FooterDivider.png";

export default function Animes() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Favorite Anime Picks!</h1>

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
  );
}
