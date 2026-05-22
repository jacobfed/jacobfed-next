"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "faq" },
  {
    href: "https://drive.google.com/file/d/1FNfAkvAMsv0bqTqd9WchzbnR2e4IwjK9/view?usp=sharing",
    label: "resume",
    external: true,
  },
  { href: "/contact", label: "contact" },
  { href: "/reading", label: "books" },
  { href: "/photography", label: "photography" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm">
      {links.map((link, i) => (
        <span key={link.href}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? "font-semibold"
                  : "hover:underline"
              }
            >
              {link.label}
            </Link>
          )}
          {i < links.length - 1 && (
            <span className="mx-1 text-gray-400 dark:text-gray-500"> // </span>
          )}
        </span>
      ))}
    </nav>
  );
}
