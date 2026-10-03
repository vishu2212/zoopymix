import { notFound } from "next/navigation";
import { Logo } from "@/components/brand/logo";
import { dishes } from "@/lib/data/dishes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dishes.map((dish) => ({ slug: dish.slug }));
}

export default async function BlendPage({ params }: Props) {
  const { slug } = await params;
  const dish = dishes.find((item) => item.slug === slug);

  if (!dish) notFound();

  return (
    <main className="min-h-screen bg-[var(--zm-white)] px-6 py-8 md:px-12 md:py-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <a href="/#dishes" className="text-sm font-bold uppercase tracking-[0.14em]">
          All dishes
        </a>
      </header>

      <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--zm-muted)]">
            {dish.eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(4rem,11vw,9rem)] font-black leading-[0.82] tracking-[-0.075em]">
            {dish.name}
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[var(--zm-muted)]">
            {dish.description}
          </p>
        </div>

        <div className="flex aspect-square items-center justify-center rounded-[2rem] bg-[var(--zm-lime)]">
          <div className="text-center">
            <p className="text-6xl font-black tracking-[-0.07em]">BLEND</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em]">
              Details coming
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
