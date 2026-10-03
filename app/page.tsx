const dishes = [
  "Chole",
  "Rajma",
  "Paneer",
  "Dal Tadka",
  "Aloo Sabzi",
  "Biryani",
];

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-[var(--zm-white)] px-6 py-8 md:px-12 md:py-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-black tracking-[-0.04em]">
            ZOOPYMIX
          </a>
          <span className="text-xs font-bold uppercase tracking-[0.18em]">
            One Dish · One Blend
          </span>
        </header>

        <div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--zm-muted)]">
            Indian cooking, simplified
          </p>
          <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.82] tracking-[-0.075em]">
            WHAT ARE YOU
            <br />
            COOKING TODAY?
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-7 text-[var(--zm-muted)]">
            One dish. One blend. No guesswork.
          </p>
        </div>

        <div className="mx-auto max-w-7xl border-t border-black/10 pt-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em]">
            Choose your dish
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {dishes.map((dish) => (
              <a
                key={dish}
                href="#"
                className="group flex min-h-28 items-end justify-between rounded-[1.5rem] bg-[var(--zm-cream)] p-5 transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="text-2xl font-black tracking-[-0.04em]">
                  {dish}
                </span>
                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
