import React from "react";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import ContactPage from "@/components/ContactPage";
import LatestWork from "@/components/LatestWork";


export default function Home() {
  return (
    <>
     <HeroPage/>
     <LatestWork/>
     <ContactPage/>
    </>
  );
}
