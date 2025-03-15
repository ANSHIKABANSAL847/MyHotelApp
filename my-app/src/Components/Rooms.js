//import React, { useRef, useState } from "react";
//import { Container, Row, Col,  Button } from "react-bootstrap";

import RoomsSection from "./RoomsSection";
import HeroSection from "./RoomsHeroSection";
import RoomAmenities from "./RoomsAnemities";
import WhyChooseUs from "./RoomsWhyus";
import Footer from "./Footer"
const Rooms = () => {
  return (
    <>
      {/* <NavigationBar/> */}
      <HeroSection  />
      <RoomsSection/>
     
      <WhyChooseUs/>
      <RoomAmenities/>
      <br></br>
      <Footer/>
    </>
  );
};

export default Rooms;

