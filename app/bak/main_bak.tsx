'use client';
import styled from 'styled-components';

export default function Home() {
  return (
    <div className="home w-full h-screen inline-flex justify-center items-center flex-wrap bg-[#111111] text-syWhite">
      {/*PC*/}
      <div className="pc w-[80vw] h-[auto] border-[10px] max-md:border-[5px]">
        <div className="w-full">
          <span className="inline-flex border-r-[10px] px-[20px]">WELCOME</span>
          <span className="inline-flex border-r-[10px] px-[20px]">TO</span>
          <span className="inline-flex border-r-[10px] px-[20px]">MY</span>
          <span className="inline-flex border-r-[10px] px-[20px]">NEW</span>
        </div>
        <div className="w-full border-t-[10px]">
          <span className="inline-flex border-r-[10px] px-[20px]">2024</span>
          <span className="inline-flex border-r-[10px] px-[20px] flex-1">
            PORTFOLIO
          </span>
          <span className="inline-flex border-r-[10px] px-[20px]">MY</span>
          <span className="inline-flex px-[20px] max-homeBreakPoint:border-t-[10px] max-homeBreakPoint:w-full">
            NAME IS
          </span>
        </div>
        <div className="w-full border-t-[10px]">
          <span className="inline-flex px-[20px] border-r-[10px]">
            SOYEON KIM
          </span>
          <span className="inline-flex px-[20px] border-r-[10px] flex-1 "></span>
          <span className="inline-flex px-[20px]">AND I AM A</span>
        </div>
        <div className="w-full border-t-[10px]">
          <span className="inline-flex px-[20px] border-r-[10px]">
            FRONT-END
          </span>
          <span className="inline-flex border-r-[10px] px-[20px]">
            DEVELOPER
          </span>
          <span className="px-[20px] flex-1"></span>
        </div>
      </div>

      {/*MOBILE*/}
      <div className="mobile w-[80vw] min-h-[60vh] border-[5px]">
        <div className="w-full">
          <span className="inline-flex border-r-[5px] px-[20px]">
            WELCOME TO
          </span>
          <span className="inline-flex border-r-[5px] px-[20px]">MY NEW</span>
          <span className="inline-flex border-r-[5px] px-[20px]">
            2024 PORTFOLIO
          </span>
          <span className="inline-flex px-[20px] border-r-[5px]">
            MY NAME IS
          </span>
          <span className="inline-flex px-[20px] border-r-[5px]">
            SOYEON KIM
          </span>
          <span className="inline-flex px-[20px] border-r-[5px]">
            AND I AM A
          </span>
          <span className="inline-flex px-[20px] border-r-[5px]">
            FRONT-END
          </span>
          <span className="inline-flex px-[20px]">DEVELOPER</span>
        </div>
      </div>
    </div>
  );
}
