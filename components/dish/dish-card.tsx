import Link from "next/link";
import type { Dish } from "@/lib/data/dishes";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <Link
      href={`/blends/${dish.slug}`}
      className="group flex min-h-36 flex-col justify-between rounded-[1.5rem] bg-[var(--zm-cream)] p-5 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--zm-purple)]"
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--zm-muted)]">
          {dish.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
          {dish.name}
        </h2>
      </div>
      <span
        aria-hidden="true"
        className="self-end text-xl transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
