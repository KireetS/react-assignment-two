import React from "react";

const HotelCard = ({ name, city }) => {
  return (
    <>
      <div className="rounded-lg w-[22rem] h-[22rem] flex flex-col items-center justify-center bg-slate-300 p-5 mx-10 mt-7 mb-3">
        <img
          src="https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="p-3"
        />
        <div className="flex items-center justify-center text-lg font-semibold text-black">
          {name} {city}
        </div>
      </div>
    </>
  );
};

export default HotelCard;
