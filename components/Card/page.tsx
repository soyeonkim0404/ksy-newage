"use client";
import Link from "next/link";

export default function Card({ url, title, thumb, description, flag }) {
  const href = url || "#";
  const thumbSet = thumb || "";
  return (
    <Link href={href} className="relative flex">
      <div className="relative">
        <div>
          <img src={thumbSet} alt={title} />
        </div>
        <div className="absolute">
          <span>{flag}</span>
          <span>New</span>
        </div>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <ul>
          {description?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </Link>
  );
}
