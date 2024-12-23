import React from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/Card.jsx";
import { Element } from "react-scroll";

import hero from "../assets/Hero.png";
import image1 from "../assets/heroImage.jpg";
import megaphoneIcon from "../assets/megaphoneIcon.svg";
import map from "../assets/floodmap.jpg";
import grafik from "../assets/grafik.jpg";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <div className="w-full bg-blue-100">
          <img src={hero} alt="" className="w-full h-96" />
        </div>
      </Element>

      <div className="px-16 py-32">
        <div className="grid grid-cols-2 items-center place-items-center">
          <div className="">
            <p className="font-bold text-[#030C59] text-5xl">
              Useful <br /> Informations
            </p>
            <p className="mt-8">
              Kabupaten Pati, yang dikenal sebagai "Kota Bumi Mina Tani",
              merupakan sebuah wilayah di Provinsi Jawa Tengah yang memiliki
              kekayaan alam, budaya, dan sejarah yang menarik. Terletak di
              pantai utara Pulau Jawa, Kabupaten Pati memiliki posisi strategis
              yang menjadikannya sebagai salah satu daerah penting di Jawa
              Tengah, baik dari segi ekonomi, pariwisata, maupun pertanian.
            </p>
          </div>
          <div className="">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
      <Element name="peta">
        <div className="">
          <div className="bg-[#030C59] h-[28rem] pt-16">
            <div className="flex flex-col items-center">
              <div>
                <img src={megaphoneIcon} alt="" />
              </div>
              <div>
                <p className="font-bold text-white text-5xl text-center mt-8">
                  Flood-Prone Areas
                </p>
                <p className="text-white text-xl text-center mt-4">
                  Learn about flood-prone areas in Pati
                </p>
              </div>
              <div className="bg-white w-10/12 flex justify-evenly items-center gap-3 shadow-xl">
                <div className="w-2/5">
                  <img src={map} alt="" className="" />
                </div>
                <div className="">
                  <p className="font-bold text-3xl">Legenda</p>
                  <div className="mt-3 space-y-3">
                    <div className="flex items-center gap-1">
                      <div className="badge badge-lg bg-[#33ff00]"></div>
                      <p>Tidak Rawan</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="badge badge-lg bg-[#77aa00]"></div>
                      <p>Sedang</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="badge badge-lg bg-[#bb5500]"></div>
                      <p>Rawan</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="badge badge-lg bg-[#ff0000]"></div>
                      <p>Sangat Rawan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="grafik">
        <div className="mt-96 flex flex-col items-center justify-center">
          <div className="">
            <p className="font-bold text-[40px]">Grafik Banjir Kota Pati</p>
          </div>
          <div className="w-1/2 shadow-2xl mb-5">
            <img src={grafik} alt="" />
          </div>
        </div>
      </Element>

      <Element name="team">
        <div className="bg-[#030C59] py-16 flex flex-col items-center">
          <div className="">
            <p className="font-bold text-[40px] text-white">Our Team</p>
          </div>
          <div className="mt-14 grid grid-cols-5 gap-10">
            <Card name="Hava Maria" nim="4612421000" />
            <Card name="Ichrima Aura" nim="4612421000" />
            <Card name="Fahran" nim="4612421000" />
            <Card name="Michael" nim="4612421000" />
            <Card name="Nisa" nim="4612421000" />
          </div>
        </div>
      </Element>
    </div>
  );
}
