"use client";
import { useEffect, useState } from "react";
export function ConsentVideo({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [accepted, setAccepted] = useState(false);
  useEffect(() => { setAccepted(window.localStorage.getItem("soft-power-media-consent") === "accepted"); const update = (event: Event) => setAccepted((event as CustomEvent).detail === "accepted"); window.addEventListener("soft-power-consent", update); return () => window.removeEventListener("soft-power-consent", update) }, []);
  if (accepted) return <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />;
  return <a className="videoPlaceholder" href={`https://youtu.be/${id}`} target="_blank" rel="noreferrer" aria-label={`Watch ${title} on YouTube`}><img src={poster} alt="" loading="lazy" /><span className="play">Watch film on YouTube ↗</span></a>
}
