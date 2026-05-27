import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import NvimEasterEgg from "@/components/NvimEasterEgg";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jacob Fedrigon",
  description: "Jacob Fedrigon's personal website.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body className="antialiased text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 font-[family-name:var(--font-jetbrains-mono)]">
        {children}
        <NvimEasterEgg />
      </body>
    </html>
  );
}
