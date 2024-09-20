import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-[200px] bg-syBlue p-[60px]">
      <Link href="/" className="text-white font-bold text-[20px]">
        <span className="text-white font-bold mr-[5px]">KIM</span>
        <span className="text-syGreen font-bold mr-[5px]">SO</span>
        <span className="text-syNavy font-bold">YEON</span>
      </Link>
      <div className="mt-[20px]">
        <p className="text-white/30">ⓚ This site is authorized by the owner.</p>
      </div>
    </div>
  );
}
