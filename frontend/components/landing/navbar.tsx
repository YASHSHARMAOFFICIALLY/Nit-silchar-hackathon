"use client"

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { Container } from "../Container";
import { Logo } from "./logo";
import { Button } from "../ui/button";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const navlink = [
    {
        title:'Feature',
        href:"/feature"
    },
    {
        title:'Privacy',
        href :'privacy'
    },
    {
        title:'FAQ',
        href :'FAQ'
    }
]
export const Navbar = () =>{
    return (
        <DesktopNavbar>

        </DesktopNavbar>
    )

}

//  export const DesktopNabar = () =>{
//     return (
//         <Container className="py-4  items-center justify-between hidden lg:flex" >
//             <Logo>
         
//            <div className="flex items-center gap-4">
//                     {navlink.map((item,index)=>{
//                         return(
//                             <Link key = {index} href = {item.href}
//                             className="text-sm text-red-600 dark:text-red-900 font-medium">
//                                 {item.title}
//                                 </Link>
//                         )
//                     })}
//                 </div>
//                 <div className="flex items-center gap-4">
//                     <Link href = "/login" className="text-sm px-4 py-2 rounded-md  
//                     text-neutral-900 font-medium">
//                     Login
//                     </Link>
//                     <Button >
//                        Signup 
//                     </Button>

//                 </div>
//                 </Logo>
//         </Container>
//     )
//  }
export const DesktopNavbar = () => { 
    const router = useRouter()
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur">
      <Container className="py-4  items-center justify-between hidden lg:flex">
        <Logo />
        <div className="flex items-center gap-4   ">
          {navlink.map((item, index) => (
            <Link key={index} href={item.href} className="text-m  font-semibold  leading-none  ">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4 ">
              {/* <ThemeToggle /> */}
              <Button variant="ghost" onClick={() => router.push("/signup")}>
               yash
              </Button>
              <Button className="shadow-[0px_0px_2px_1px_rgba(255,255,255,0.2)_inset]
              text-shadow-sm text-shadow-white/10 ring ring-white/20 cursor-pointer"
              onClick={() => router.push("/signin")}>
                Login 
                <MoveRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
      </Container>
    </header>
  );
};