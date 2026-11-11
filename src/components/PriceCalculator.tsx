"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { ROOMS, DURATION_PLANS, KOS_PROFILE } from "@/data/kosData";

export default function PriceCalculator() {
  const [roomId, setRoomId] = useState("ac");
  const [months, setMonths] = useState(3);
  const room = ROOMS.find((item) => item.id === roomId) || ROOMS[0];
  const plan = DURATION_PLANS.find((item) => item.months === months) || DURATION_PLANS[0];
  const baseTotal = room.priceMonthly * months;
  const discount = Math.round(baseTotal * plan.discountPercent / 100);
  const total = baseTotal - discount;
  const monthly = Math.round(total / months);
  const rupiah = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);
  const quote = `Halo Uni Salma! Saya ingin menanyakan kamar di Kos Uni Salma dengan rincian:\n\nTipe kamar: ${room.name}\nDurasi: ${plan.label}\nHarga normal: ${rupiah(baseTotal)}\nDiskon: ${rupiah(discount)} (${plan.discountPercent}%)\nTotal: ${rupiah(total)}\nSetara: ${rupiah(monthly)}/bulan\n\nApakah kamar masih tersedia untuk saya survei?`;

  return <div className="calc-grid">
    <div className="calc-controls">
      <fieldset><legend><span>01</span> Pilih tipe kamar</legend><div className="calc-btn-group">{ROOMS.map((item) => <button type="button" key={item.id} className={`calc-toggle-btn ${roomId === item.id ? "active" : ""}`} aria-pressed={roomId === item.id} onClick={() => setRoomId(item.id)}><span>{item.tier === "ac" ? "Kamar AC" : "Kipas angin"}</span><small>{rupiah(item.priceMonthly)} / bulan</small><span className="selection-dot" aria-hidden="true">{roomId === item.id && <Check size={12} />}</span></button>)}</div></fieldset>
      <fieldset><legend><span>02</span> Tentukan durasi sewa</legend><div className="calc-duration-group">{DURATION_PLANS.map((item) => <button type="button" key={item.months} className={`calc-duration-card ${months === item.months ? "active" : ""}`} aria-pressed={months === item.months} onClick={() => setMonths(item.months)}><span>{item.label}</span><small>{item.discountPercent ? `Hemat ${item.discountPercent}%` : "Bulanan"}</small></button>)}</div></fieldset>
      <p className="calc-note"><Check size={19} />Termasuk perabot kamar, kamar mandi dalam, akses dapur bersama, dan area parkir.</p>
    </div>
    <div className="calc-summary-panel"><p className="eyebrow">Ringkasan biaya</p><div aria-live="polite" aria-atomic="true"><div className="calc-summary-row"><span>{room.name}</span><span>{plan.label}</span></div><div className="calc-summary-row"><span>Harga normal</span><span>{rupiah(baseTotal)}</span></div><div className="calc-summary-row"><span>Potongan paket {plan.discountPercent > 0 && `(${plan.discountPercent}%)`}</span><span>− {rupiah(discount)}</span></div><div className="calc-total"><span>Total pembayaran</span><strong>{rupiah(total)}</strong><p>Setara {rupiah(monthly)} / bulan</p></div>{discount > 0 && <p className="calc-savings"><ArrowRight size={15} /> Hemat {rupiah(discount)} untuk paket ini.</p>}</div><a href={`https://wa.me/${KOS_PROFILE.whatsappNumber}?text=${encodeURIComponent(quote)}`} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Tanyakan paket ini <ArrowUpRight size={17} className="m-arrow" /></a><p className="small-note">Konfirmasikan harga dan ketersediaan dengan pengelola.</p></div>
  </div>;
}
