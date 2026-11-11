"use client";

import { useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { KOS_PROFILE } from "@/data/kosData";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  ["#kamar", "Kamar"], ["#fasilitas", "Fasilitas"], ["#kalkulator", "Biaya"], ["#galeri", "Galeri"], ["#lokasi", "Lokasi"],
];

export default function Navbar() {
  const menu = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => menu.current?.close();

  return (
    <header className="navbar nav">
      <div className="container wrap navbar-inner">
        <a className="skip-link" href="#top">Lewati ke konten</a>
        <a href="#hero" className="brand-logo" aria-label="Kos Uni Salma, beranda"><span className="brand-mark" aria-hidden="true">us.</span><span className="brand-title">Kos Uni Salma<span className="brand-subtitle">Air Jamban · Mandau</span></span></a>
        <nav className="nav-links" aria-label="Navigasi utama">{links.map(([href, label]) => <a className="nav-link" href={href} key={href}>{label}</a>)}</nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#booking-section" className="btn btn--primary nav-booking">Jadwalkan survei <ArrowUpRight size={16} className="m-arrow" /></a>
          <button ref={toggle} type="button" className="icon-button mobile-toggle" aria-label="Buka menu navigasi" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded="false" onClick={() => { menu.current?.showModal(); toggle.current?.setAttribute("aria-expanded", "true"); }}><Menu size={23} /></button>
        </div>
      </div>
      <dialog ref={menu} id="mobile-menu" className="mobile-menu" aria-label="Menu navigasi" onClose={() => toggle.current?.setAttribute("aria-expanded", "false")}>
        <div className="mobile-menu-head"><span className="brand-title">Kos Uni Salma</span><button type="button" className="icon-button" onClick={close} aria-label="Tutup menu navigasi"><X size={24} /></button></div>
        <nav aria-label="Navigasi ponsel">{links.map(([href, label], index) => <a href={href} onClick={close} key={href}><span>0{index + 1}</span>{label}<ArrowUpRight size={23} /></a>)}<a href="#faq" onClick={close}><span>06</span>Tanya jawab<ArrowUpRight size={23} /></a></nav>
        <div className="mobile-menu-foot"><p>Gg. Puyuh, Air Jamban, Mandau</p><p>{KOS_PROFILE.operationalHours}</p><a href="#booking-section" className="btn btn--primary" onClick={close}>Jadwalkan survei <ArrowUpRight size={18} /></a></div>
      </dialog>
    </header>
  );
}
