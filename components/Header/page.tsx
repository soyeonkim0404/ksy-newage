'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuSlide, scale, slide } from '@/components/Header/anim';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    title: 'Home',

    href: '/'
  },

  {
    title: 'Project',

    href: '/project'
  }
];

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
  const curve = {
    initial: {
      d: initialPath
    },

    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },

    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: '-99px',
        width: '100px',
        height: '100%',
        fill: '#64b580',
        stroke: 'none'
      }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <div className="flex w-full lg:h-[100px] md:h-[80px] h-[60px] fixed top-0 left-0 bg-transparent md:justify-between items-center lg:px-[60px] md:px-[40px] px-[20px] z-[99]">
      <Link href="/" className="text-white font-bold text-[20px]">
        <span className="text-syBlue font-bold mr-[5px]">KIM</span>
        <span className="text-syGreen font-bold mr-[5px]">SO</span>
        <span className="text-syOrange font-bold">YEON</span>
      </Link>
      <div
        className={`fixed lg:right-[60px] md:right-[40px] right-[20px] z-[10] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] rounded-[50%] cursor-pointer flex items-center justify-center ${isActive ? 'bg-syNavy' : 'bg-syBlue'}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={`menu-burger ${isActive ? 'active' : ''}`}></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen bg-syGreen fixed top-0 right-0 text-white"
          >
            <div className="box-border h-full p-[100px] flex flex-col justify-between">
              <div
                onMouseLeave={() => setSelectedIndicator(pathname)}
                className="flex flex-col text-[56px] gap-[12px] mt-[80px]"
              >
                {navItems.map((data, index) => {
                  return (
                    <motion.div
                      className="relative flex items-center"
                      onMouseEnter={() => {
                        setSelectedIndicator(data.href);
                      }}
                      custom={index}
                      variants={slide}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <motion.div
                        variants={scale}
                        animate={
                          selectedIndicator == data.href ? 'open' : 'closed'
                        }
                        className="w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]"
                      ></motion.div>
                      <Link
                        href={data.href}
                        onClick={() => setIsActive(!isActive)}
                      >
                        {data.title}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
