'use client';
import Card from '@/components/Card/page';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const rollOutAnimation = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

const rollInAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Sentence = styled.div`
  font-size: 55px;
  display: flex;
  align-items: center;
  height: 68px; /* 애니메이션을 위한 고정 높이 */
  overflow: hidden;
  position: relative;
  color: #333748;
`;

const WordWrapper = styled.div`
  position: relative;
  width: 400px; /* 단어 길이에 맞춰 조절 */
  height: 75px;
`;

const Word = styled.div`
  position: absolute;
  margin-left: 20px;
  color: #ff4234;
  width: 100%; /* 부모 요소의 크기에 맞추어 설정 */
  animation: ${props => (props.isOut ? rollOutAnimation : rollInAnimation)} 2s
    forwards;
`;

const rollingText = ['Work', 'Career', 'Study', 'Micro Project'];

const data = [
  {
    title: 'supabase 활용 스터디',
    thumb: '',
    description: [
      'supabase를 이용한 todolist',
      'supabase를 이용한 api 불러오기',
      'supabase의 realtime을 이용한 실시간 채팅 & 로그인'
    ],
    flag: ['study'],
    url: ''
  },
  {
    title: '서울반도체',
    thumb: '',
    description: ['다국어 웹사이트', 'next.js 14, app router'],
    flag: ['프로젝트', '구축'],
    url: 'https://www.seoulsemicon.com/'
  },
  {
    title: 'OCI, OCI Holdings 사이트 연간 운영',
    thumb: '',
    description: ['next.js 13'],
    flag: ['프로젝트', '운영'],
    url: 'https://www.oci.co.kr/'
  }
];

export default function Project() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [prevWordIndex, setPrevWordIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevWordIndex(currentWordIndex);
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % rollingText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div className="main w-full pt-[100px] p-[60px] bg-sySky">
      <div className="text-[55px] text-syNavy">Hello!</div>
      <Sentence>
        Enjoy my
        <WordWrapper>
          {prevWordIndex !== null && (
            <Word key={prevWordIndex} isOut>
              {rollingText[prevWordIndex]}
            </Word>
          )}
          <Word key={currentWordIndex}>{rollingText[currentWordIndex]}</Word>
        </WordWrapper>
      </Sentence>
      <div className="grid gap-4 mt-[100px]">
        <Card />
      </div>
    </div>
  );
}
