import React from "react";
import pfpPic from "../assets/pixels/pfp.jpg";
import pfpHeart from "../assets/pixels/pfpHearts.gif"
import bow from "../assets/pixels/bow.gif"
function Pfp() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">   
                <img
                src={pfpPic}
                alt="Profile"
                className="w-40 h-40 "
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
