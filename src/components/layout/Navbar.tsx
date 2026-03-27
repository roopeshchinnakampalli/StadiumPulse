"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <nav className="bg-secondary text-white py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold italic tracking-tight">
          Stadium<span className="font-normal">Pulse</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-white ${
              pathname === link.href ? "text-white" : "text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {/* Mobile menu trigger could go here */}
        <Link
          href="/register"
          className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="User Profile"
        >
          <User size={20} />
        </Link>
      </div>
    </nav>
  );
}
