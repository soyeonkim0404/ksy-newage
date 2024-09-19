"use client";

import styled from "styled-components";
const EffectStyled = styled.span`
    --text: #ffffff;
    --line: #64b580;
    --line-active: #64b580;
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: #fe6e39;
  font-weight: 500;
  transition: margin 0.25s;
  margin-left: 30px;
  svg {
    width: 332px;
    height: 170px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 3px) translateZ(0);
    fill: none;
    stroke: var(--stroke, var(--line));
    stroke-linecap: round;
    stroke-width: 2px;
    stroke-dasharray: var(--offset, 64px) 288px;
    stroke-dashoffset: 361px;
    transition: stroke 0.25s ease var(--stroke-delay, 0s), stroke-dasharray 0.35s;
  &:hover {
    --spacing: 0;
    --stroke: var(--line-active);
    --stroke-delay: 0.1s;
    --offset: 180px;
  }
`;

export default function Home() {
  return (
    <div className="main w-full pt-[100px] p-[60px] bg-sySky">
      <div className="flex flex-wrap items-center text-syNavy uppercase font-medium text-[110px] break-all leading-normal tracking-tighter">
        welcome to
        <span className="font-medium ml-[20px]">my</span>
        <EffectStyled>
          new
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </EffectStyled>
        <span className="inline-flex items-center ml-[30px] h-[110px] border-2 border-syOrange/50 backdrop-blur-sm bg-syOrange/30 pl-[32px] pr-[3px] rounded-[145px] text-[95px] hover:bg-blue-600 hover:border-blue-600">
          2024
          <span className="inline-flex items-center justify-center text-[75px] font-medium bg-white/30 w-[100px] rounded-[50px] h-[100px] ml-[10px]">
            👀
          </span>
        </span>
        <span className="text-syBlue font-medium">portfolio</span>
        <span className="inline-flex items-center mx-[20px] h-[110px] border-2 border-syGreen/90 backdrop-blur-sm bg-syGreen/80 px-[3px] rounded-[145px] text-[95px] hover:bg-blue-600 hover:border-blue-600">
          <span className="inline-flex items-center justify-center text-[75px] font-medium bg-white/30 w-[100px] rounded-[50px] h-[100px] mr-[20px]">
            👩🏼‍💻
          </span>
          <span className="text-[50px] text-white/80">x</span>
          <span className="inline-flex items-center justify-center text-[75px] font-medium bg-white/30 w-[100px] rounded-[50px] h-[100px] ml-[20px]">
            🎧
          </span>
        </span>{" "}
        my name is
        <span className="font-medium">
          <span className="inline-flex items-center h-[110px] border-2 border-syPurple/50 backdrop-blur-sm bg-syPurple/30 pl-[32px] pr-[3px] rounded-[145px] text-[95px] hover:bg-blue-600 hover:border-blue-600">
            so yeon kim{" "}
            <span className="inline-flex items-center justify-center text-[75px] font-medium bg-white/30 w-[100px] rounded-[50px] h-[100px] ml-[10px]">
              🇰🇷
            </span>
          </span>{" "}
          andddddddd
          <br /> i am a front-end
          <br /> devel
          <span className="inline-flex ml-[15px] mr-[10px] border-[8px] border-syGreen w-[400px] h-[80px] rounded-[40px]"></span>
          per 🔥
        </span>
      </div>
    </div>
  );
}
