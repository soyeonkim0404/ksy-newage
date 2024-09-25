'use client';

import styled from 'styled-components';
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
  margin-left: 20px;
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
    transition:
      stroke 0.25s ease var(--stroke-delay, 0s),
      stroke-dasharray 0.35s;
    &:hover {
      --spacing: 0;
      --stroke: var(--line-active);
      --stroke-delay: 0.1s;
      --offset: 180px;
    }
  }
  @media only screen and (max-width: 1023px) {
    svg {
      display: none;
    }
  }
`;

export default function Main() {
  return (
    <div className="main w-full lg:pt-[100px] lg:p-[60px] md:pt-[90px] md:p-[40px] pt-[80px] p-[20px] bg-sySky">
      <div className="flex flex-wrap items-center justify-center text-syNavy uppercase font-medium lg:text-[110px] md:text-[60px] text-[40px] break-all leading-normal tracking-tighter">
        welcome to
        <span className="font-medium ml-[20px]">my</span>
        <EffectStyled>
          new
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </EffectStyled>
        <span className="inline-flex items-center lg:ml-[20px] ml-[5px]] lg:h-[110px] md:h-[70px] h-[50px] border-2 border-syOrange/50 backdrop-blur-sm bg-syOrange/30 lg:pl-[32px] lg:pr-[3px] md:pl-[22px] md:pr-[4px] pl-[18px] pr-[3px] rounded-[145px] lg:text-[95px] md:text-[55px] text-[35px] hover:bg-syOrange hover:border-syOrange">
          2024
          <span className="inline-flex items-center justify-center lg:text-[75px] md:text-[45px] text-[30px] font-medium bg-white/30 lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50px] ml-[10px]">
            👀
          </span>
        </span>
        <span className="text-syBlue font-medium">portfolio</span>
        <span className="inline-flex items-center lg:ml-[30px] md:ml-[20px] ml-[10px] lg:h-[110px] md:h-[70px] h-[50px] border-2 border-syGreen/50 backdrop-blur-sm bg-syGreen/30 px-[3px] rounded-[145px] lg:text-[95px] md:text-[55px] text-[35px] hover:bg-syGreen hover:border-syGreen">
          <span className="inline-flex items-center justify-center lg:text-[75px] md:text-[45px] text-[30px] font-medium bg-white/30 lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50px]">
            👩🏼‍💻
          </span>
          <span className="lg:text-[50px] md:text-[30px] text-[20px] text-white/80">
            x
          </span>
          <span className="inline-flex items-center justify-center lg:text-[75px] md:text-[45px] text-[30px] font-medium bg-white/30 lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50px] ml-[10px]">
            🎧
          </span>
        </span>
        <span className="inline-flex font-medium">my name is</span>
        <span className="inline-flex max-w-[770px] overflow-hidden">
          <span className="inline-flex items-center ml-[10px] lg:h-[110px] md:h-[70px] h-[50px] border-2 border-syPurple/50 backdrop-blur-sm bg-syPurple/30 lg:pl-[32px] lg:pr-[3px] md:pl-[22px] md:pr-[4px] pl-[18px] pr-[3px] rounded-[145px] lg:text-[95px] md:text-[55px] text-[35px] hover:bg-syPurple hover:border-syPurple">
            <span className="w-full inline-flex flex-nowrap">
              <span className="inline-flex w-full animate-infinite-scroll">
                so yeon kim
                <span className="inline-flex items-center justify-center lg:text-[75px] md:text-[45px] text-[30px] font-medium bg-white/30 lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50px]">
                  🇰🇷
                </span>
              </span>
              <span
                className="inline-flex w-full animate-infinite-scroll"
                aria-hidden="true"
              >
                so yeon kim
                <span className="inline-flex items-center justify-center lg:text-[75px] md:text-[45px] text-[30px] font-medium bg-white/30 lg:w-[100px] lg:h-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] rounded-[50px]">
                  🇰🇷
                </span>
              </span>
            </span>
          </span>
        </span>
        <span className="inline-flex font-medium ml-[20px]">an</span>
        <span className="inline-flex lg:ml-[10px] md:ml-[5px] ml-[3px] mr-[10px] lg:border-[10px] md:border-[6px] border-[4px] border-syNavy lg:w-[650px] md:w-[100px] w-[50px] lg:h-[80px] md:h-[45px] h-[30px] rounded-r-[40px]"></span>
        <span className="font-medium">i am a front-end</span>
        <span className="inline-flex items-center ml-[10px] mt-[-10px] lg:h-[110px] md:h-[70px] h-[50px] border-2 border-white/50 backdrop-blur-sm bg-white/30 lg:px-[32px] md:px-[22px] px-[18px] rounded-[145px] lg:text-[95px] md:text-[55px] text-[35px] text-gray-400/30 hover:bg-syNavy/30 hover:border-syNavy/50 hover:text-white">
          since 2015
        </span>
        <br /> <span className="font-medium ml-[20px]">devel</span>
        <span className="inline-flex ml-[10px] mr-[10px] lg:border-[10px] md:border-[6px] border-[4px] border-syGreen lg:w-[900px] md:w-[400px] w-[50px] lg:h-[80px] md:h-[45px] h-[30px] rounded-[40px]"></span>
        <span className="font-medium">per 🔥</span>
      </div>
    </div>
  );
}
