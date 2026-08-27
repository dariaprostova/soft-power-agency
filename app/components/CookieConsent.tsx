"use client";
import { useEffect, useState } from "react";
const KEY = "soft-power-media-consent";
export function CookieConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  useEffect(() => setChoice(window.localStorage.getItem(KEY)), []);
  useEffect(() => { const reopen = () => setChoice(null); window.addEventListener("soft-power-manage-consent", reopen); return () => window.removeEventListener("soft-power-manage-consent", reopen) }, []);
  const choose = (value: "accepted" | "rejected") => { window.localStorage.setItem(KEY, value); setChoice(value); window.dispatchEvent(new CustomEvent("soft-power-consent", { detail: value })) };
  if (choice) return null;
  return <aside className="cookieBanner" aria-label="Media privacy choices"><div><strong>Your privacy, your choice</strong><p>We use essential technology to run this site and optional YouTube content to show project films YouTube may process data if you accept</p><a href="/cookies">Cookie notice</a></div><div className="cookieActions"><button type="button" onClick={() => choose("rejected")}>Reject optional media</button><button type="button" onClick={() => choose("accepted")}>Accept optional media</button></div></aside>
}
export function ManageConsent() { return <button className="legalButton" type="button" onClick={() => window.dispatchEvent(new Event("soft-power-manage-consent"))}>Privacy choices</button> }
