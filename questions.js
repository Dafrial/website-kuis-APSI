// Soal Pilihan Ganda (55 Soal) - UAS APSI
const multipleChoiceQuestions = [
    {
        id: 1,
        question: "Proses bisnis dapat didefinisikan sebagai …",
        options: [
            "Kumpulan data dalam sistem",
            "Koleksi aktivitas terstruktur yang menghasilkan produk/layanan",
            "Diagram alur kerja aplikasi",
            "Modul dalam sistem informasi"
        ],
        correctAnswer: 1,
        explanation: "Proses bisnis adalah koleksi aktivitas terstruktur yang saling terkait untuk menghasilkan produk atau layanan yang memiliki nilai bagi organisasi atau pelanggan."
    },
    {
        id: 2,
        question: "Elemen BPMN yang berfungsi memisahkan peran/penanggung jawab disebut …",
        options: [
            "Gateway",
            "Artifact",
            "Swimlane",
            "Event"
        ],
        correctAnswer: 2,
        explanation: "Swimlane dalam BPMN berfungsi untuk memisahkan aktivitas berdasarkan peran atau unit organisasi yang bertanggung jawab."
    },
    {
        id: 3,
        question: "Message Flow digunakan untuk …",
        options: [
            "Menghubungkan aktivitas dalam satu lane",
            "Menghubungkan proses antar pool",
            "Menghubungkan gateway",
            "Menjelaskan artifact"
        ],
        correctAnswer: 1,
        explanation: "Message Flow digunakan untuk menunjukkan aliran pesan antar pool yang berbeda, yang merepresentasikan komunikasi antar organisasi atau entitas yang berbeda."
    },
    {
        id: 4,
        question: "Subprocess digunakan dalam BPMN untuk …",
        options: [
            "Menghilangkan detail proses",
            "Leveling dan pengelompokan proses",
            "Menghubungkan pool",
            "Mengganti gateway"
        ],
        correctAnswer: 1,
        explanation: "Subprocess digunakan untuk leveling dan pengelompokan proses, memungkinkan dekomposisi proses kompleks menjadi bagian-bagian yang lebih kecil dan mudah dipahami."
    },
    {
        id: 5,
        question: "Inclusive Gateway memungkinkan …",
        options: [
            "Hanya satu jalur",
            "Semua jalur",
            "Satu atau lebih jalur",
            "Jalur berbasis event"
        ],
        correctAnswer: 2,
        explanation: "Inclusive Gateway (OR Gateway) memungkinkan satu atau lebih jalur dieksekusi berdasarkan kondisi yang terpenuhi."
    },
    {
        id: 6,
        question: "Use Case Diagram digunakan untuk …",
        options: [
            "Menampilkan struktur data",
            "Menjelaskan alur algoritma",
            "Menggambarkan bagaimana sistem digunakan oleh aktor",
            "Mendeskripsikan arsitektur jaringan"
        ],
        correctAnswer: 2,
        explanation: "Use Case Diagram menggambarkan fungsionalitas sistem dari perspektif pengguna (aktor) dan bagaimana mereka berinteraksi dengan sistem."
    },
    {
        id: 7,
        question: "System boundary berfungsi untuk …",
        options: [
            "Menentukan aktor",
            "Menentukan batas ruang lingkup sistem",
            "Menjelaskan relasi aktor",
            "Menentukan sequence proses"
        ],
        correctAnswer: 1,
        explanation: "System boundary adalah kotak yang mengelilingi use case dan menunjukkan batas atau ruang lingkup sistem yang sedang dimodelkan."
    },
    {
        id: 8,
        question: "Relasi yang menunjukkan komunikasi antara aktor dan use case disebut …",
        options: [
            "Include",
            "Extend",
            "Association",
            "Generalization"
        ],
        correctAnswer: 2,
        explanation: "Association adalah garis yang menghubungkan aktor dengan use case, menunjukkan bahwa aktor berpartisipasi atau berkomunikasi dengan use case tersebut."
    },
    {
        id: 9,
        question: "Diagram UML yang digunakan untuk menggambarkan kebutuhan fungsional sistem adalah …",
        options: [
            "Class Diagram",
            "Sequence Diagram",
            "Use Case Diagram",
            "Deployment Diagram"
        ],
        correctAnswer: 2,
        explanation: "Use Case Diagram adalah diagram UML yang secara khusus digunakan untuk menggambarkan kebutuhan fungsional sistem dari perspektif pengguna."
    },
    {
        id: 10,
        question: "Use Case Diagram merupakan dasar untuk membuat …",
        options: [
            "ERD",
            "Activity dan Sequence Diagram",
            "Deployment Diagram",
            "Database fisik"
        ],
        correctAnswer: 1,
        explanation: "Use Case Diagram menjadi dasar untuk membuat Activity Diagram (menjabarkan alur aktivitas) dan Sequence Diagram (menjabarkan interaksi objek)."
    },
    {
        id: 11,
        question: "Activity Diagram dalam UML digunakan untuk …",
        options: [
            "Menampilkan struktur kelas",
            "Memodelkan alur aktivitas atau workflow sistem",
            "Mendeskripsikan arsitektur fisik sistem",
            "Menunjukkan interaksi objek secara berurutan"
        ],
        correctAnswer: 1,
        explanation: "Activity Diagram digunakan untuk memodelkan alur aktivitas atau workflow dalam sistem, menunjukkan urutan langkah-langkah proses."
    },
    {
        id: 12,
        question: "Elemen yang digunakan untuk menunjukkan pengambilan keputusan adalah …",
        options: [
            "Fork",
            "Merge",
            "Decision Node (diamond)",
            "Activity"
        ],
        correctAnswer: 2,
        explanation: "Decision Node berbentuk diamond (belah ketupat) digunakan untuk menunjukkan titik pengambilan keputusan dengan kondisi tertentu."
    },
    {
        id: 13,
        question: "Fork dan Join pada Activity Diagram digunakan untuk …",
        options: [
            "Percabangan bersyarat",
            "Proses paralel",
            "Penggabungan data",
            "Interaksi aktor"
        ],
        correctAnswer: 1,
        explanation: "Fork digunakan untuk memecah alur menjadi beberapa proses paralel, sedangkan Join digunakan untuk menyatukan kembali proses paralel tersebut."
    },
    {
        id: 14,
        question: "Swimlane pada Activity Diagram berfungsi untuk …",
        options: [
            "Menentukan alur pesan",
            "Menunjukkan tanggung jawab aktor atau sistem",
            "Menyimpan data",
            "Menentukan kelas"
        ],
        correctAnswer: 1,
        explanation: "Swimlane pada Activity Diagram membagi diagram menjadi area-area yang menunjukkan tanggung jawab aktor atau komponen sistem tertentu."
    },
    {
        id: 15,
        question: "Decision \"PIN Valid?\" pada Activity Diagram menghasilkan …",
        options: [
            "Satu alur",
            "Alur tanpa kondisi",
            "Dua atau lebih alur bersyarat",
            "Alur paralel"
        ],
        correctAnswer: 2,
        explanation: "Decision node seperti 'PIN Valid?' menghasilkan dua atau lebih alur bersyarat, misalnya Ya (valid) dan Tidak (invalid)."
    },
    {
        id: 16,
        question: "Sequence Diagram digunakan untuk …",
        options: [
            "Memodelkan proses bisnis",
            "Menampilkan interaksi objek berdasarkan urutan waktu",
            "Menjelaskan struktur kelas",
            "Mendeskripsikan database"
        ],
        correctAnswer: 1,
        explanation: "Sequence Diagram menampilkan interaksi antar objek dalam urutan waktu, menunjukkan pertukaran pesan secara kronologis."
    },
    {
        id: 17,
        question: "Panah horizontal pada Sequence Diagram menunjukkan …",
        options: [
            "Aktivitas",
            "Urutan waktu",
            "Message (pesan) antar objek",
            "Relasi pewarisan"
        ],
        correctAnswer: 2,
        explanation: "Panah horizontal pada Sequence Diagram menunjukkan message atau pesan yang dikirim dari satu objek ke objek lain."
    },
    {
        id: 18,
        question: "Fragment alt pada Sequence Diagram digunakan untuk …",
        options: [
            "Proses paralel",
            "Perulangan",
            "Percabangan kondisi (if–else)",
            "Sinkronisasi"
        ],
        correctAnswer: 2,
        explanation: "Fragment 'alt' (alternative) digunakan untuk menunjukkan percabangan kondisi seperti if-else dalam Sequence Diagram."
    },
    {
        id: 19,
        question: "Dalam Sequence Diagram ATM, objek seperti MenuPIN dan MenuUtama termasuk …",
        options: [
            "Entity Class",
            "Boundary Class",
            "Control Class",
            "Utility Class"
        ],
        correctAnswer: 1,
        explanation: "MenuPIN dan MenuUtama adalah Boundary Class karena berfungsi sebagai antarmuka antara sistem dan aktor (pengguna)."
    },
    {
        id: 20,
        question: "Aktivitas \"cekKecukupanSaldo()\" pada Sequence Diagram Sistem ATM merupakan …",
        options: [
            "Message sinkron",
            "Message asinkron",
            "Method call antar objek",
            "Event eksternal"
        ],
        correctAnswer: 2,
        explanation: "cekKecukupanSaldo() adalah method call antar objek, yaitu pemanggilan metode dari satu objek ke objek lain."
    },
    {
        id: 21,
        question: "Class Diagram dalam UML digunakan untuk …",
        options: [
            "Memodelkan alur proses bisnis",
            "Menampilkan interaksi waktu antar objek",
            "Memetakan struktur statis sistem beserta kelas dan relasinya",
            "Menunjukkan arsitektur jaringan"
        ],
        correctAnswer: 2,
        explanation: "Class Diagram memetakan struktur statis sistem dengan menunjukkan kelas-kelas, atribut, metode, dan hubungan antar kelas."
    },
    {
        id: 22,
        question: "Operasi atau metode kelas dalam Class Diagram diletakkan pada …",
        options: [
            "Bagian atas",
            "Bagian tengah",
            "Bagian bawah",
            "Di luar kelas"
        ],
        correctAnswer: 2,
        explanation: "Dalam Class Diagram, struktur kelas terdiri dari: nama kelas (atas), atribut (tengah), dan metode/operasi (bawah)."
    },
    {
        id: 23,
        question: "Simbol visibilitas public pada Class Diagram ditandai dengan …",
        options: [
            "–",
            "#",
            "~",
            "+"
        ],
        correctAnswer: 3,
        explanation: "Simbol + (plus) menandakan visibilitas public, yang berarti dapat diakses dari mana saja."
    },
    {
        id: 24,
        question: "Simbol visibilitas private ditandai dengan …",
        options: [
            "+",
            "–",
            "#",
            "~"
        ],
        correctAnswer: 1,
        explanation: "Simbol - (minus) menandakan visibilitas private, yang berarti hanya dapat diakses dari dalam kelas itu sendiri."
    },
    {
        id: 25,
        question: "Hubungan antar kelas yang menyatakan \"terdiri atas\" disebut …",
        options: [
            "Asosiasi",
            "Pewarisan",
            "Agregasi",
            "Dependensi"
        ],
        correctAnswer: 2,
        explanation: "Agregasi adalah hubungan 'has-a' atau 'terdiri atas', menunjukkan bahwa satu kelas merupakan bagian dari kelas lain (whole-part relationship)."
    },
    {
        id: 26,
        question: "Class dapat diartikan sebagai …",
        options: [
            "Instance dari objek",
            "Template untuk membentuk objek",
            "Komponen hardware",
            "Struktur database"
        ],
        correctAnswer: 1,
        explanation: "Class adalah template atau blueprint untuk membentuk objek. Objek adalah instance dari class."
    },
    {
        id: 27,
        question: "Deployment Diagram digunakan untuk …",
        options: [
            "Memodelkan struktur kelas",
            "Menunjukkan interaksi objek",
            "Memvisualisasikan hubungan software dan hardware",
            "Mendeskripsikan proses bisnis"
        ],
        correctAnswer: 2,
        explanation: "Deployment Diagram memvisualisasikan arsitektur fisik sistem, menunjukkan bagaimana software didistribusikan pada hardware."
    },
    {
        id: 28,
        question: "Deployment Diagram paling tepat digunakan pada tahap …",
        options: [
            "Analisis kebutuhan",
            "Desain antarmuka",
            "Implementasi sistem",
            "Pengujian fungsional"
        ],
        correctAnswer: 2,
        explanation: "Deployment Diagram paling tepat digunakan pada tahap implementasi sistem karena menggambarkan konfigurasi deployment aktual."
    },
    {
        id: 29,
        question: "Node pada Deployment Diagram merepresentasikan …",
        options: [
            "Kelas",
            "Aktor",
            "Hardware dan paket software yang tidak dibuat sendiri",
            "Use case"
        ],
        correctAnswer: 2,
        explanation: "Node merepresentasikan resource komputasi seperti hardware (server, PC) atau software environment (OS, container)."
    },
    {
        id: 30,
        question: "Contoh node dalam Deployment Diagram adalah …",
        options: [
            "Class Account",
            "Web Server",
            "Use Case Login",
            "Sequence Message"
        ],
        correctAnswer: 1,
        explanation: "Web Server adalah contoh node dalam Deployment Diagram yang merepresentasikan hardware atau environment untuk deploy aplikasi."
    },
    {
        id: 31,
        question: "ERD (Entity Relationship Diagram) digunakan untuk …",
        options: [
            "Memodelkan alur proses bisnis",
            "Memodelkan interaksi antar objek",
            "Memodelkan struktur data dan hubungan antar data",
            "Mendeskripsikan arsitektur jaringan"
        ],
        correctAnswer: 2,
        explanation: "ERD digunakan untuk memodelkan struktur data dengan menunjukkan entitas, atribut, dan hubungan antar entitas."
    },
    {
        id: 32,
        question: "Komponen utama dalam ERD adalah …",
        options: [
            "Aktor, use case, dan relasi",
            "Entitas, atribut, dan relasi",
            "Kelas, metode, dan objek",
            "Tabel, field, dan record"
        ],
        correctAnswer: 1,
        explanation: "Komponen utama ERD adalah entitas (objek data), atribut (properti entitas), dan relasi (hubungan antar entitas)."
    },
    {
        id: 33,
        question: "Entitas dalam ERD merepresentasikan …",
        options: [
            "Proses bisnis",
            "Kegiatan sistem",
            "Objek atau kejadian penting yang datanya disimpan",
            "Relasi antar tabel"
        ],
        correctAnswer: 2,
        explanation: "Entitas merepresentasikan objek atau kejadian penting dalam domain bisnis yang datanya perlu disimpan dalam database."
    },
    {
        id: 34,
        question: "Atribut yang menjadi Primary Key pada entitas lain disebut …",
        options: [
            "Candidate Key",
            "Alternate Key",
            "Foreign Key",
            "Composite Key"
        ],
        correctAnswer: 2,
        explanation: "Foreign Key adalah atribut yang merupakan Primary Key dari entitas lain, digunakan untuk membuat relasi antar entitas."
    },
    {
        id: 35,
        question: "Simbol relasi dalam ERD biasanya digambarkan dengan …",
        options: [
            "Persegi panjang",
            "Elips",
            "Belah ketupat",
            "Lingkaran"
        ],
        correctAnswer: 2,
        explanation: "Relasi dalam ERD digambarkan dengan simbol belah ketupat (diamond) yang menghubungkan dua atau lebih entitas."
    },
    {
        id: 36,
        question: "Kamus Data (Data Dictionary) adalah …",
        options: [
            "Kumpulan tabel database",
            "Dokumen penjelasan detail elemen data dalam sistem",
            "Diagram alur data",
            "Struktur program"
        ],
        correctAnswer: 1,
        explanation: "Kamus Data adalah dokumen yang menjelaskan secara detail setiap elemen data dalam sistem termasuk nama, tipe, ukuran, dan deskripsi."
    },
    {
        id: 37,
        question: "Fungsi utama Kamus Data adalah …",
        options: [
            "Mengganti ERD",
            "Menyimpan data operasional",
            "Menyeragamkan definisi dan makna data",
            "Mengatur akses pengguna"
        ],
        correctAnswer: 2,
        explanation: "Kamus Data berfungsi menyeragamkan definisi dan makna data agar semua pihak memiliki pemahaman yang sama tentang data."
    },
    {
        id: 38,
        question: "Informasi yang biasanya terdapat dalam Kamus Data adalah …",
        options: [
            "Nama data, tipe data, panjang, dan keterangan",
            "Nama proses dan alur",
            "Struktur hardware",
            "Hak akses user"
        ],
        correctAnswer: 0,
        explanation: "Kamus Data berisi informasi seperti nama data, alias, tipe data, panjang/ukuran, format, nilai default, dan keterangan."
    },
    {
        id: 39,
        question: "Hubungan antara ERD dan Kamus Data adalah …",
        options: [
            "Tidak saling berhubungan",
            "Kamus Data menjelaskan detail elemen pada ERD",
            "ERD dibuat setelah Kamus Data",
            "Keduanya menggambarkan proses bisnis"
        ],
        correctAnswer: 1,
        explanation: "Kamus Data dan ERD saling melengkapi - ERD menggambarkan struktur visual, sedangkan Kamus Data menjelaskan detail setiap elemen."
    },
    {
        id: 40,
        question: "Kamus Data membantu pengembang dalam …",
        options: [
            "Mendesain UI",
            "Menghindari perbedaan interpretasi data",
            "Menentukan metode SDLC",
            "Menggambar BPMN"
        ],
        correctAnswer: 1,
        explanation: "Kamus Data membantu menghindari perbedaan interpretasi data antar anggota tim dengan memberikan definisi yang jelas dan konsisten."
    },
    {
        id: 41,
        question: "Wireframe dapat didefinisikan sebagai …",
        options: [
            "Desain visual final aplikasi",
            "Model interaktif sistem",
            "Cetak biru visual struktur antarmuka",
            "Diagram alur logika sistem"
        ],
        correctAnswer: 2,
        explanation: "Wireframe adalah cetak biru visual atau kerangka dasar yang menunjukkan struktur dan tata letak antarmuka pengguna."
    },
    {
        id: 42,
        question: "Karakteristik utama wireframe adalah …",
        options: [
            "Berwarna dan detail",
            "Fokus estetika",
            "Hitam putih dan low-fidelity",
            "Interaktif penuh"
        ],
        correctAnswer: 2,
        explanation: "Wireframe bersifat low-fidelity, biasanya hitam putih, fokus pada struktur dan layout tanpa detail visual."
    },
    {
        id: 43,
        question: "Komponen utama dalam wireframe meliputi …",
        options: [
            "Algoritma dan database",
            "Layout, navigasi, dan elemen interface",
            "Relasi kelas",
            "Use case"
        ],
        correctAnswer: 1,
        explanation: "Wireframe menampilkan komponen utama seperti layout halaman, elemen navigasi, dan penempatan elemen interface."
    },
    {
        id: 44,
        question: "Alat yang termasuk pembuatan wireframe digital adalah …",
        options: [
            "Microsoft Word",
            "Figma dan Balsamiq Mockups",
            "MySQL",
            "Visual Studio Code"
        ],
        correctAnswer: 1,
        explanation: "Figma dan Balsamiq Mockups adalah tools populer untuk membuat wireframe digital dengan berbagai fitur desain UI/UX."
    },
    {
        id: 45,
        question: "WND (Windows Navigation Diagram) berfungsi untuk …",
        options: [
            "Menggambarkan struktur database",
            "Memetakan navigasi antar layar aplikasi",
            "Menentukan warna UI",
            "Menyusun kode program"
        ],
        correctAnswer: 1,
        explanation: "WND memetakan navigasi antar layar/halaman dalam aplikasi, menunjukkan bagaimana pengguna berpindah dari satu layar ke layar lain."
    },
    {
        id: 46,
        question: "Perbedaan utama WND dan flowchart adalah …",
        options: [
            "Flowchart fokus navigasi, WND fokus logika",
            "WND fokus navigasi layar, flowchart fokus logika proses",
            "Keduanya sama",
            "Flowchart hanya untuk UI"
        ],
        correctAnswer: 1,
        explanation: "WND fokus pada navigasi antar layar/halaman, sedangkan flowchart fokus pada alur logika dan proses dalam sistem."
    },
    {
        id: 47,
        question: "Perbedaan low-fidelity dan high-fidelity prototype terletak pada …",
        options: [
            "Tujuan bisnis",
            "Tingkat detail dan kemiripan dengan produk akhir",
            "Jumlah pengguna",
            "Bahasa pemrograman"
        ],
        correctAnswer: 1,
        explanation: "Low-fidelity prototype sederhana dan abstrak, sedangkan high-fidelity prototype detail dan mirip dengan produk akhir."
    },
    {
        id: 48,
        question: "Tujuan utama UI adalah …",
        options: [
            "Kompleksitas fitur",
            "Keamanan sistem",
            "Menarik, intuitif, dan konsisten",
            "Kecepatan server"
        ],
        correctAnswer: 2,
        explanation: "UI (User Interface) bertujuan membuat antarmuka yang menarik secara visual, intuitif dalam penggunaan, dan konsisten dalam desain."
    },
    {
        id: 49,
        question: "UX (User Experience) berfokus pada …",
        options: [
            "Warna dan font",
            "Rasa dan pengalaman pengguna saat berinteraksi",
            "Kode program",
            "Arsitektur sistem"
        ],
        correctAnswer: 1,
        explanation: "UX berfokus pada keseluruhan pengalaman pengguna saat berinteraksi dengan sistem, termasuk kemudahan, kepuasan, dan efisiensi."
    },
    {
        id: 50,
        question: "Pernyataan yang tepat tentang UI dan UX adalah …",
        options: [
            "UI lebih penting dari UX",
            "UX hanya soal tampilan",
            "UI adalah wujud, UX adalah rasa pengalaman pengguna",
            "UI dan UX sama"
        ],
        correctAnswer: 2,
        explanation: "UI adalah tampilan visual (wujud), sedangkan UX adalah pengalaman keseluruhan pengguna (rasa). Keduanya saling melengkapi."
    },
    {
        id: 51,
        question: "Empathy Map digunakan untuk …",
        options: [
            "Mendesain database",
            "Memahami kebutuhan dan perasaan pengguna",
            "Menguji performa sistem",
            "Menyusun algoritma"
        ],
        correctAnswer: 1,
        explanation: "Empathy Map adalah alat untuk memahami pengguna lebih dalam, meliputi apa yang mereka pikirkan, rasakan, lihat, dan lakukan."
    },
    {
        id: 52,
        question: "Tahap akhir sebelum sistem diluncurkan adalah …",
        options: [
            "Prototyping",
            "UI Design",
            "UX Evaluation",
            "User Acceptance Test (UAT)"
        ],
        correctAnswer: 3,
        explanation: "UAT adalah tahap pengujian akhir oleh pengguna untuk memastikan sistem memenuhi kebutuhan sebelum diluncurkan."
    },
    {
        id: 53,
        question: "UAT dilakukan oleh …",
        options: [
            "Programmer",
            "System analyst",
            "End-user atau klien",
            "Administrator database"
        ],
        correctAnswer: 2,
        explanation: "UAT dilakukan oleh end-user atau klien yang akan menggunakan sistem untuk memastikan sistem sesuai kebutuhan mereka."
    },
    {
        id: 54,
        question: "Status hasil pengujian pada UAT biasanya berupa …",
        options: [
            "Valid/Invalid",
            "True/False",
            "Pass/Fail",
            "Done/Undone"
        ],
        correctAnswer: 2,
        explanation: "Hasil UAT biasanya menggunakan status Pass (lolos) atau Fail (gagal) untuk setiap skenario pengujian."
    },
    {
        id: 55,
        question: "Manfaat utama penggunaan wireframe hingga UAT adalah …",
        options: [
            "Mempercepat coding",
            "Menjamin sistem bebas bug",
            "Meningkatkan kualitas sistem dan kepuasan pengguna",
            "Mengurangi jumlah pengguna"
        ],
        correctAnswer: 2,
        explanation: "Proses dari wireframe hingga UAT memastikan sistem dikembangkan sesuai kebutuhan pengguna, meningkatkan kualitas dan kepuasan."
    }
];

// Soal Esai (15 Soal) dengan Keywords untuk Scoring
const essayQuestions = [
    {
        id: 1,
        question: "Jelaskan pengertian proses bisnis dan pentingnya pemodelan proses bisnis bagi organisasi!",
        keywords: ["aktivitas", "terstruktur", "produk", "layanan", "dokumentasi", "analisis", "standarisasi", "komunikasi", "optimasi", "compliance", "bottleneck", "stakeholder"],
        shortAnswer: "<strong>Proses Bisnis:</strong> Aktivitas terstruktur → menghasilkan produk/layanan<br><br><strong>Pentingnya:</strong><ul><li>📝 <strong>Dokumentasi</strong> - cara kerja sistematis</li><li>🔍 <strong>Analisis</strong> - temukan bottleneck</li><li>📊 <strong>Standarisasi</strong> - seragamkan proses</li><li>💬 <strong>Komunikasi</strong> - stakeholder paham</li><li>⚡ <strong>Optimasi</strong> - perbaikan proses</li><li>✅ <strong>Compliance</strong> - patuh regulasi</li></ul>",
        keyAnswer: "Proses bisnis adalah serangkaian aktivitas terstruktur dan saling terkait yang dilakukan untuk menghasilkan produk atau layanan tertentu yang bernilai bagi pelanggan atau organisasi.\n\nPentingnya pemodelan proses bisnis bagi organisasi:\n1. Dokumentasi - Mendokumentasikan cara kerja organisasi secara sistematis\n2. Analisis - Mengidentifikasi bottleneck, redundansi, dan area yang perlu diperbaiki\n3. Standarisasi - Menyeragamkan cara kerja di seluruh organisasi\n4. Komunikasi - Memudahkan komunikasi antar stakeholder tentang proses\n5. Optimasi - Sebagai dasar untuk perbaikan dan otomatisasi proses\n6. Compliance - Memastikan kepatuhan terhadap regulasi dan standar"
    },
    {
        id: 2,
        question: "Sebutkan dan jelaskan tiga jenis Gateway dalam BPMN!",
        keywords: ["exclusive", "xor", "parallel", "and", "inclusive", "or", "diamond", "jalur", "kondisi", "paralel", "alternatif"],
        shortAnswer: "<strong>3 Gateway BPMN:</strong><br><br>1️⃣ <strong>Exclusive (XOR)</strong> → pilih <u>SATU</u> jalur<br>Simbol: ◇ dengan X<br><br>2️⃣ <strong>Parallel (AND)</strong> → <u>SEMUA</u> jalur paralel<br>Simbol: ◇ dengan +<br><br>3️⃣ <strong>Inclusive (OR)</strong> → <u>SATU atau LEBIH</u> jalur<br>Simbol: ◇ dengan O",
        keyAnswer: "Tiga jenis Gateway dalam BPMN:\n\n1. Exclusive Gateway (XOR Gateway)\n- Simbol: Diamond dengan tanda X\n- Fungsi: Memilih SATU jalur dari beberapa alternatif berdasarkan kondisi\n- Contoh: Jika status = 'Approved' maka proses A, jika tidak maka proses B\n\n2. Parallel Gateway (AND Gateway)\n- Simbol: Diamond dengan tanda +\n- Fungsi: Memecah alur menjadi beberapa jalur PARALEL yang dijalankan bersamaan\n- Contoh: Setelah order diterima, proses pengiriman dan pembuatan invoice berjalan paralel\n\n3. Inclusive Gateway (OR Gateway)\n- Simbol: Diamond dengan tanda O\n- Fungsi: Memilih SATU atau LEBIH jalur dari beberapa alternatif\n- Contoh: Notifikasi bisa dikirim via email DAN/ATAU SMS tergantung preferensi"
    },
    {
        id: 3,
        question: "Jelaskan pengertian UML dan perannya dalam analisis dan perancangan sistem!",
        keywords: ["unified modeling language", "pemodelan", "standar", "visualisasi", "spesifikasi", "konstruksi", "dokumentasi", "blueprint", "diagram", "use case", "activity", "sequence", "class"],
        shortAnswer: "<strong>UML</strong> = Unified Modeling Language<br><br><strong>Peran:</strong><ul><li>👁️ <strong>Visualisasi</strong> - gambar sistem</li><li>📋 <strong>Spesifikasi</strong> - model presisi</li><li>🏗️ <strong>Konstruksi</strong> - blueprint untuk kode</li><li>📄 <strong>Dokumentasi</strong> - arsitektur sistem</li></ul><strong>Diagram:</strong> Use Case, Activity, Sequence, Class",
        keyAnswer: "UML (Unified Modeling Language) adalah bahasa pemodelan standar yang digunakan untuk menspesifikasi, memvisualisasi, membangun, dan mendokumentasikan artefak sistem perangkat lunak.\n\nPeran UML dalam analisis dan perancangan sistem:\n\n1. Visualisasi - Menyediakan notasi grafis standar untuk menggambarkan sistem\n2. Spesifikasi - Membangun model yang presisi dan lengkap\n3. Konstruksi - Menjadi blueprint untuk implementasi kode\n4. Dokumentasi - Mendokumentasikan keputusan desain dan arsitektur\n\nDiagram UML meliputi:\n- Use Case Diagram: kebutuhan fungsional\n- Activity Diagram: alur proses\n- Sequence Diagram: interaksi objek\n- Class Diagram: struktur statis\n- Deployment Diagram: arsitektur fisik"
    },
    {
        id: 4,
        question: "Jelaskan tujuan utama penggunaan Use Case Diagram dalam tahap analisis sistem!",
        keywords: ["kebutuhan fungsional", "aktor", "batasan sistem", "scope", "ruang lingkup", "stakeholder", "komunikasi", "activity diagram", "sequence diagram", "test case"],
        shortAnswer: "<strong>Tujuan Use Case Diagram:</strong><ul><li>✅ Tangkap <strong>kebutuhan fungsional</strong></li><li>👥 Identifikasi <strong>aktor</strong></li><li>📦 Tentukan <strong>batasan/scope sistem</strong></li><li>💬 <strong>Komunikasi</strong> dengan stakeholder</li><li>📊 Dasar untuk <strong>Activity & Sequence Diagram</strong></li></ul>",
        keyAnswer: "Tujuan utama Use Case Diagram dalam analisis sistem:\n\n1. Menangkap Kebutuhan Fungsional\n- Mengidentifikasi apa yang harus dilakukan sistem\n- Mendefinisikan fitur-fitur yang dibutuhkan pengguna\n\n2. Mengidentifikasi Aktor\n- Menentukan siapa saja yang berinteraksi dengan sistem\n- Memahami peran masing-masing pengguna\n\n3. Menentukan Batasan Sistem\n- Mendefinisikan scope/ruang lingkup sistem\n- Memisahkan apa yang ada di dalam dan di luar sistem\n\n4. Komunikasi dengan Stakeholder\n- Bahasa visual yang mudah dipahami non-teknis\n- Validasi kebutuhan dengan pengguna\n\n5. Dasar Pengembangan Lanjutan\n- Menjadi input untuk Activity dan Sequence Diagram\n- Basis untuk test case dan dokumentasi"
    },
    {
        id: 5,
        question: "Jelaskan pengertian Activity Diagram dan fungsinya dalam analisis sistem!",
        keywords: ["workflow", "alur kerja", "aktivitas", "proses bisnis", "decision", "fork", "join", "merge", "swimlane", "use case", "implementasi"],
        shortAnswer: "<strong>Activity Diagram:</strong> Diagram alur kerja (workflow) sistem<br><br><strong>Fungsi:</strong><ul><li>📊 Model <strong>proses bisnis</strong></li><li>🔀 Tunjukkan <strong>decision, fork, join, merge</strong></li><li>🏊 Gunakan <strong>swimlane</strong> untuk tanggung jawab</li><li>📝 Detail <strong>use case</strong></li><li>💻 Dasar <strong>implementasi</strong> kode</li></ul>",
        keyAnswer: "Activity Diagram adalah diagram UML yang menggambarkan alur kerja (workflow) atau aktivitas dalam suatu proses atau operasi sistem secara berurutan.\n\nFungsi Activity Diagram dalam analisis sistem:\n\n1. Memodelkan Proses Bisnis\n- Menggambarkan alur kerja bisnis dari awal hingga akhir\n- Menunjukkan langkah-langkah dalam suatu proses\n\n2. Menunjukkan Alur Kontrol\n- Decision (percabangan kondisi)\n- Fork/Join (proses paralel)\n- Merge (penggabungan alur)\n\n3. Mengidentifikasi Tanggung Jawab\n- Menggunakan swimlane untuk memisahkan aktivitas berdasarkan aktor/departemen\n\n4. Detailing Use Case\n- Menjabarkan skenario use case secara detail\n- Menunjukkan alur normal dan alternatif\n\n5. Dasar untuk Implementasi\n- Menjadi panduan untuk coding logic\n- Membantu dalam pengujian sistem"
    },
    {
        id: 6,
        question: "Jelaskan peran Swimlane dalam Activity Diagram!",
        keywords: ["partisi", "tanggung jawab", "aktor", "departemen", "interaksi", "bottleneck", "pembagian tugas", "sop", "audit", "compliance"],
        shortAnswer: "<strong>Swimlane:</strong> Partisi yang membagi diagram<br><br><strong>Peran:</strong><ul><li>👤 Tunjukkan <strong>tanggung jawab</strong> tiap aktor</li><li>🔄 Visualisasi <strong>interaksi</strong> antar departemen</li><li>⚠️ Identifikasi <strong>bottleneck</strong></li><li>📋 Perjelas <strong>pembagian tugas</strong></li><li>📝 Jadi referensi <strong>SOP & audit</strong></li></ul>",
        keyAnswer: "Swimlane dalam Activity Diagram adalah partisi vertikal atau horizontal yang membagi diagram menjadi area-area terpisah.\n\nPeran Swimlane:\n\n1. Menunjukkan Tanggung Jawab\n- Setiap lane merepresentasikan aktor, departemen, atau komponen sistem\n- Aktivitas di dalam lane adalah tanggung jawab entitas tersebut\n\n2. Memvisualisasikan Interaksi\n- Menunjukkan bagaimana pekerjaan mengalir antar departemen/aktor\n- Mengidentifikasi handoff points antar pihak\n\n3. Mengidentifikasi Bottleneck\n- Melihat beban kerja masing-masing aktor\n- Menemukan titik-titik kemacetan proses\n\n4. Meningkatkan Kejelasan\n- Memudahkan pembaca memahami siapa melakukan apa\n- Memperjelas pembagian tugas\n\n5. Dokumentasi Proses\n- Menjadi referensi SOP (Standard Operating Procedure)\n- Membantu audit dan compliance"
    },
    {
        id: 7,
        question: "Jelaskan perbedaan Boundary Class, Control Class, dan Entity Class dalam Sequence Diagram!",
        keywords: ["boundary", "control", "entity", "bce", "interface", "form", "controller", "logic", "data", "database", "persistent", "aktor"],
        shortAnswer: "<strong>BCE Pattern:</strong><br><br>1️⃣ <strong>Boundary</strong> = Interface (form, halaman)<br>→ berinteraksi dengan <u>aktor</u><br><br>2️⃣ <strong>Control</strong> = Logic (controller)<br>→ <u>business logic</u><br><br>3️⃣ <strong>Entity</strong> = Data (database)<br>→ data <u>persistent</u><br><br><strong>Alur:</strong> Actor → Boundary → Control → Entity",
        keyAnswer: "Dalam Sequence Diagram, terdapat 3 jenis stereotipe class (BCE Pattern):\n\n1. BOUNDARY CLASS\n- Fungsi: Interface antara sistem dan dunia luar\n- Contoh: Form login, halaman web, laporan\n- Simbol: Lingkaran dengan garis vertikal di kiri\n- Berinteraksi langsung dengan aktor\n\n2. CONTROL CLASS\n- Fungsi: Mengontrol alur logika dan koordinasi\n- Contoh: LoginController, OrderHandler\n- Simbol: Lingkaran dengan panah melingkar\n- Menjembatani boundary dan entity\n- Berisi business logic\n\n3. ENTITY CLASS\n- Fungsi: Merepresentasikan data/informasi yang disimpan\n- Contoh: User, Product, Order\n- Simbol: Lingkaran dengan garis horizontal di bawah\n- Biasanya berkorespondensi dengan tabel database\n- Persistent (data tersimpan)\n\nAlur: Actor → Boundary → Control → Entity"
    },
    {
        id: 8,
        question: "Jelaskan keterkaitan antara Use Case Diagram, Activity Diagram, dan Sequence Diagram!",
        keywords: ["use case", "activity", "sequence", "fungsionalitas", "alur", "interaksi", "objek", "kronologis", "apa", "bagaimana", "siapa", "kapan"],
        shortAnswer: "<strong>Keterkaitan 3 Diagram:</strong><br><br>1️⃣ <strong>Use Case</strong> = <u>APA</u> yang dilakukan sistem<br><br>2️⃣ <strong>Activity</strong> = <u>BAGAIMANA</u> prosesnya<br><br>3️⃣ <strong>Sequence</strong> = <u>SIAPA & KAPAN</u> objek berinteraksi<br><br><strong>Urutan:</strong> Use Case → Activity → Sequence",
        keyAnswer: "Keterkaitan ketiga diagram:\n\n1. USE CASE DIAGRAM (Level Tertinggi)\n- Menunjukkan APA yang dilakukan sistem\n- Mengidentifikasi fungsionalitas dari perspektif pengguna\n- Menjadi titik awal analisis\n\n2. ACTIVITY DIAGRAM (Detail Proses)\n- Menjabarkan BAGAIMANA use case dijalankan\n- Menunjukkan alur aktivitas step-by-step\n- Setiap use case bisa didetailkan dengan activity diagram\n\n3. SEQUENCE DIAGRAM (Detail Teknis)\n- Menunjukkan SIAPA (objek) yang terlibat dan KAPAN\n- Menggambarkan interaksi objek secara kronologis\n- Mendetailkan implementasi activity diagram\n\nHubungan:\n- Use Case → mengidentifikasi fitur\n- Activity Diagram → menjabarkan alur proses\n- Sequence Diagram → menunjukkan interaksi objek\n\nAlur pembuatan: Use Case → Activity → Sequence"
    },
    {
        id: 9,
        question: "Jelaskan perbedaan asosiasi, agregasi, dan pewarisan dalam Class Diagram!",
        keywords: ["asosiasi", "association", "agregasi", "aggregation", "pewarisan", "inheritance", "generalization", "has-a", "is-a", "whole-part", "diamond", "segitiga"],
        shortAnswer: "<strong>3 Relasi Class Diagram:</strong><br><br>1️⃣ <strong>Asosiasi</strong> = Hubungan biasa<br>Simbol: garis ──<br><br>2️⃣ <strong>Agregasi</strong> = \"has-a\" (punya)<br>Simbol: ◇── diamond kosong<br><br>3️⃣ <strong>Pewarisan</strong> = \"is-a\" (adalah)<br>Simbol: △── segitiga kosong",
        keyAnswer: "Perbedaan tiga jenis relasi dalam Class Diagram:\n\n1. ASOSIASI (Association)\n- Definisi: Hubungan struktural antar kelas yang menunjukkan objek saling terhubung\n- Simbol: Garis biasa (bisa dengan panah)\n- Contoh: Mahasiswa --- Dosen (mahasiswa memiliki dosen pembimbing)\n- Karakteristik: Kedua kelas berdiri sendiri\n\n2. AGREGASI (Aggregation)\n- Definisi: Hubungan \"has-a\" atau \"whole-part\" yang lemah\n- Simbol: Garis dengan diamond kosong di sisi whole\n- Contoh: Tim ◇--- Pemain (tim terdiri dari pemain)\n- Karakteristik: Part bisa exist tanpa whole\n\n3. PEWARISAN (Inheritance/Generalization)\n- Definisi: Hubungan \"is-a\" dimana subclass mewarisi dari superclass\n- Simbol: Garis dengan segitiga kosong di sisi parent\n- Contoh: Karyawan ◁--- Manager (manager adalah karyawan)\n- Karakteristik: Subclass mewarisi atribut dan method parent"
    },
    {
        id: 10,
        question: "Jelaskan apa yang dimaksud dengan visibilitas anggota kelas pada class diagram dan sebutkan simbolnya!",
        keywords: ["visibilitas", "public", "private", "protected", "package", "plus", "minus", "hash", "tilde", "akses", "enkapsulasi"],
        shortAnswer: "<strong>Visibilitas = Tingkat akses</strong><br><br><strong>Simbol:</strong><ul><li><strong>+ Public</strong> → akses dari mana saja</li><li><strong>- Private</strong> → hanya dalam class</li><li><strong># Protected</strong> → class + subclass</li><li><strong>~ Package</strong> → dalam package sama</li></ul>",
        keyAnswer: "Visibilitas adalah tingkat akses terhadap atribut dan method suatu class, menentukan dari mana anggota class dapat diakses.\n\nJenis Visibilitas dan Simbolnya:\n\n1. PUBLIC (+)\n- Simbol: + (plus)\n- Akses: Dapat diakses dari mana saja (semua class)\n- Contoh: +getName(): String\n\n2. PRIVATE (-)\n- Simbol: - (minus)\n- Akses: Hanya dapat diakses dari dalam class itu sendiri\n- Contoh: -password: String\n\n3. PROTECTED (#)\n- Simbol: # (hash)\n- Akses: Dapat diakses dari class itu sendiri dan subclass-nya\n- Contoh: #calculateBonus(): Double\n\n4. PACKAGE (~)\n- Simbol: ~ (tilde)\n- Akses: Dapat diakses dari class dalam package yang sama\n- Contoh: ~helper(): void\n\nPrinsip: Gunakan private untuk enkapsulasi, expose hanya yang perlu melalui public methods."
    },
    {
        id: 11,
        question: "Jelaskan pengertian wireframe dan perannya dalam perancangan sistem informasi!",
        keywords: ["wireframe", "low-fidelity", "layout", "struktur", "blueprint", "antarmuka", "ui", "sketsa", "iterasi", "usability", "dokumentasi"],
        shortAnswer: "<strong>Wireframe:</strong> Sketsa low-fidelity tampilan UI (hitam putih)<br><br><strong>Peran:</strong><ul><li>📐 <strong>Blueprint</strong> antarmuka</li><li>💬 <strong>Komunikasi</strong> ide ke stakeholder</li><li>🔄 <strong>Iterasi cepat</strong>, biaya rendah</li><li>🎯 Fokus pada <strong>usability</strong></li><li>📄 <strong>Dokumentasi</strong> desain</li></ul>",
        keyAnswer: "Wireframe adalah representasi visual tingkat rendah (low-fidelity) dari struktur dan tata letak antarmuka pengguna, biasanya berupa sketsa hitam putih yang menunjukkan penempatan elemen-elemen UI.\n\nPeran Wireframe dalam Perancangan SI:\n\n1. Blueprint Antarmuka\n- Menunjukkan struktur halaman dan layout\n- Menentukan penempatan elemen UI\n\n2. Komunikasi Ide\n- Menyampaikan konsep desain ke stakeholder\n- Mendapat feedback awal sebelum desain detail\n\n3. Iterasi Cepat\n- Mudah dibuat dan diubah\n- Biaya revisi rendah di tahap awal\n\n4. Fokus pada Fungsi\n- Tanpa distraksi warna dan grafis\n- Fokus pada usability dan struktur\n\n5. Dokumentasi\n- Referensi untuk tim development\n- Standarisasi desain\n\n6. User Testing Awal\n- Validasi navigasi dan flow\n- Identifikasi masalah UX lebih dini"
    },
    {
        id: 12,
        question: "Jelaskan fungsi Windows Navigation Diagram (WND) dan perbedaannya dengan flowchart!",
        keywords: ["wnd", "navigasi", "layar", "halaman", "transisi", "flowchart", "logika", "proses", "ui", "ux", "screen", "window"],
        shortAnswer: "<strong>WND:</strong> Peta navigasi antar layar/halaman<br><br><strong>Perbedaan:</strong><br><table style='width:100%;font-size:0.85rem'><tr><td><strong>WND</strong></td><td><strong>Flowchart</strong></td></tr><tr><td>Navigasi LAYAR</td><td>Alur LOGIKA</td></tr><tr><td>UI/UX</td><td>Algoritma</td></tr></table>",
        keyAnswer: "WINDOWS NAVIGATION DIAGRAM (WND)\n\nFungsi WND:\n1. Memetakan navigasi antar layar/halaman aplikasi\n2. Menunjukkan transisi dari satu window ke window lain\n3. Mengidentifikasi semua layar dalam aplikasi\n4. Menunjukkan trigger navigasi (button, link, event)\n5. Membantu merancang user flow\n\nPERBEDAAN WND vs FLOWCHART:\n\n| Aspek | WND | Flowchart |\n|-------|-----|----------|\n| Fokus | Navigasi antar LAYAR | Alur LOGIKA proses |\n| Elemen | Windows/Screens | Proses, Decision, I/O |\n| Tujuan | Desain UI/UX | Algoritma/Logic |\n| Output | Peta navigasi | Alur program |\n| User | UI/UX Designer | Programmer/Analyst |\n\nContoh:\n- WND: Login Screen → Dashboard → Profile Page\n- Flowchart: Input data → Validasi → If valid → Simpan → Else → Error"
    },
    {
        id: 13,
        question: "Jelaskan perbedaan UI dan UX beserta contohnya!",
        keywords: ["ui", "user interface", "ux", "user experience", "tampilan", "visual", "pengalaman", "estetika", "kemudahan", "efisiensi", "warna", "button", "flow"],
        shortAnswer: "<strong>UI (User Interface):</strong><br>Tampilan visual (warna, font, button)<br>= <u>WUJUD</u><br><br><strong>UX (User Experience):</strong><br>Pengalaman pengguna (kemudahan, flow)<br>= <u>RASA</u><br><br>🍽️ <strong>Analogi:</strong> UI = plating makanan, UX = pengalaman makan",
        keyAnswer: "UI (User Interface):\n- Definisi: Tampilan visual dan elemen interaktif yang dilihat dan digunakan pengguna\n- Fokus: Estetika, tampilan, konsistensi visual\n- Elemen: Warna, typography, button, icon, layout\n- Contoh: Tombol berwarna biru dengan rounded corner, font Roboto size 14px, spacing antar elemen 16px\n\nUX (User Experience):\n- Definisi: Keseluruhan pengalaman dan perasaan pengguna saat berinteraksi dengan produk\n- Fokus: Kemudahan, efisiensi, kepuasan pengguna\n- Elemen: Flow, usability, accessibility, feedback\n- Contoh: Proses checkout hanya 3 langkah, form autofill, loading indicator, error message yang jelas\n\nAnalogi Restoran:\n- UI = Tampilan makanan (plating, warna, garnish)\n- UX = Keseluruhan pengalaman makan (rasa, pelayanan, suasana, kecepatan)\n\nHubungan: UI yang baik mendukung UX yang baik. UI adalah bagian dari UX."
    },
    {
        id: 14,
        question: "Jelaskan tahapan Design Thinking dalam pengembangan UI/UX!",
        keywords: ["design thinking", "empathize", "empati", "define", "definisi", "ideate", "ideasi", "prototype", "prototipe", "test", "pengujian", "iteratif", "human-centered"],
        shortAnswer: "<strong>5 Tahap Design Thinking:</strong><br><br>1️⃣ <strong>Empathize</strong> → pahami user<br>2️⃣ <strong>Define</strong> → definisi masalah<br>3️⃣ <strong>Ideate</strong> → brainstorm solusi<br>4️⃣ <strong>Prototype</strong> → buat wireframe/mockup<br>5️⃣ <strong>Test</strong> → uji dengan user<br><br>🔄 <strong>Iteratif!</strong> Bisa kembali ke tahap sebelumnya",
        keyAnswer: "Design Thinking adalah metodologi human-centered untuk memecahkan masalah dan inovasi.\n\n5 TAHAPAN DESIGN THINKING:\n\n1. EMPATHIZE (Empati)\n- Memahami pengguna secara mendalam\n- Metode: Interview, observasi, survey\n- Output: Empathy map, user persona\n\n2. DEFINE (Definisi)\n- Mendefinisikan masalah yang akan diselesaikan\n- Menganalisis insight dari tahap empathize\n- Output: Problem statement, POV (Point of View)\n\n3. IDEATE (Ideasi)\n- Brainstorming solusi kreatif\n- Menghasilkan banyak ide tanpa judgment\n- Output: Kumpulan ide, concept sketch\n\n4. PROTOTYPE (Prototipe)\n- Membuat representasi solusi\n- Mulai dari low-fidelity ke high-fidelity\n- Output: Wireframe, mockup, prototype interaktif\n\n5. TEST (Pengujian)\n- Menguji prototype dengan pengguna nyata\n- Mengumpulkan feedback\n- Output: Insight untuk iterasi\n\nProses ini iteratif - bisa kembali ke tahap sebelumnya."
    },
    {
        id: 15,
        question: "Jelaskan tujuan dan pentingnya User Acceptance Test (UAT) dalam pengembangan sistem informasi!",
        keywords: ["uat", "user acceptance test", "pengujian", "end-user", "klien", "validasi", "requirement", "production", "go-live", "stakeholder", "quality", "risiko"],
        shortAnswer: "<strong>UAT:</strong> Pengujian akhir oleh end-user<br><br><strong>Tujuan:</strong><ul><li>✅ <strong>Validasi</strong> requirement bisnis</li><li>🚀 Siap <strong>go-live/production</strong></li><li>✍️ <strong>Sign-off</strong> dari stakeholder</li></ul><strong>Pentingnya:</strong><ul><li>📉 Kurangi <strong>risiko</strong> kegagalan</li><li>😊 Tingkatkan <strong>kepuasan user</strong></li><li>🏆 <strong>Quality gate</strong> terakhir</li></ul>",
        keyAnswer: "User Acceptance Test (UAT) adalah tahap pengujian akhir dimana pengguna sebenarnya menguji sistem untuk memastikan kesesuaian dengan kebutuhan bisnis.\n\nTUJUAN UAT:\n1. Validasi bahwa sistem memenuhi requirement bisnis\n2. Memastikan sistem siap untuk production\n3. Mendapat persetujuan formal dari stakeholder\n4. Mengidentifikasi gap antara ekspektasi dan realita\n5. Verifikasi end-to-end business process\n\nPENTINGNYA UAT:\n\n1. Perspektif Pengguna\n- Diuji oleh yang akan menggunakan sehari-hari\n- Menemukan issue yang tidak terdeteksi developer\n\n2. Mengurangi Risiko\n- Mencegah kegagalan setelah go-live\n- Identifikasi masalah sebelum deployment\n\n3. Kepuasan Pengguna\n- User merasa dilibatkan\n- Meningkatkan adopsi sistem\n\n4. Dokumentasi\n- Bukti bahwa sistem telah disetujui\n- Sign-off formal untuk go-live\n\n5. Quality Assurance\n- Layer terakhir quality gate\n- Memastikan business value terdeliver"
    }
];
