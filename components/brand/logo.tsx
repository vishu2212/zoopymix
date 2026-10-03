import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="ZoopyMix home"
      className="text-xl font-black tracking-[-0.05em]"
    >
      ZOOPYMIX
    </Link>
  );
}
