import React from 'react'

const fontStyle = {
  fontFamily: "'antsValley', sans-serif"
};
function Blogs() {
    return (
        <div>
            <div className="pb-10 px-4 md:px-10">
               <h2 className="text-center text-[22px] font-bold mb-2  capitalize text-black tracking-wider border-b-4 border-black pb-2 md:text-start md:text-[40px]" style={fontStyle}>
                   Blog
                </h2>
            </div>
        </div>
    )
}

export default Blogs
