export interface RoomType {
  id: string;
  name: string;
  tier: "ac" | "kipas";
  priceMonthly: number;
  size: string;
  availableRooms: number;
  image: string;
  tagline: string;
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PointOfInterest {
  name: string;
  category: string;
  distanceTime: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const KOS_PROFILE = {
  name: "Kos Uni Salma",
  tagline: "Hunian Kos Nyaman & Bersih dengan Kamar Mandi Dalam, Garasi Luas & Dapur Bersama",
  whatsappNumber: "6281289901234",
  address: "75JC+5QQ, Gg. Puyuh, Air Jamban, Kec. Mandau, Kabupaten Bengkalis, Riau 28784",
  mapPlusCode: "75JC+5QQ Air Jamban, Bengkalis Regency, Riau",
  instagram: "@kos.unisàlma",
  operationalHours: "Setiap Hari 08.00 - 21.00 WIB",
  email: "kontak@kosunisalma.com",
};

export const ROOMS: RoomType[] = [
  {
    id: "ac",
    name: "Tipe Kamar AC",
    tier: "ac",
    priceMonthly: 1100000,
    size: "3.5 x 4 Meter",
    availableRooms: 2,
    image: "/images/deluxe-room.jpg",
    tagline: "Kamar ber-AC sejuk & nyaman dengan kamar mandi dalam, tempat tidur, lemari, meja & kursi.",
    features: [
      "AC Dingin & Terawat Berkala",
      "Kamar Mandi Dalam Pribadi",
      "Tempat Tidur Nyaman (Kasur, Sprei & Bantal)",
      "Lemari Pakaian Pintu Kayu",
      "Meja & Kursi Belajar / Kerja",
      "Akses Dapur Bersama Lengkap",
      "Garasi Luas & Parkiran Luas Mobil & Motor",
      "Ventilasi & Jendela Sirkulasi Udara Alami",
    ],
  },
  {
    id: "kipas",
    name: "Tipe Kamar Kipas Angin",
    tier: "kipas",
    priceMonthly: 700000,
    size: "3.5 x 3.5 Meter",
    availableRooms: 3,
    image: "/images/kipas-room.jpg",
    tagline: "Pilihan hemat & adem dengan kamar mandi dalam, tempat tidur, lemari, meja & kursi.",
    features: [
      "Kipas Angin Dinding / Plafon Sejuk",
      "Kamar Mandi Dalam Pribadi",
      "Tempat Tidur Nyaman (Kasur, Sprei & Bantal)",
      "Lemari Pakaian Rapi",
      "Meja & Kursi Santai / Belajar",
      "Akses Dapur Bersama Lengkap",
      "Garasi Luas & Parkiran Luas Mobil & Motor",
      "Ventilasi Udara Segar & Jendela Terang",
    ],
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "bathroom",
    title: "Kamar Mandi Dalam di Semua Kamar",
    description: "Setiap kamar sudah memiliki kamar mandi pribadi yang bersih, higienis, dan menjaga privasi penuh penghuni.",
    iconName: "Droplets",
  },
  {
    id: "parking",
    title: "Garasi Luas & Parkiran Luas",
    description: "Area parkir dan garasi sangat lapang berkanopi untuk kendaraan mobil maupun motor dengan keamanan pagar tertutup.",
    iconName: "Car",
  },
  {
    id: "kitchen",
    title: "Dapur Bersama Lengkap",
    description: "Tersedia dapur bersama dengan kompor, kulkas, peralatan memasak, dan dispenser air minum siap pakai.",
    iconName: "Coffee",
  },
  {
    id: "furniture",
    title: "Full Furnished (Kasur, Lemari, Meja, Kursi)",
    description: "Semua kamar sudah dilengkapi tempat tidur nyaman, lemari pakaian, serta meja dan kursi untuk belajar atau bekerja.",
    iconName: "Sparkles",
  },
  {
    id: "ac-fan",
    title: "Pilihan Tipe AC & Kipas Angin",
    description: "Tersedia 2 pilihan kamar: Tipe AC bagi yang ingin udara ekstra sejuk, dan Tipe Kipas Angin yang hemat dan adem.",
    iconName: "Wind",
  },
  {
    id: "security",
    title: "Lingkungan Aman & Nyaman",
    description: "Lokasi tenang di Gg. Puyuh Air Jamban, lingkungan ramah, asri, dan aman untuk istirahat setelah beraktivitas.",
    iconName: "ShieldCheck",
  },
  {
    id: "water",
    title: "Air Bersih Jernih & Lancar",
    description: "Pasokan air sumur/PAM jernih dan lancar 24 jam dengan penampungan tandon cadangan.",
    iconName: "Droplets",
  },
  {
    id: "laundry",
    title: "Area Cuci & Jemur Pakaian",
    description: "Tersedia area khusus untuk mencuci dan menjemur pakaian yang terlindung dari hujan.",
    iconName: "Shirt",
  },
];

export const DURATION_PLANS = [
  {
    months: 1,
    label: "1 Bulan",
    discountPercent: 0,
    badge: "Fleksibel",
    description: "Pembayaran sewa bulanan reguler",
  },
  {
    months: 3,
    label: "3 Bulan",
    discountPercent: 5,
    badge: "Hemat 5%",
    description: "Diskon 5% untuk sewa 3 bulan",
  },
  {
    months: 6,
    label: "6 Bulan",
    discountPercent: 10,
    badge: "Hemat 10%",
    description: "Hemat ratusan ribu untuk sewa 6 bulan",
  },
  {
    months: 12,
    label: "1 Tahun",
    discountPercent: 15,
    badge: "Super Hemat 15%",
    description: "Diskon 15% untuk sewa tahunan",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "1",
    title: "Gedung Depan Kos Uni Salma",
    category: "Eksterior",
    image: "/images/hero.jpg",
    sizeClass: "large",
    description: "Bangunan asri dan tertata di Gg. Puyuh, Air Jamban, Mandau.",
  },
  {
    id: "2",
    title: "Garasi Luas & Parkiran Berkanopi",
    category: "Fasilitas Parkir",
    image: "/images/parking.jpg",
    sizeClass: "medium",
    description: "Area garasi dan parkiran lapang untuk mobil dan motor penghuni.",
  },
  {
    id: "3",
    title: "Kamar Tipe AC Full Furnished",
    category: "Kamar AC",
    image: "/images/deluxe-room.jpg",
    sizeClass: "regular",
    description: "Lengkap dengan AC dingin, kasur empuk, lemari, serta meja dan kursi.",
  },
  {
    id: "4",
    title: "Kamar Tipe Kipas Angin",
    category: "Kamar Kipas",
    image: "/images/kipas-room.jpg",
    sizeClass: "regular",
    description: "Adem, bersih, nyaman dengan tempat tidur, lemari, meja & kursi.",
  },
  {
    id: "5",
    title: "Kamar Mandi Dalam Pribadi",
    category: "Sanitasi",
    image: "/images/bathroom.jpg",
    sizeClass: "regular",
    description: "Tersedia kamar mandi dalam bersih di setiap kamar tanpa perlu antre.",
  },
  {
    id: "6",
    title: "Dapur Bersama Lengkap",
    category: "Fasilitas Bersama",
    image: "/images/pantry.jpg",
    sizeClass: "regular",
    description: "Area dapur bersama untuk memasak harian, lengkap dengan kompor & kulkas.",
  },
];

export const POINTS_OF_INTEREST: PointOfInterest[] = [
  {
    name: "Jl. Hangtuah & Sentra Kuliner Duri",
    category: "Pusat Makanan & Kebutuhan",
    distanceTime: "3 Menit (800 m)",
    iconName: "UtensilsCrossed",
  },
  {
    name: "Simpang Pokok Jengkol & Jl. Sudirman",
    category: "Pusat Kota Mandau",
    distanceTime: "6 Menit (2.2 km)",
    iconName: "Train",
  },
  {
    name: "Mall Mandau City (Mancy) & Pasar",
    category: "Belanja & Hiburan",
    distanceTime: "7 Menit (2.8 km)",
    iconName: "ShoppingBag",
  },
  {
    name: "RSUD Mandau & Fasilitas Medis",
    category: "Kesehatan",
    distanceTime: "6 Menit (2.5 km)",
    iconName: "HeartPulse",
  },
  {
    name: "Kawasan Perkantoran & PHR Duri",
    category: "Area Kerja",
    distanceTime: "8-10 Menit (3.8 km)",
    iconName: "GraduationCap",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rahmat Hidayat",
    role: "Karyawan Lapangan di Mandau",
    rating: 5,
    quote:
      "Garasi dan parkirannya sangat luas! Saya bawa mobil pribadi tidak pernah pusing cari tempat parkir. Pagar gerbangnya aman, kamar mandinya ada di dalam, dan Uni Salma orangnya sangat ramah.",
    initials: "RH",
  },
  {
    id: "2",
    name: "Dewi Anggraini",
    role: "Staf Administrasi",
    rating: 5,
    quote:
      "Tinggal di kamar AC Kos Uni Salma rasanya nyaman banget sehabis kerja seharian. Kamar mandi dalam bikin leluasa, perabotan meja kursi dan lemari sudah tersedia jadi tinggal bawa baju saja.",
    initials: "DA",
  },
  {
    id: "3",
    name: "Budi Santoso",
    role: "Pekerja Proyek Mandau Duri",
    rating: 5,
    quote:
      "Kamar tipe kipas anginnya adem dan sirkulasi udara bagus. Dapur bersamanya lengkap jadi bisa masak sarapan dan kopi sendiri sebelum berangkat. Rekomendasi kos terbaik di Air Jamban!",
    initials: "BS",
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa saja tipe kamar yang tersedia di Kos Uni Salma?",
    answer:
      "Tersedia 2 tipe pilihan kamar: Tipe Kamar AC dan Tipe Kamar Kipas Angin. Keduanya sudah dilengkapi tempat tidur, kasur, lemari pakaian, meja, kursi, dan kamar mandi dalam pribadi.",
  },
  {
    question: "Apakah semua kamar memiliki kamar mandi dalam?",
    answer:
      "Ya, 100% semua kamar di Kos Uni Salma memiliki kamar mandi dalam sendiri, sehingga Anda memiliki privasi penuh dan tidak perlu antre dengan penghuni lain.",
  },
  {
    question: "Apakah tersedia tempat parkir mobil dan motor?",
    answer:
      "Ya, Kos Uni Salma memiliki garasi luas dan area parkir luas berkanopi yang muat untuk mobil maupun motor dengan sistem keamanan gerbang pagar tertutup.",
  },
  {
    question: "Bolehkah penghuni memasak di kos?",
    answer:
      "Sangat boleh! Kami menyediakan fasilitas dapur bersama lengkap dengan kompor gas, kulkas, peralatan memasak, dan dispenser air minum yang dapat digunakan bersama.",
  },
  {
    question: "Di mana alamat lengkap Kos Uni Salma dan bagaimana cara surveinya?",
    answer:
      "Alamat kami di 75JC+5QQ, Gg. Puyuh, Air Jamban, Kec. Mandau, Kabupaten Bengkalis, Riau 28784. Anda dapat menjadwalkan survey langsung melalui formulir di website ini atau langsung menghubungi Uni Salma via WhatsApp.",
  },
];
