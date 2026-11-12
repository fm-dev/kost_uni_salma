"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck, HeartHandshake, PhoneCall } from "lucide-react";
import { KOS_PROFILE, ROOMS, DURATION_PLANS } from "@/data/kosData";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    roomType: "Tipe Kamar AC",
    checkInDate: "",
    duration: "3 Bulan",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `Halo Uni Salma, saya ingin menjadwalkan survey / reservasi kamar kos:\n\n` +
      `👤 *Nama*: ${formData.name}\n` +
      `📱 *No. WhatsApp*: ${formData.phone}\n` +
      `🏠 *Pilihan Kamar*: ${formData.roomType}\n` +
      `📅 *Rencana Masuk*: ${formData.checkInDate || "Segera"}\n` +
      `⏳ *Durasi Sewa*: ${formData.duration}\n` +
      (formData.notes ? `📝 *Catatan Tambahan*: ${formData.notes}\n` : "") +
      `\nMohon konfirmasi ketersediaan unit dan jadwal survey. Terima kasih banyak Uni Salma!`;

    const waUrl = `https://wa.me/${KOS_PROFILE.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="booking-card" id="booking">
      <div className="booking-info-pane">
        <div>
          <p className="eyebrow">Kunjungan & reservasi</p>
          <h2 className="booking-info-title" id="booking-title">
            Jadwalkan kunjungan<br />ke Kos Uni Salma.
          </h2>
          <p className="booking-info-desc">
            Ceritakan rencana tinggal Anda. Formulir ini menyiapkan pesan WhatsApp
            untuk menanyakan kamar dan mengatur jadwal kunjungan.
          </p>

          <div className="booking-perks">
            <div className="booking-perk-item">
              <CheckCircle2 size={20} />
              <span>Tanpa Biaya Administrasi Tambahan</span>
            </div>
            <div className="booking-perk-item">
              <ShieldCheck size={20} />
              <span>Kamar mandi pribadi di setiap kamar</span>
            </div>
            <div className="booking-perk-item">
              <HeartHandshake size={20} />
              <span>Berkomunikasi langsung dengan pengelola</span>
            </div>
          </div>
        </div>

        <div className="booking-contact-quick">
          <div className="booking-contact-label">Kontak Pengelola Langsung</div>
          <div className="booking-contact-value">
            <PhoneCall
              size={18}
              style={{ display: "inline-block", marginRight: "8px" }}
            />
            {KOS_PROFILE.whatsappNumber.replace(/^62/, "0")}
          </div>
          <div
            style={{ fontSize: "0.8rem", color: "#d1e7dd", marginTop: "4px" }}
          >
            {KOS_PROFILE.operationalHours}
          </div>
        </div>
      </div>

      <div className="booking-form-pane">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Nama lengkap *
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Contoh: Aulia Putri"
              className="form-input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Nomor WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Contoh: 081234567890"
                className="form-input"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="checkInDate">
                Rencana Tanggal Masuk
              </label>
              <input
                id="checkInDate"
                type="date"
                className="form-input"
                value={formData.checkInDate}
                onChange={(e) =>
                  setFormData({ ...formData, checkInDate: e.target.value })
                }
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="roomType">
                Pilihan Tipe Kamar
              </label>
              <select
                id="roomType"
                className="form-select"
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({ ...formData, roomType: e.target.value })
                }
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="duration">
                Rencana Durasi Sewa
              </label>
              <select
                id="duration"
                className="form-select"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              >
                {DURATION_PLANS.map((p) => (
                  <option key={p.months} value={p.label}>
                    {p.label} ({p.badge})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="notes">
              Catatan atau pertanyaan
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="Contoh: Bawa kendaraan motor, ingin survey Sabtu jam 10 pagi..."
              className="form-textarea"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center", padding: "14px" }}
          >
            <Send size={18} />
            Lanjutkan ke WhatsApp
          </button>

          {submitted && (
            <p
              className="form-status"
              role="status"
            >
              Pesan disiapkan. Kirim pesan di WhatsApp untuk melanjutkan permintaan Anda.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
