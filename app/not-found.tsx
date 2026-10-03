import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--zm-white)] p-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--zm-muted)]">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-[-0.05em]">
          Blend not found.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--zm-ink)] px-6 py-3 font-bold text-white"
        >
          Back to ZoopyMix
        </Link>
      </div>
    </main>
  );
}
