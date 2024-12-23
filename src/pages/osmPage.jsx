import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";

import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ChangeMapView({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 13);
    }
  }, [position, map]);

  return null;
}

export default function OsmPage() {
  const coordinates = {
    pati: [-6.7534144, 111.0399982],
    sukolilo: [-6.9334455, 110.916692],
    kayen: [-6.8948896, 110.9856731],
    tambakromo: [-6.8739807, 111.0458028],
    winong: [-6.8092805, 111.101625],
    pucakwangi: [-6.8372123, 111.1713222],
    jaken: [-6.7734659, 111.2236708],
    jakenan: [-6.7623443, 111.1640413],
    batangan: [-6.7089306, 111.2311864],
    juwana: [-6.7116898, 111.1514508],
    gabus: [-6.8330976, 111.0539245],
    margorejo: [-6.7662424, 111.008606],
    gembong: [-6.7035366, 110.944729],
    tlogowungu: [-6.7066716, 111.0138148],
    wedarijaksa: [-6.68277, 111.07173],
    trangkil: [-6.6604143, 111.0631353],
    margoyoso: [-6.6028769, 111.052731],
    gunungwungkal: [-6.568575, 110.9881798],
    cluwak: [-6.5343993, 110.944941],
    tayu: [-6.5356277, 111.0437536],
    dukuhseti: [-6.4758905, 111.0380888],
  };

  const limeOptions = { color: "lime" };

  const testPolygon = [
    [
      [111.085536843162132, -6.738779346150031],
      [111.085425930396951, -6.739649584769102],
      [111.082431285737215, -6.740686192535935],
      [111.081885253662506, -6.741436986638662],
      [111.080997951541093, -6.742256034750727],
      [111.080417792461716, -6.742699685811429],
      [111.078301918172215, -6.744406036044899],
      [111.076732075957423, -6.746419529320394],
      [111.07591302784536, -6.747818736511839],
      [111.074172550607216, -6.749320324717293],
      [111.073012232448448, -6.750753658913408],
      [111.072295565350402, -6.751402072002127],
      [111.070384453088906, -6.751982231081506],
      [111.067347149673324, -6.751470326011465],
      [111.066869371607964, -6.750412388866714],
      [111.066220958519239, -6.749013181675268],
      [111.065606672435194, -6.748262387572542],
      [111.065265402388491, -6.747033815404443],
      [111.064616989299779, -6.745532227198989],
      [111.063900322201718, -6.744269528026221],
      [111.063081274089654, -6.742870320834776],
      [111.062705877038297, -6.742153653736718],
      [111.062535242014945, -6.741965955211038],
      [111.061374923856192, -6.740225477972898],
      [111.060282859706774, -6.739457620367837],
      [111.059566192608713, -6.738911588293126],
      [111.057825715370555, -6.73812666718573],
      [111.056324127165112, -6.73671039649195],
      [111.054959046978325, -6.736164364417239],
      [111.053866982828907, -6.73558420533786],
      [111.053286823749531, -6.735038173263149],
      [111.051017377939019, -6.732973489480649],
      [111.050198329826955, -6.731898488833563],
      [111.049396345217232, -6.73061872615846],
      [111.049038011668202, -6.729884995558068],
      [111.048236027058465, -6.728025073803586],
      [111.047911820514102, -6.725926263016418],
      [111.048338408072468, -6.724407611308629],
      [111.048355471574808, -6.722615943563485],
      [111.0483042810678, -6.721745704944416],
      [111.04927690070086, -6.718776655538178],
      [111.050113012315265, -6.717684591388757],
      [111.050061821808256, -6.716319511201982],
      [111.049703488259226, -6.715619907606259],
      [111.04914039268219, -6.714834986498862],
      [111.048270154063118, -6.712753239214029],
      [111.047928884016429, -6.711712365571612],
      [111.047297534430044, -6.710313158380167],
      [111.046751502355335, -6.709084586212069],
      [111.046444359313313, -6.708777443170044],
      [111.045693565210584, -6.706712759387546],
      [111.044959834610196, -6.705245298186762],
      [111.044499120047135, -6.704886964637732],
      [111.046427295810958, -6.70498934565174],
      [111.048543170100459, -6.706337362336179],
      [111.04919158318917, -6.706678632382873],
      [111.05009594881291, -6.706763949894547],
      [111.05135864798568, -6.706576251368865],
      [111.052177696097743, -6.70630323533151],
      [111.052877299693463, -6.705330615698433],
      [111.053252696744835, -6.704443313577028],
      [111.054105871861566, -6.703829027492978],
      [111.055214999513325, -6.703624265464962],
      [111.056187619146399, -6.703675455971966],
      [111.05690428624446, -6.704272678553681],
      [111.058098731407881, -6.704306805558351],
      [111.058951906524626, -6.703982599013991],
      [111.059344367078324, -6.703282995418268],
      [111.059890399153034, -6.702225058273516],
      [111.060436431227743, -6.700484581035377],
      [111.061050717311801, -6.699051246839262],
      [111.061784447912189, -6.697805611168829],
      [111.062791194549931, -6.697037753563768],
      [111.063593179159668, -6.696269895958706],
      [111.064770560820762, -6.695843308400338],
      [111.065282465890803, -6.695655609874657],
      [111.066493974556565, -6.695109577799947],
      [111.067466594189654, -6.694444101208894],
      [111.071101120186924, -6.694102831162199],
      [111.071937231801328, -6.694008981899358],
      [111.072619771894722, -6.693957791392354],
      [111.073669177288295, -6.693889537383015],
      [111.073967788579154, -6.69387247388068],
      [111.075443781531121, -6.694043108904028],
      [111.075836242084819, -6.693855410378346],
      [111.076288424896688, -6.693258187796632],
      [111.076791798215552, -6.692874258994101],
      [111.07718425876925, -6.692464734938068],
      [111.079419577575081, -6.691978425121529],
      [111.080426324212823, -6.691901639361022],
      [111.081851126657781, -6.692114933140206],
      [111.082874936797865, -6.692302631665888],
      [111.085639224176077, -6.692874258994101],
      [111.086586248555662, -6.692959576505774],
      [111.087388233165385, -6.69303636226628],
      [111.08824140828213, -6.693027830515113],
      [111.091730894509595, -6.69319846553846],
      [111.092217204326133, -6.693599457843325],
      [111.09295093492652, -6.694307593190215],
      [111.093479903498903, -6.694785371255587],
      [111.096030897097947, -6.695851840151504],
      [111.097157088252033, -6.695920094160843],
      [111.097976136364096, -6.696193110198198],
      [111.099068200513514, -6.696602634254231],
      [111.100535661714304, -6.696943904300925],
      [111.102139630933763, -6.69721692033828],
      [111.103914235176575, -6.696807396282248],
      [111.106234871494095, -6.696022475174852],
      [111.106712649559469, -6.695442316095471],
      [111.106132490480093, -6.694623267983406],
      [111.105654712414719, -6.694213743927373],
      [111.105211061354012, -6.693462949824646],
      [111.105142807344677, -6.692029615628531],
      [111.106917411587489, -6.69151771055849],
      [111.107872967718222, -6.691381202539812],
      [111.108692015830286, -6.691210567516466],
      [111.109715825970369, -6.690698662446424],
      [111.110739636110452, -6.690562154427747],
      [111.111763446250535, -6.69097167848378],
      [111.112787256390618, -6.691654218577168],
      [111.113845193535369, -6.693053425768613],
      [111.114186463582058, -6.693940727890018],
      [111.114254717591407, -6.695066919044108],
      [111.114527733628762, -6.696534380244892],
      [111.113486859986338, -6.699085373843931],
      [111.113290629709496, -6.699691128176813],
      [111.113060272427973, -6.700194501495687],
      [111.112881105653457, -6.700885573340241],
      [111.112608089616103, -6.701525454677793],
      [111.112445986343928, -6.701764343710479],
      [111.111370985696837, -6.703129423897255],
      [111.111234477678153, -6.703871686248814],
      [111.111413644452668, -6.704289742056014],
      [111.111601342978346, -6.704835774130724],
      [111.11180610500638, -6.708188752339493],
      [111.110411296999104, -6.708686660005275],
      [111.085465123128841, -6.737427996750288],
      [111.085536843162132, -6.738779346150031],
    ],
  ];

  const convertedPolygon = testPolygon[0].map((coord) => [coord[1], coord[0]]);

  const [position, setPositions] = useState(coordinates.pati);

  const handleButton = (coordinate) => {
    // Tambahkan arrow function pada onClick
    setPositions(coordinate);
  };

  return (
    <div>
      <Navbar />
      <div className="px-20">
        <div className="grid grid-cols-2 place-items-center">
          <div className="">
            <p className="font-bold text-[#030C59] text-5xl">
              Useful <br /> Informations
            </p>
            <p className="mt-8">
              Banjir yang terjadi di Kabupaten Pati disebabkan oleh curah hujan
              yang tinggi dan meluapnya sungai. Banyak wilayah yang terdampak,
              mengakibatkan kerugian material dan gangguan pada aktivitas
              masyarakat. Pemerintah setempat telah mengambil langkah-langkah
              untuk menangani situasi ini dan memberikan bantuan kepada korban
              banjir.
            </p>
          </div>
          <div className="flex gap-3">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#030C59] w-full h-fit py-5 mt-10 flex justify-center items-center">
        <div className="h-fit w-5/6 bg-white grid grid-cols-3">
          <div className="h-[700px] col-span-2">
            {" "}
            {/* Tambahkan div wrapper dengan tinggi tetap */}
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              className="h-full w-full z-10" // Gunakan className daripada style
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <ChangeMapView position={position} /> 
            </MapContainer>
          </div>
          <div className="bg-white p-5 col-span-1 grid grid-flow-row h-[700px] overflow-y-auto gap-y-2">
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.sukolilo)}
            >
              Sukolilo
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.kayen)}
            >
              Kayen
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.tambakromo)}
            >
              Tambakromo
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.winong)}
            >
              Winong
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.pucakwangi)}
            >
              Pucakwangi
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.jaken)}
            >
              Jaken
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.jakenan)}
            >
              Jakenan
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.batangan)}
            >
              Batangan
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.juwana)}
            >
              Juwana
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.pati)}
            >
              Pati
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.gabus)}
            >
              Gabus
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.margorejo)}
            >
              Margorejo
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.gembong)}
            >
              Gembong
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.tlogowungu)}
            >
              Tlogowungu
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.wedarijaksa)}
            >
              Wedarijaksa
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.trangkil)}
            >
              Trangkil
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.margoyoso)}
            >
              Margoyoso
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.gunungwungkal)}
            >
              Gunungwungkal
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.cluwak)}
            >
              Cluwak
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.tayu)}
            >
              Tayu
            </button>
            <button
              className="btn btn-md bg-[#030C59] text-white hover:text-black"
              onClick={() => handleButton(coordinates.dukuhseti)}
            >
              Dukuhseti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
