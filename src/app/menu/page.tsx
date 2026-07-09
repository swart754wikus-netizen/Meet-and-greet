import type { Metadata } from "next";
import Link from "next/link";
import { MENU } from "./data";

export const metadata: Metadata = {
  title: "Menu — The Meet and Greet Tzaneen",
  description:
    "Full menu for The Meet and Greet Tzaneen — starters, salads, pasta, pizzas, grills, burgers, dessert, wine and drinks.",
};

export default function MenuPage() {
  return (
    <div className="flex flex-1 flex-col bg-[#fdf8f0] font-sans dark:bg-[#1a120b]">
      <nav className="sticky top-0 z-10 border-b border-[#7c2d12]/10 bg-[#fdf8f0]/90 backdrop-blur dark:border-[#f5e9d8]/10 dark:bg-[#1a120b]/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#7c2d12] font-[family-name:var(--font-display)] text-lg font-bold text-[#fef3c7]"
            >
              M&amp;G
            </span>
            <span className="hidden font-[family-name:var(--font-display)] text-lg font-semibold text-[#2a1a12] dark:text-[#f5e9d8] sm:inline">
              Meet and Greet
            </span>
          </Link>
          <Link
            href="/#visit"
            className="rounded-full bg-[#7c2d12] px-4 py-2 text-sm font-semibold text-[#fef3c7] transition-colors hover:bg-[#5c220d]"
          >
            Find us
          </Link>
        </div>
      </nav>

      <header className="border-b border-[#7c2d12]/10 bg-[#2a1a12] text-[#fdf8f0] dark:border-[#f5e9d8]/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-16 sm:px-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#f5c88a]">
            The Meet and Greet
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
            Full Menu
          </h1>
          <p className="max-w-xl text-[#f0dfc6]">
            Everything on offer, from starters to nightcaps. Prices in South
            African Rand.
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:px-10">
        {/* Category jump links */}
        <nav aria-label="Menu categories" className="flex flex-wrap gap-2">
          {MENU.map((category) => (
            <a
              key={category.title}
              href={`#${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="rounded-full border border-[#7c2d12]/15 bg-[#fdf1de]/70 px-3 py-1 text-xs font-medium text-[#7c2d12] hover:bg-[#fdf1de] dark:border-[#f5e9d8]/10 dark:bg-[#3a281b]/70 dark:text-[#f5c88a]"
            >
              {category.title}
            </a>
          ))}
        </nav>

        {MENU.map((category) => (
          <section
            key={category.title}
            id={category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="flex scroll-mt-20 flex-col gap-6"
          >
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#2a1a12] dark:text-[#f5e9d8] sm:text-3xl">
                {category.title}
              </h2>
              {category.note && (
                <p className="mt-1 text-sm italic text-[#a8602f]">
                  {category.note}
                </p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-1 rounded-2xl border border-[#7c2d12]/8 bg-[#fffbf5] p-5 shadow-sm shadow-[#2a1a12]/5 dark:border-[#f5e9d8]/10 dark:bg-[#241609]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-[#2a1a12] dark:text-[#f5e9d8]">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="flex-shrink-0 font-semibold text-[#a8602f]">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="text-sm text-[#6b4a34] dark:text-[#d8c3ab]">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-[#7c2d12]/10 py-8 text-center text-sm text-[#6b4a34] dark:border-[#f5e9d8]/10 dark:text-[#d8c3ab]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6">
          <Link href="/" className="underline hover:no-underline">
            ← Back to The Meet and Greet
          </Link>
        </div>
      </footer>
    </div>
  );
}
