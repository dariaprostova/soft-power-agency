import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { CookieConsent } from "./components/CookieConsent";

const title = "Soft Power Agency — Experiences People Carry With Them";
const description = "An independent experience agency founded by Dasha Prostova. We create events, spaces and cultural moments that shape how people feel.";

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") ?? incoming.get("host") ?? "softpowerspace.com";
  const protocol = incoming.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: new URL("/og.png", base).toString(), width: 1200, height: 630, alt: "Soft Power Agency" }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<CookieConsent /></body></html>;
}
