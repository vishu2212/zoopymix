import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zoopymix.com"),
  title: {
    default: "ZoopyMix — One Dish · One Blend · No Guesswork",
    template: "%s — ZoopyMix",
  },
  description:
    "Dish-specific Indian spice blends designed to make everyday cooking simpler.",
  applicationName: "ZoopyMix",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
