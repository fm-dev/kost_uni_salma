"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import { ROOMS, KOS_PROFILE, formatPriceRange, type RoomType } from "@/data/kosData";

export default function RoomFilter() {
  const [filter, setFilter] = useState("all");
  const rooms = filter === "all" ? ROOMS : ROOMS.filter((room) => room.tier === filter);
  const roomLink = (room: RoomType) => `https://wa.me/${KOS_PROFILE.whatsappNumber}?text=${encodeURIComponent(`Halo Uni Salma, saya ingin menanyakan ketersediaan kamar ${room.name} (${formatPriceRange(room.priceMonthly, room.priceMonthlyMax)}/bulan). Apakah masih tersedia?`)}`;

  return (
    <div>
      <div className="room-filter-nav" role="group" aria-label="Filter tipe kamar">{[["all", "Semua kamar"], ["ac", "Kamar AC"], ["kipas", "Kipas angin"]].map(([value, label]) => <button type="button" className={`room-filter-btn ${filter === value ? "active" : ""}`} aria-pressed={filter === value} onClick={() => setFilter(value)} key={value}>{label}</button>)}</div>
      <div className="rooms-grid" aria-live="polite">{rooms.map((room) => <article className="room-card card" key={room.id}>
        <a className="room-media m-zoom" href={roomLink(room)} target="_blank" rel="noopener noreferrer" aria-label={`Tanya ketersediaan ${room.name}`}><Image src={room.image} alt={room.name} fill sizes="(max-width: 767px) 100vw, 50vw" className="room-image" /></a>
        <div className="room-content">
          <div className="room-meta"><span>{room.tier === "ac" ? "01 / Berpendingin AC" : "02 / Kipas angin"}</span><span className="room-status"><span aria-hidden="true" />{room.availableRooms > 0 ? `${room.availableRooms} kamar tersedia` : "Penuh"}</span></div>
          <div className="room-title-row"><h3>{room.tier === "ac" ? "Kamar AC" : "Kamar kipas angin"}</h3><span className="room-size"><MoveUpRight size={15} />{room.size.replace(" Meter", " m")}</span></div>
          <p className="room-tagline">{room.tagline}</p>
          <ul className="room-features-list">{room.features.slice(0, 4).map((feature) => <li key={feature}><Check size={15} /><span>{feature}</span></li>)}</ul>
          <details className="room-extra"><summary>Lihat fasilitas lainnya</summary><ul className="room-features-list">{room.features.slice(4).map((feature) => <li key={feature}><Check size={15} /><span>{feature}</span></li>)}</ul></details>
          <div className="room-card-bottom"><p className="room-pricing"><strong>{formatPriceRange(room.priceMonthly, room.priceMonthlyMax)}</strong><span> / bulan</span></p><a href={roomLink(room)} target="_blank" rel="noopener noreferrer" className="link">Tanya kamar <ArrowUpRight size={17} /></a></div>
          <a href="#kalkulator" className="room-calculator-link link">Bandingkan paket sewa <ArrowUpRight size={14} /></a>
        </div>
      </article>)}</div>
    </div>
  );
}
