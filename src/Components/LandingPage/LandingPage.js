import React, { useState } from "react";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map/Map"), { ssr: false });
import CityWidget from "./Map/CityWidget";
import Header from "./Header";

function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <Map />
      <div className="text-white absolute left-10 top-32 z-[1000] text-3xl font-bold">
        <h4>Hello User,</h4>
      </div>
      <CityWidget />
    </div>
  );
}

export default LandingPage;
