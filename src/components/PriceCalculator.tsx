"use client";

import { useState } from "react";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { ROOMS, DURATION_PLANS, KOS_PROFILE, formatPriceRange } from "@/data/kosData";

function calculateTotals(priceMonthly: number, months: number, discountPercent: number) {
  const baseTotal = priceMonthly * months;
  const discount = Math.round(baseTotal * discountPercent / 100);
  const total = baseTotal - discount;
  return { baseTotal, discount, total, monthly: Math.round(total / months) };
}

export default function PriceCalculator() {
  const [roomId, setRoomId] = useState("ac");
  const [months, setMonths] = useState(3);
  const room = ROOMS.find((item) => item.id === roomId) || ROOMS[0];
  const plan = DURATION_PLANS.find((item) => item.months === months) || DURATION_PLANS[0];
  const minimum = calculateTotals(room.priceMonthly, months, plan.discountPercent);
  const maximum = calculateTotals(room.priceMonthlyMax ?? room.priceMonthly, months, plan.discountPercent);
  const baseTotal = formatPriceRange(minimum.baseTotal, maximum.baseTotal);
  const discount = formatPriceRange(minimum.discount, maximum.discount);
  const total = formatPriceRange(minimum.total, maximum.total);
  const monthly = formatPriceRange(minimum.monthly, maximum.monthly);
  const quote = `Halo Uni Salma! Saya ingin menanyakan kamar di Kos Uni Salma dengan rincian:\n\nTipe kamar: ${room.name}\nDurasi: ${plan.label}\nHarga normal: ${baseTotal}\nDiskon: ${discount} (${plan.discountPercent}%)\nEstimasi total: ${total}\nSetara: ${monthly}/bulan\n\nMohon konfirmasi harga akhir dan ketersediaan kamar untuk saya survei.`;

  return <div className="calc-grid">
    <div className="calc-controls">
      <fieldset><legend><span>01</span> Pilih tipe kamar</legend><div className="calc-btn-group">{ROOMS.map((item) => <button type="button" key={item.id} className={`calc-toggle-btn ${roomId === item.id ? "active" : ""}`} aria-pressed={roomId === item.id} onClick={() => setRoomId(item.id)}><span>{item.tier === "ac" ? "Kamar AC" : "Kipas angin"}</span><small>{formatPriceRange(item.priceMonthly, item.priceMonthlyMax)} / bulan</small><span className="selection-dot" aria-hidden="true">{roomId === item.id && <Check size={12} />}</span></button>)}</div></fieldset>
      <fieldset><legend><span>02</span> Tentukan durasi sewa</legend><div className="calc-duration-group">{DURATION_PLANS.map((item) => <button type="button" key={item.months} className={`calc-duration-card ${months === item.months ? "active" : ""}`} aria-pressed={months === item.months} onClick={() => setMonths(item.months)}><span>{item.label}</span><small>{item.discountPercent ? `Hemat ${item.discountPercent}%` : "Bulanan"}</small></button>)}</div></fieldset>
      <p className="calc-note"><Check size={19} />Termasuk perabot kamar, kamar mandi dalam, akses dapur bersama, dan area parkir.</p>
    </div>
    <div className="calc-summary-panel"><p className="eyebrow">Ringkasan biaya</p><div aria-live="polite" aria-atomic="true"><div className="calc-summary-row"><span>{room.name}</span><span>{plan.label}</span></div><div className="calc-summary-row"><span>Harga normal</span><span>{baseTotal}</span></div><div className="calc-summary-row"><span>Potongan paket {plan.discountPercent > 0 && `(${plan.discountPercent}%)`}</span><span>− {discount}</span></div><div className="calc-total"><span>{room.priceMonthlyMax ? "Estimasi total pembayaran" : "Total pembayaran"}</span><strong>{total}</strong><p>Setara {monthly} / bulan</p></div>{minimum.discount > 0 && <p className="calc-savings"><ArrowRight size={15} /> Hemat {discount} untuk paket ini.</p>}</div><a href={`https://wa.me/${KOS_PROFILE.whatsappNumber}?text=${encodeURIComponent(quote)}`} target="_blank" rel="noopener noreferrer" className="btn btn--primary">Tanyakan paket ini <ArrowUpRight size={17} className="m-arrow" /></a><p className="small-note">Konfirmasikan pilihan kamar, harga akhir, dan ketersediaan dengan pengelola.</p></div>
  </div>;
}
