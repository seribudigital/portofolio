export interface ProjectDetails {
    headline: string;
    challenge: string;
    solution: string;
    result: string;
    techStack: string[];
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    gradient: string;
    icon: string;
    details: ProjectDetails;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        slug: "griya-harianto-utama",
        title: "Griya Harianto Utama",
        category: "Properti & Real Estate",
        description:
            "Landing page eksklusif untuk pemasaran properti residensial premium dengan galeri interaktif, tabel spesifikasi teknis, dan integrasi WhatsApp untuk konversi cepat.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portoghu.webp",
        gradient: "from-amber-500/20 via-orange-500/10 to-yellow-600/20",
        icon: "🏠",
        details: {
            headline:
                "Digitalisasi Pemasaran Properti: Dari Listing Konvensional ke Platform Eksklusif",
            challenge:
                "Menampilkan detail properti secara terstruktur dan estetik agar calon pembeli tidak kewalahan. Informasi yang tersebar di berbagai media sosial membuat calon investor kesulitan mendapatkan gambaran lengkap tentang proyek properti ini. Dibutuhkan sebuah platform yang mampu menyajikan semua informasi—mulai dari spesifikasi teknis, denah, harga, hingga galeri visual—dalam satu tempat yang mudah diakses dan profesional.",
            solution:
                "Kami membangun sebuah landing page modern dengan pendekatan desain yang bersih dan premium. Fitur utama meliputi galeri interaktif dengan lightbox untuk foto-foto properti beresolusi tinggi, tabel spesifikasi teknis yang bersih dan terstruktur sehingga mudah dibaca, serta integrasi langsung ke WhatsApp untuk konversi cepat — calon pembeli bisa langsung terhubung dengan tim sales hanya dengan satu klik.",
            result:
                "Peningkatan citra brand secara signifikan dari konvensional ke digital. Kemudahan akses informasi bagi calon investor 24/7 tanpa batas waktu. Proses kualifikasi lead yang lebih efisien karena calon pembeli sudah mendapatkan informasi lengkap sebelum menghubungi sales.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
        },
    },
    {
        id: 2,
        slug: "al-khoir-islamic-school",
        title: "Al-Khoir Islamic School",
        category: "Edukasi",
        description:
            "Landing page pendaftaran siswa baru dengan sistem registrasi online, dashboard admin real-time, dan portal informasi sekolah yang terintegrasi.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portoalkhoir.webp",
        gradient: "from-emerald-500/20 via-teal-500/10 to-green-600/20",
        icon: "🎓",
        details: {
            headline:
                "Digitalisasi Ekosistem Pendidikan: Membangun Platform Sekolah yang Modern dan Terintegrasi",
            challenge:
                "Proses pendaftaran siswa baru masih dilakukan secara manual dengan formulir kertas, menyebabkan antrian panjang dan data yang rentan tercecer. Informasi sekolah seperti jadwal, biaya, dan persyaratan tersebar di berbagai platform tanpa satu sumber informasi yang terpusat dan dapat diandalkan.",
            solution:
                "Kami merancang dan mengembangkan website sekolah profesional dengan sistem pendaftaran online terintegrasi, dashboard admin untuk manajemen data pendaftar secara real-time, fitur export data ke Excel untuk kemudahan administrasi, serta halaman informasi yang terstruktur mencakup jadwal pendaftaran, biaya, dan persyaratan secara lengkap.",
            result:
                "Efisiensi operasional meningkat drastis dengan berkurangnya pekerjaan manual. Data pendaftar tersentralisasi dan dapat diakses kapan saja oleh tim administrasi. Citra sekolah meningkat sebagai institusi yang modern dan profesional di mata orang tua calon siswa.",
            techStack: ["Next.js", "Tailwind CSS", "Firebase", "Firestore"],
        },
    },
    {
        id: 3,
        slug: "la-petite-royal-laundry",
        title: "La Petite Laundry & Royal Laundry Express",
        category: "Jasa & Layanan",
        description:
            "Website profesional untuk layanan jasa laundry dengan katalog layanan, pricelist interaktif, dan sistem pemesanan via WhatsApp.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portolapetite.webp",
        gradient: "from-sky-500/20 via-blue-500/10 to-indigo-600/20",
        icon: "👔",
        details: {
            headline:
                "Profesionalisasi Bisnis Laundry: Dari Operasional Tradisional ke Kehadiran Digital",
            challenge:
                "Bisnis laundry yang mengandalkan promosi mulut ke mulut dan media sosial saja kehilangan potensi pelanggan baru yang mencari layanan secara online. Informasi harga dan jenis layanan tidak tersedia secara transparan, membuat calon pelanggan ragu untuk menggunakan jasa mereka.",
            solution:
                "Kami membangun landing page profesional yang menampilkan identitas brand secara konsisten, katalog layanan lengkap dengan pricelist yang transparan dan mudah dipahami, galeri hasil kerja untuk membangun kepercayaan, serta tombol pemesanan langsung via WhatsApp yang memudahkan konversi pelanggan.",
            result:
                "Peningkatan kepercayaan pelanggan melalui kehadiran online yang profesional. Jangkauan pasar yang lebih luas di luar area sekitar outlet. Proses pemesanan yang lebih efisien karena pelanggan sudah mengetahui layanan dan harga sebelum menghubungi.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
    },
    {
        id: 4,
        slug: "adenfilter",
        title: "AdenFilter",
        category: "Produk & E-Commerce",
        description:
            "Website produk untuk sistem filter air rumah tangga dengan katalog produk, edukasi kualitas air, dan integrasi pemesanan langsung.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portoadenfilter.webp",
        gradient: "from-cyan-500/20 via-sky-500/10 to-blue-600/20",
        icon: "💧",
        details: {
            headline:
                "Membangun Kepercayaan Konsumen: Platform Digital untuk Produk Filter Air Rumah Tangga",
            challenge:
                "Produk filter air memerlukan edukasi yang mendalam agar konsumen memahami pentingnya kualitas air bersih dan manfaat produk. Tanpa platform digital yang informatif, calon pembeli sulit membedakan produk berkualitas dari kompetitor dan cenderung ragu untuk berinvestasi pada sistem filtrasi yang tepat.",
            solution:
                "Kami membangun website yang menggabungkan katalog produk dengan konten edukatif tentang kualitas air. Fitur utama meliputi halaman produk dengan spesifikasi teknis yang detail dan visual menarik, section edukasi tentang bahaya air yang tidak terfilter, perbandingan produk yang memudahkan keputusan pembelian, serta integrasi WhatsApp untuk konsultasi dan pemesanan langsung.",
            result:
                "Peningkatan konversi penjualan karena calon pembeli mendapatkan edukasi lengkap sebelum membeli. Brand positioning yang kuat sebagai penyedia solusi filter air terpercaya. Pengurangan waktu konsultasi pra-penjualan karena informasi produk sudah tersedia secara lengkap di website.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
    },
    {
        id: 5,
        slug: "ac-service",
        title: "AC Service Client",
        category: "Jasa & Layanan",
        description:
            "Website layanan jasa perbaikan dan perawatan AC dengan katalog layanan, area jangkauan, dan sistem booking via WhatsApp.",
        image: "/images/projects/ac-service.jpg",
        gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-600/20",
        icon: "❄️",
        details: {
            headline:
                "Digitalisasi Layanan Teknis: Platform Online untuk Jasa Perbaikan AC Profesional",
            challenge:
                "Bisnis jasa perbaikan AC sangat bergantung pada reputasi lokal dan rekomendasi personal. Tanpa kehadiran online, sulit menjangkau pelanggan baru di luar jaringan yang sudah ada. Calon pelanggan juga kesulitan mengetahui jenis layanan yang tersedia, estimasi biaya, dan apakah area mereka masuk dalam cakupan layanan.",
            solution:
                "Kami mengembangkan website profesional dengan tampilan yang kredibel dan informatif. Fitur meliputi katalog layanan lengkap (service, cleaning, instalasi, repair) dengan deskripsi detail, peta area jangkauan layanan, testimoni pelanggan untuk membangun kepercayaan, serta sistem booking cepat via WhatsApp yang memudahkan penjadwalan servis.",
            result:
                "Perluasan jangkauan pelanggan secara signifikan melalui pencarian online. Pengurangan waktu administrasi karena pelanggan sudah mendapat informasi lengkap sebelum menghubungi. Peningkatan profesionalisme dan kepercayaan brand di mata pelanggan baru.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
    },
    {
        id: 6,
        slug: "jago-angka",
        title: "Jago Angka",
        category: "Edukasi & Tools",
        description:
            "Sebuah proyek pengembangan aplikasi yang menitikberatkan pada efisiensi pemrosesan data dan keamanan tingkat tinggi. Kami mengimplementasikan manajemen API yang aman untuk memastikan integritas data tetap terjaga dalam lingkungan kerja yang dinamis.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portojagoangka.webp",
        gradient: "from-rose-500/20 via-pink-500/10 to-red-600/20",
        icon: "🔢",
        details: {
            headline:
                "Optimasi Performa & Keamanan: Platform Manajemen Data yang Presisi",
            challenge:
                "Mengelola integrasi API eksternal yang kompleks sambil memastikan kunci API tetap aman dan tidak terekspos ke publik.",
            solution:
                "Implementasi restriksi API, penggunaan environment variables yang ketat, dan optimasi query untuk kecepatan akses data.",
            result:
                "Platform yang stabil dengan sistem keamanan data yang terverifikasi dan performa loading yang optimal.",
            techStack: ["Next.js", "Tailwind CSS", "Firebase", "Firestore"],
        },
    },
    {
        id: 7,
        slug: "tabel-periodik",
        title: "Tabel Periodik Interaktif",
        category: "Edukasi",
        description:
            "Media pembelajaran interaktif yang dirancang untuk memudahkan siswa memahami tabel periodik unsur. Fokus pada kemudahan navigasi dan visualisasi data yang menarik untuk meningkatkan minat belajar digital.",
        image: "https://hujtpnndfhnxddglztdn.supabase.co/storage/v1/object/public/seribudigital/portotabel.webp",
        gradient: "from-teal-500/20 via-emerald-500/10 to-lime-600/20",
        icon: "⚛️",
        details: {
            headline:
                "E-Learning Visual: Eksplorasi Unsur Kimia melalui Antarmuka Modern",
            challenge:
                "Menyajikan data teknis yang padat dari puluhan unsur kimia ke dalam layout yang bersih dan responsif di semua perangkat.",
            solution:
                "Penggunaan grid sistem yang dinamis, filter kategori unsur berdasarkan golongan, dan animasi hover untuk detail informasi instan.",
            result:
                "Alat bantu belajar yang memudahkan siswa SMA melakukan riset mandiri secara visual dan menyenangkan.",
            techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
    },
];
