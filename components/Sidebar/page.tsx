export default function Sidebar() {
  return (
    <div
      className="fixed top-[20px] left-[20px] w-[280px] bg-white/60 rounded-[20px]"
      style={{ height: 'calc(100% - 40px)' }}
    >
      <div className="p-[20px] flex flex-col">
        <div>
          <h1 className="uppercase inline-flex items-center font-medium text-syNavy text-[20px]">
            <span className="mr-[10px] bg-custom-gradient w-[20px] h-[20px] rounded-[50%]"></span>
            kim so yeon
          </h1>
          <div className="flex justify-center items-center flex-col w-full mt-[20px] bg-white p-[10px_20px_20px_20px] rounded-[20px]">
            <div className="flex justify-between w-full">
              <span className="text-[25px]">🇰🇷</span>
              <span className="text-[25px]">👩🏼‍💻</span>
            </div>
            <div className="relative inline-flex justify-center bg-custom-gradient w-[120px] h-[120px] rounded-[50%]">
              <span
                className="absolute top-[50%] left-[50%] w-[110px] h-[110px] rounded-[50%] bg-white"
                style={{
                  transform: 'translate(-50%, -50%)'
                }}
              ></span>
            </div>
            <div className="mt-[20px] flex justify-center items-center flex-col">
              <h3 className="font-medium text-syNavy text-[25px]">
                KIM SO YEON
              </h3>
              <a
                href="sms:01026850404"
                className="text-[14px] text-syNavy block mt-[10px]"
              >
                010-2585-0404
              </a>
              <a
                href="mailto:soyean7979@naver.com"
                className="text-[14px] text-syNavy"
              >
                soyean7979@naver.com
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
