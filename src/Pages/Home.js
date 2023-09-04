import React from "react";
import Landing from "../Components/sections/Landing";
import Team from "../Components/sections/Team";
import Videos from "../Components/sections/Videos";
import StarShip from "../Components/sections/StarShip";
import ViewOnScroll from "../Components/motion";

export default function Home() {
  return (
    <>

      <Landing />
      <Team />
      <StarShip/>
      <Videos />

    </>
  );
}
