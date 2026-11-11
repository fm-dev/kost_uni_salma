"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { KOS_PROFILE } from "@/data/kosData";

export default function FloatingWhatsApp() {
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = document.querySelectorAll("#hero, #booking-section, footer");
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      if (bar.current) bar.current.hidden = visible.size > 0;
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  const waUrl = `https://wa.me/${KOS_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    "Halo Uni Salma, saya ingin tanya ketersediaan kamar dan info sewa kos..."
  )}`;

  return (
    <nav ref={bar} className="contact-bar" aria-label="Kontak cepat" hidden>
      <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn--primary"
      aria-label="Chat WhatsApp Uni Salma"
    >
      <MessageCircle size={18} />
      <span>Tanya Uni Salma</span>
      </a>
    </nav>
  );
}
