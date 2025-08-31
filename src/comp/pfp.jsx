import React from "react";
import pfpPic from "../assets/pixels/pfp.jpg";
import bow from "../assets/pixels/bow.gif";
import borderPfp from "../assets/borderPfp.png";

function Pfp() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">
                <img
                    src={borderPfp}
                    alt="Border"
                    className="w-25 h-25 md:w-40 md:h-40 absolute inset-0 z-10"
                />
                <img
                    src={pfpPic}
                    alt="Profile"
                    className="w-25 h-25 rounded-full p-2 md:w-40 md:h-40 "
                />
                {/*  <div className="absolute right-5 bottom-5"> <img src={pfpHeart} alt="" /></div>
                <div className="absolute left-2 bottom-1"> <img src={pfpHeart} alt="" /></div>
                <div className="absolute left-2 bottom-2"> <img src={bow} alt="" /></div>
                */}
            </div>
        </div>
    );
}

export default Pfp;