"use client";
import { useState, useEffect } from "react";
import RollerText from "@/components/RollerText/page";

export default function StartLoading({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2초간 로딩 표시

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="startLoading">
        <RollerText textArr={["안녕", "Hello", "Hola", "Hai"]} />
      </div>
    );
  }
  return <>{children}</>;
}
