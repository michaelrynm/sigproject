import React from "react";
import teamImage1 from "../assets/teamImage1.png";

export default function Card(props) {
    const {name, nim} = props
  return (
    <div className="w-fit">
      <div className="">
        <img src={teamImage1} alt="" className="rounded-t-xl" />
      </div>
      <div className="rounded-b-xl bg-white p-3">
        <p className="font-medium">{name}</p>
        <p>{nim}</p>
      </div>
    </div>
  );
}
