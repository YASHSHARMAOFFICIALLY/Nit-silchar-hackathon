import Image from "next/image";
import { ModeToggle } from "@/components/mode-togle";
import { Logo } from "@/components/landing/logo";
import { Navbar } from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import PainPointSection from "@/components/landing/painpointsection";
import ThreePillarsSection from "@/components/landing/card";

export default function Home() {
  return (
    <div>
      
      <Navbar/>
    

      <Hero/>
      <PainPointSection/>
      <ThreePillarsSection/>
    </div>
  
    
   
  )
}
