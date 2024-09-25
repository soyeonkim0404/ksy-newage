'use client';
import { FC } from 'react';
import Link from 'next/link';
import { StaticImageData } from 'next/image'; // StaticImport 타입을 포함하기 위해 필요
import Image from 'next/image';
import DefaultThumb from '@/public/images/default_img.png';
import styled from 'styled-components';
import ArrowIcon from '@/public/images/arrow-up.svg';

type Data = {
  url?: string;
  thumb?: string; // 외부 URL을 처리할 경우 string 타입
  title?: string;
  flag?: string[];
  description?: string[];
  projectYear?: string;
};

type CardProps = {
  data: Data[];
};

const LinkStyled = styled.div`
  position: absolute;
  bottom: -0.375rem;
  right: -0.375rem;
  width: 6rem;
  height: 6rem;
  background: #eef5fd;
  border-top-left-radius: 50%;
  &::before {
    position: absolute;
    content: '';
    bottom: 0.375rem;
    left: -1.25rem;
    background-color: transparent;
    width: 1.25rem;
    height: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: 0.313rem 0.313rem 0 0.313rem #eef5fd;
  }
  &::after {
    position: absolute;
    content: '';
    top: -1.25rem;
    right: 0.375rem;
    background-color: transparent;
    width: 1.25rem;
    height: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    box-shadow: 0.313rem 0.313rem 0 0.313rem #eef5fd;
  }
  a {
    background: #64b580;
    position: absolute;
    inset: 0.625rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    span {
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Card: FC<CardProps> = ({ data }) => {
  const newFrag = year => {
    const today = new Date();
    // 오늘 날짜의 시간을 제거하고 자정으로 설정
    const currentYear = new Date(today.getFullYear());

    // new가 붙는 기준의 날짜
    const projectDate = new Date(year);
    const projectYear = new Date(projectDate.getFullYear());
    if (projectYear >= currentYear) {
      return (
        <span className="font-medium text-[14px] text-white border-1 border-syBlue bg-syBlue px-[10px] py-[4px] rounded-[6px]">
          New
        </span>
      );
    }
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div
            className="relative h-[300px] bg-white rounded-[1.25rem]"
            style={{ borderBottomRightRadius: 0, width: 'inherit' }}
          >
            <div className="w-full h-full bg-white rounded-[1.25rem]">
              <div className="absolute inset-0">
                <Image
                  src={
                    item?.thumb ? item.thumb : (DefaultThumb as StaticImageData)
                  }
                  alt={item?.title ? item.title : 'default image'}
                  className="w-full h-full object-cover rounded-[1.25rem]"
                />
              </div>
              <LinkStyled>
                <Link href={item?.url}>
                  <span>
                    <Image
                      src={ArrowIcon as StaticImageData}
                      alt="arrow icon"
                    />
                  </span>
                </Link>
              </LinkStyled>
            </div>
          </div>
          <div>
            <h3 className="text-[24px] font-medium mt-[20px]">{item?.title}</h3>
            <ul className="mt-[20px]">
              {item.description?.map((des, idx) => <li key={idx}>{des}</li>)}
            </ul>
            <div className="mt-[15px]">
              {newFrag(item?.projectYear)}
              {item?.flag?.map((frag, i) => (
                <span
                  key={i}
                  className="ml-[5px] font-medium text-[14px] text-syNavy/80 border border-syNavy px-[10px] py-[4px] rounded-[6px]"
                >
                  {frag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
