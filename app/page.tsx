import Link from 'next/link';
import Weather from '@/components/Weather/page';

export default function Main() {
  return (
    <div className="home">
      <h2 className="block p-[20px] text-[30px] font-medium">
        <span>Welcome to my area! 🤗</span>
        <span className="ml-[30px]">I am a front-end developer! 👩🏼‍💻</span>
      </h2>
      <div className="w-full flex gap-4">
        <div className="flex-grow">
          <div className="flex gap-4 flex-wrap flex-col">
            {/*최근 프로젝트*/}
            <div className="w-full bg-white/60 backdrop-blur-sm rounded-[20px] p-[30px_30px_30px_30px]">
              <div className="flex justify-between items-center">
                <h4 className="text-[30px] text-syBlue font-medium">
                  My latest work
                </h4>
                <Link href="">More Works</Link>
              </div>
              <div className="grid gap-4 grid-cols-2 mt-[20px]">
                <div className="home-card w-full bg-syPurple/80 backdrop-blur-sm rounded-[20px] p-[20px] overflow-hidden">
                  <h5 className="text-white text-[25px] font-medium">
                    supabase 활용 스터디
                  </h5>
                  <p className="mt-[30px] text-[15px]">
                    supabase를 이용한 todolist
                    <br />
                    supabase를 이용한 api 불러오기
                    <br />
                    supabase의 realtime을 이용한 실시간 채팅 & 로그인
                  </p>
                </div>
                <div className="home-card w-full bg-syOrange/80 backdrop-blur-sm rounded-[20px] p-[20px] overflow-hidden">
                  <h5 className="text-white text-[25px] font-medium">
                    supabase 활용 스터디
                  </h5>
                  <p className="mt-[30px] text-[15px]">
                    supabase를 이용한 todolist
                    <br />
                    supabase를 이용한 api 불러오기
                    <br />
                    supabase의 realtime을 이용한 실시간 채팅 & 로그인
                  </p>
                </div>
              </div>
            </div>
            {/*2단*/}
            <div className="grid gap-4 grid-cols-2">
              {/*총 노출된 프로젝트 갯수*/}
              <div className="w-full bg-white/60 backdrop-blur-sm rounded-[20px] p-[30px_30px_0_30px]">
                <h4 className="text-[30px] text-syBlue font-medium">
                  Total number of works
                </h4>
                <div className="text-[100px] font-medium text-syGreen">878</div>
              </div>
              {/*애니메이션*/}
              <div className="w-full bg-white/60 backdrop-blur-sm rounded-[20px]">
                ㅇㅇㅇㅇ
              </div>
            </div>
            {/*나의 스킬*/}
            <div className="w-full bg-white/60 backdrop-blur-sm rounded-[20px]">
              ㅇㅇㅇ
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[540px]">
          {/*기상 api*/}
          <div>
            <Weather />
          </div>
          {/*애니메이션*/}
          <div></div>
          {/*캘린더 api*/}
          <div></div>
        </div>
      </div>
    </div>
  );
}
