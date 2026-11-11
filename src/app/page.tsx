import Image from "next/image";
import Navbar from "@/components/Navbar";
import RoomFilter from "@/components/RoomFilter";
import PriceCalculator from "@/components/PriceCalculator";
import GalleryViewer from "@/components/GalleryViewer";
import FAQAccordion from "@/components/FAQAccordion";
import BookingForm from "@/components/BookingForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SiteMotion from "@/components/SiteMotion";
import { KOS_PROFILE, AMENITIES, POINTS_OF_INTEREST, TESTIMONIALS, ROOMS } from "@/data/kosData";
import { ArrowDown, ArrowUpRight, Car, Check, Coffee, Droplets, MapPin, Shirt, ShieldCheck, Sparkles, Star, Wind } from "lucide-react";

const amenityIcons = { Droplets, Car, Coffee, Sparkles, Wind, ShieldCheck, Shirt };
const startingPrice = new Intl.NumberFormat("id-ID").format(Math.min(...ROOMS.map((room) => room.priceMonthly)));

export default function Home() {
  return (
    <SiteMotion>
      <Navbar />
      <main id="top" tabIndex={-1}>
        <section className="hero hero--place" id="hero" data-enter aria-labelledby="hero-title">
          <div className="hero-photo" data-enter-media>
            <Image src="/images/hero.jpg" alt="Bangunan Kos Uni Salma dengan balkon dan halaman hijau" fill preload sizes="(max-width: 1023px) 180vh, 100vw" className="hero-image" />
          </div>
          <div className="container wrap hero-text">
            <div className="hero-heading">
              <p className="eyebrow"><MapPin size={14} /> Air Jamban, Mandau · Riau</p>
              <h1 id="hero-title">Kos nyaman<br />di Air Jamban.</h1>
            </div>
            <div className="hero__text">
              <p className="hero__lead">Kamar AC & kipas angin, mulai Rp{startingPrice}/bulan. Kamar mandi sendiri, perabot sudah tersedia.</p>
              <a href="#booking-section" className="btn btn--primary">Jadwalkan survei <ArrowUpRight size={18} className="m-arrow" /></a>
              <a href="#kamar" className="hero-room-link link">Lihat pilihan kamar <ArrowDown size={15} /></a>
            </div>
          </div>
        </section>

        <section className="section" id="lokasi" aria-labelledby="location-title">
          <div className="container wrap">
            <div className="section-header section-header--split">
              <div><p className="eyebrow">01 / Lingkungan</p><h2 id="location-title">Dekat dengan<br />keseharian Anda.</h2></div>
              <p className="section-subtitle">Di Gg. Puyuh, Air Jamban. Akses ke kawasan kerja, tempat belanja, dan kebutuhan harian di Mandau.</p>
            </div>
            <div className="location-grid">
              <div className="location-photo" data-moment="picture-develops" data-moment-opts='{"look":"film"}'>
                <Image src="/images/parking.jpg" alt="Area parkir berkanopi untuk mobil dan motor" fill sizes="(max-width: 767px) 100vw, 55vw" />
              </div>
              <div className="location-details">
                <div className="location-address"><MapPin size={20} /><div><h3>Gg. Puyuh, Air Jamban</h3><p>Kecamatan Mandau, Bengkalis, Riau</p></div></div>
                <ul className="poi-list">
                  {POINTS_OF_INTEREST.map((poi) => <li className="poi-item" key={poi.name}><div><span className="poi-name">{poi.name}</span><span className="poi-sub">{poi.category}</span></div><span className="poi-time">{poi.distanceTime}</span></li>)}
                </ul>
                <a className="link location-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(KOS_PROFILE.mapPlusCode)}`} target="_blank" rel="noopener noreferrer">Buka Google Maps <ArrowUpRight size={17} /></a>
                <p className="small-note">Waktu tempuh dapat berubah sesuai kondisi perjalanan.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="kamar" aria-labelledby="rooms-title">
          <div className="container wrap">
            <div className="section-header section-header--split">
              <div><p className="eyebrow">02 / Pilihan kamar</p><h2 id="rooms-title">Pilihan kamar<br />untuk keseharian Anda.</h2></div>
              <p className="section-subtitle">Dua pilihan dengan kamar mandi dalam, tempat tidur, lemari, serta meja dan kursi. Tinggal pilih AC atau kipas angin.</p>
            </div>
            <RoomFilter />
          </div>
        </section>

        <section className="section" id="fasilitas" aria-labelledby="amenities-title" data-moment="word-highlight">
          <div className="container wrap">
            <div className="section-header section-header--split">
              <div><p className="eyebrow">03 / Fasilitas kos</p><h2 id="amenities-title">Ruang untuk<br />rutinitas sehari-hari.</h2></div>
              <p className="section-subtitle mo-wh__text">Masak di dapur bersama, simpan kendaraan di garasi, dan pulang ke kamar dengan kamar mandi sendiri.</p>
            </div>
            <div className="amenities-layout">
              <div className="amenities-photo"><Image src="/images/pantry.jpg" alt="Dapur bersama dengan meja dan peralatan memasak" fill sizes="(max-width: 1023px) 100vw, 65vw" /></div>
              <div className="amenities-grid">{AMENITIES.map((amenity, index) => {
                const Icon = amenityIcons[amenity.iconName as keyof typeof amenityIcons] || Check;
                return <div className="amenity-item" key={amenity.id}><span className="amenity-number">0{index + 1}</span><Icon size={21} strokeWidth={1.5} /><h3>{amenity.title.replace(" di Semua Kamar", "").replace("Full Furnished (Kasur, Lemari, Meja, Kursi)", "Perabot kamar tersedia").replace("Garasi Luas & Parkiran Luas", "Garasi & parkir berkanopi")}</h3><p>{amenity.description}</p></div>;
              })}</div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="kalkulator" aria-labelledby="calculator-title">
          <div className="container wrap">
            <div className="section-header section-header--split">
              <div><p className="eyebrow">04 / Rencana sewa</p><h2 id="calculator-title">Biaya kos,<br />jelas dari awal.</h2></div>
              <p className="section-subtitle">Bandingkan biaya bulanan dan paket sewa. Perhitungan mengikuti tipe kamar serta durasi yang Anda pilih.</p>
            </div>
            <PriceCalculator />
          </div>
        </section>

        <section className="section" id="galeri" aria-labelledby="gallery-title">
          <div className="container wrap">
            <div className="section-header section-header--split">
              <div><p className="eyebrow">05 / Galeri</p><h2 id="gallery-title">Lihat setiap sudutnya.</h2></div>
              <p className="section-subtitle">Dari kamar sampai ruang bersama. Buka foto untuk melihat detail, lalu jadwalkan kunjungan Anda.</p>
            </div>
            <GalleryViewer />
          </div>
        </section>

        <section className="section section-muted" id="testimoni" aria-labelledby="testimonials-title">
          <div className="container wrap">
            <div className="section-header"><p className="eyebrow">06 / Cerita penghuni</p><h2 id="testimonials-title">Tentang tinggal di sini.</h2></div>
            <div className="testimonials-grid">{TESTIMONIALS.map((review) => <figure className="testimonial-card" key={review.id}><div className="testi-stars" aria-label={`${review.rating} dari 5 bintang`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={15} fill="currentColor" aria-hidden="true" />)}</div><blockquote>“{review.quote}”</blockquote><figcaption className="testi-author"><span className="testi-avatar" aria-hidden="true">{review.initials}</span><div><span className="testi-name">{review.name}</span><span className="testi-role">{review.role}</span></div></figcaption></figure>)}</div>
          </div>
        </section>

        <section className="section booking-section" id="booking-section" aria-labelledby="booking-title">
          <div className="container wrap"><BookingForm /></div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="container wrap faq-layout">
            <div className="section-header"><p className="eyebrow">07 / Tanya jawab</p><h2 id="faq-title">Sebelum<br />pindah ke sini.</h2><p className="section-subtitle">Informasi kamar, fasilitas, dan cara menjadwalkan kunjungan.</p></div>
            <FAQAccordion />
          </div>
        </section>
      </main>

      <footer className="footer closing">
        <div className="container wrap">
          <div className="footer-top"><div><p className="eyebrow">Kos Uni Salma · Air Jamban</p><h2>Kamar berikutnya,<br />mulai dari sini.</h2></div><a href="#booking-section" className="btn btn--primary">Jadwalkan survei <ArrowUpRight size={18} className="m-arrow" /></a></div>
          <div className="footer-grid"><a href="#hero" className="brand-logo footer-brand"><span className="brand-mark" aria-hidden="true">us.</span><span className="brand-title">Kos Uni Salma</span></a><div><h3>Temukan kami</h3><p>{KOS_PROFILE.address}</p><a className="footer-link" href={`mailto:${KOS_PROFILE.email}`}>{KOS_PROFILE.email}</a></div><div><h3>Waktu kunjungan</h3><p>{KOS_PROFILE.operationalHours}</p><a href={`https://wa.me/${KOS_PROFILE.whatsappNumber}`} className="footer-link" target="_blank" rel="noopener noreferrer">Hubungi Uni Salma <ArrowUpRight size={14} /></a></div><nav aria-label="Navigasi footer"><a className="footer-link" href="#kamar">Pilihan kamar</a><a className="footer-link" href="#fasilitas">Fasilitas</a><a className="footer-link" href="#galeri">Galeri</a><a className="footer-link" href="#faq">Tanya jawab</a></nav></div>
          <div className="footer-bottom"><span>© 2026 {KOS_PROFILE.name}</span><span>Gg. Puyuh, Air Jamban, Mandau</span></div>
        </div>
      </footer>
      <FloatingWhatsApp />
    </SiteMotion>
  );
}
