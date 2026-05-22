"use client";

import Image from "next/image";
import Nav from "@/components/Nav";
import Clock from "@/components/Clock";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl italic">Jacob Fedrigon</h1>
        <Image
          src="/headshot.jpeg"
          alt="Jacob Fedrigon"
          width={350}
          height={350}
          className="rounded h-[350px]"
          style={{ width: "auto" }}
          priority
        />
        <Clock />
        <Nav />
        <ThemeToggle />
      </div>
    </main>
  );
}
