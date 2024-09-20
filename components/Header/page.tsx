'use client';

import Btn from '@/components/Btn/page';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from '@/components/Header/Nav/page';

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-full h-[100px] fixed top-0 left-0 bg-transparent md:justify-between items-center px-[60px] z-[99]">
      <Link href="/" className="text-white font-bold text-[20px]">
        <span className="text-syBlue font-bold mr-[5px]">KIM</span>
        <span className="text-syGreen font-bold mr-[5px]">SO</span>
        <span className="text-syOrange font-bold">YEON</span>
      </Link>
      {/* <div>
        <Btn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          text="GO TO TOP"
          customColor="#538dcc"
        ></Btn>
      </div>*/}
      <div
        className={`fixed right-[60px] z-[10] w-[60px] h-[60px] rounded-[50%] cursor-pointer flex items-center justify-center ${isActive ? 'bg-syNavy' : 'bg-syBlue'}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={`menu-burger ${isActive ? 'active' : ''}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
