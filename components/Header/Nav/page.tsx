import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { menuSlide, scale, slide } from '@/components/Header/anim';
import Link from 'next/link';
import Curve from '@/components/Header/Nav/Curve/page';
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

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
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
                  animate={selectedIndicator == data.href ? 'open' : 'closed'}
                  className="w-[10px] h-[10px] bg-white rounded-[50%] absolute left-[-30px]"
                ></motion.div>
                <Link href={data.href}>{data.title}</Link>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
