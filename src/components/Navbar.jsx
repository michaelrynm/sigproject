import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    console.log(to);
  };

  return location.pathname === "/osm" ? (
    <div className="flex justify-between py-2 px-32 items-center text-[#212529] sticky top-0 bg-white z-50">
      <div className="">
        <img src={logo} alt="" className="w-24" />
      </div>
      <div className="flex gap-10 text-xl">
        <RouterLink to={"/"}>
          <p>Home</p>
        </RouterLink>
      </div>
    </div>
  ) : (
    <div className="flex justify-between py-2 px-32 items-center text-[#212529] sticky top-0 bg-white z-50">
      <div>
        <img src={logo} alt="" className="w-24" />
      </div>
      <div className="flex gap-10 text-xl">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="peta"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Peta
        </Link>
        <Link
          activeClass="active"
          to="grafik"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onSetActive={handleSetActive}
          className="cursor-pointer"
        >
          Grafik
        </Link>
        <RouterLink to={"/osm"}>
          <p>OpenStreetMap</p>
        </RouterLink>
      </div>
    </div>
  );
}
