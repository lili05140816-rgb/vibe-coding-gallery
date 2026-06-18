"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/discover", label: "发现" },
  { href: "/submit", label: "发布作品" },
  { href: "/me", label: "关于我们" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopTopNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-50 hidden px-6 md:block lg:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/85 bg-white/82 px-4 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.22)]">
            VC
          </span>
          <span className="text-base font-black text-slate-950">
            Vibe Coding 作品广场
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-white text-cyan-700 shadow-sm"
                    : "text-slate-600 hover:bg-white/80 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/submit"
          className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2.5 text-sm font-black text-white shadow-[0_14px_30px_rgba(15,23,42,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_38px_rgba(15,23,42,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
        >
          提交作品
        </Link>
      </div>
    </header>
  );
}
