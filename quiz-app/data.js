// Bank soal untuk latihan Mid Term Exam
// Topik: Data Security Management (Week 4), Document & Content Management (Week 5),
// Reference & Master Data Management (Week 6), Pengenalan Data Governance & Data Management,
// Data Architecture, Data Development & Operations

const QUIZ_DATA = [
  // ===================== WEEK 4: DATA SECURITY MANAGEMENT =====================
  {
    topic: "Data Security Management",
    question: "Apa yang paling tepat menggambarkan Data Security Management dalam konteks manajemen data enterprise?",
    choices: [
      "Proses menyimpan seluruh data organisasi dalam satu database tanpa membatasi pengguna",
      "Proses mencadangkan data secara berkala agar tidak hilang ketika terjadi gangguan sistem",
      "Perencanaan, pengembangan, dan pelaksanaan kebijakan serta prosedur untuk autentikasi, otorisasi, akses, dan audit data",
      "Proses menghapus data yang sudah tidak digunakan untuk mengurangi kebutuhan penyimpanan"
    ],
    answer: 2,
    explanation: "Data Security Management mencakup perencanaan, pengembangan, dan pelaksanaan kebijakan serta prosedur untuk memastikan autentikasi, otorisasi, akses, dan audit terhadap data dan informasi dilakukan dengan tepat."
  },
  {
    topic: "Data Security Management",
    question: "Manakah pernyataan berikut yang merupakan salah satu tujuan Data Security Management?",
    choices: [
      "Memungkinkan akses dan perubahan data yang sesuai sekaligus mencegah akses dan perubahan yang tidak sesuai",
      "Memberikan hak mengubah seluruh data kepada semua karyawan agar pekerjaan lebih cepat",
      "Menghilangkan seluruh proses audit karena data sudah dilindungi oleh kata sandi",
      "Menyamakan tingkat kerahasiaan semua informasi tanpa mempertimbangkan kebutuhan pemangku kepentingan"
    ],
    answer: 0,
    explanation: "Tujuan utama Data Security Management adalah menyeimbangkan kebutuhan berbagai stakeholder: memungkinkan akses dan perubahan data yang sah, sekaligus mencegah akses dan perubahan yang tidak sah."
  },
  {
    topic: "Data Security Management",
    question: "Dalam Data Security Management Context Diagram, aktivitas Define Data Security Controls and Procedures dikelompokkan ke dalam jenis aktivitas apa?",
    choices: ["Planning (P)", "Development (D)", "Control (C)", "Operational (O)"],
    answer: 1,
    explanation: "Mendefinisikan control dan procedure keamanan data merupakan aktivitas Development (D) — merancang mekanisme kontrol sebelum diterapkan secara operasional."
  },
  {
    topic: "Data Security Management",
    question: "Tim keamanan melakukan aktivitas Monitor User Authentication and Access Behavior. Manakah keluaran yang paling sesuai dengan aktivitas tersebut?",
    choices: [
      "Data Security Policy dan Data Security Standards",
      "User Accounts, Passwords, dan Role Groups",
      "Classified Documents dan Classified Databases",
      "Data Access Logs, Security Notification Alerts, dan Data Security Reports"
    ],
    answer: 3,
    explanation: "Aktivitas monitoring otentikasi dan akses pengguna menghasilkan Data Access Logs, Security Notification Alerts, dan Data Security Reports sebagai output-nya."
  },
  {
    topic: "Data Security Management",
    question: "Sebuah perusahaan memiliki ratusan pegawai dengan tanggung jawab yang serupa. Administrator ingin menghindari pemberian hak akses secara berulang kepada setiap akun. Pendekatan manakah yang paling sesuai dengan materi?",
    choices: [
      "Menggunakan satu akun bersama untuk seluruh pegawai dalam departemen",
      "Mendefinisikan privilege berdasarkan role group dan mendaftarkan pengguna ke grup yang sesuai",
      "Memberikan seluruh privilege kepada setiap pengguna lalu membatasi aktivitasnya melalui laporan bulanan",
      "Membuat kata sandi identik untuk semua pegawai dengan jabatan yang sama"
    ],
    answer: 1,
    explanation: "Role-Based Access Control (RBAC) mendefinisikan privilege berdasarkan role group, kemudian mendaftarkan pengguna ke grup yang sesuai, sehingga administrator tidak perlu memberikan hak akses satu per satu ke setiap akun."
  },
  {
    topic: "Data Security Management",
    question: "Dalam security role hierarchy, apa hubungan hak akses child role terhadap parent role sebagaimana dijelaskan dalam materi?",
    choices: [
      "Child role selalu mendapatkan seluruh privilege tambahan yang tidak dimiliki parent role",
      "Child role tidak boleh memiliki privilege apa pun yang sama dengan parent role",
      "Child role digunakan untuk mempersempit privilege yang dimiliki parent role",
      "Child role harus memberikan hak DELETE kepada semua anggotanya"
    ],
    answer: 2,
    explanation: "Dalam role hierarchy, child role berfungsi untuk mempersempit (menspesifikkan lebih lanjut) privilege yang dimiliki oleh parent role, bukan menambah privilege baru secara otomatis."
  },
  {
    topic: "Data Security Management",
    question: "Seorang pengguna dimasukkan ke empat role group sekaligus. Meskipun sistem mengizinkannya, apa risiko utama praktik ini menurut materi?",
    choices: [
      "Pengguna tidak dapat melakukan autentikasi melalui enterprise directory",
      "Kata sandi pengguna otomatis menjadi tidak memenuhi standar kompleksitas",
      "Semua data yang diakses pengguna otomatis berubah menjadi publik",
      "Administrator menjadi lebih sulit memahami privilege spesifik yang diterima pengguna tersebut"
    ],
    answer: 3,
    explanation: "Semakin banyak role group yang dimiliki satu pengguna, semakin sulit bagi administrator untuk melacak dan memahami kombinasi privilege spesifik yang akhirnya diterima pengguna tersebut."
  },
  {
    topic: "Data Security Management",
    question: "Administrator akan mengubah struktur role group serta memindahkan beberapa pengguna ke grup lain. Prosedur manakah yang paling tepat diterapkan?",
    choices: [
      "Meminta persetujuan yang diperlukan dan melacak perubahan melalui change management system",
      "Melakukan perubahan langsung tanpa pencatatan agar proses administrasi lebih sederhana",
      "Mengizinkan setiap pengguna mengubah sendiri keanggotaan role group tanpa persetujuan",
      "Menonaktifkan seluruh mekanisme otorisasi selama perubahan keanggotaan berlangsung"
    ],
    answer: 0,
    explanation: "Perubahan struktur role group dan keanggotaan pengguna harus melalui proses persetujuan (approval) yang sesuai dan dilacak melalui change management system agar tetap akuntabel dan auditable."
  },
  {
    topic: "Data Security Management",
    question: "Informasi identitas pegawai disimpan pada beberapa aplikasi yang berbeda. Akibatnya, nama jabatan dan keanggotaan grup untuk orang yang sama sering tidak konsisten. Apa tindakan yang paling sesuai dengan materi?",
    choices: [
      "Mempertahankan seluruh salinan identitas dan meminta pegawai memilih data yang benar setiap kali masuk",
      "Menghapus informasi keanggotaan grup dari seluruh sistem agar tidak ada perbedaan data",
      "Mengelola data identitas pengguna dan keanggotaan role group secara terpusat",
      "Mengizinkan setiap aplikasi menentukan identitas pegawai secara independen tanpa sinkronisasi"
    ],
    answer: 2,
    explanation: "Solusi yang tepat adalah mengelola data identitas pengguna dan keanggotaan role group secara terpusat (centralized identity management), misalnya melalui enterprise directory, agar konsisten di seluruh sistem."
  },
  {
    topic: "Data Security Management",
    question: "Manakah ketentuan kata sandi berikut yang sesuai dengan contoh password complexity requirements pada materi?",
    choices: [
      "Kata sandi tidak boleh sama dengan salah satu dari lima kata sandi yang terakhir digunakan",
      "Kata sandi boleh sama dengan username asalkan mengandung angka",
      "Kata sandi kosong diperbolehkan apabila pengguna hanya memiliki hak READ",
      "Kata sandi sebaiknya menggunakan karakter berdekatan pada keyboard agar mudah diingat"
    ],
    answer: 0,
    explanation: "Salah satu contoh password complexity requirement adalah larangan menggunakan kembali beberapa password terakhir (password history), untuk mencegah penggunaan ulang password lama."
  },
  {
    topic: "Data Security Management",
    question: "Ketika administrator membuat akun baru dan sistem menghasilkan kata sandi awal, apa tindakan yang direkomendasikan dalam materi?",
    choices: [
      "Menetapkan kata sandi awal agar tidak pernah kedaluwarsa",
      "Mengizinkan administrator menggunakan kata sandi awal tersebut untuk seluruh akun baru",
      "Menunda pergantian kata sandi sampai pengguna meminta bantuan help desk",
      "Mengatur kata sandi awal agar segera kedaluwarsa sehingga pengguna menetapkan kata sandinya sendiri"
    ],
    answer: 3,
    explanation: "Praktik yang direkomendasikan adalah membuat kata sandi awal (initial password) segera kedaluwarsa, sehingga memaksa pengguna untuk segera menetapkan kata sandi sendiri saat login pertama."
  },
  {
    topic: "Data Security Management",
    question: "Sebuah organisasi menggunakan enterprise user directory sehingga pegawai cukup memasukkan kata sandi saat login ke workstation. Akses ke aplikasi lain kemudian mengacu pada direktori tersebut. Kemampuan ini disebut apa?",
    choices: ["Data classification", "Single-sign-on", "Data security auditing", "Change control"],
    answer: 1,
    explanation: "Kemampuan login satu kali untuk mengakses banyak aplikasi melalui direktori terpusat disebut Single Sign-On (SSO)."
  },
  {
    topic: "Data Security Management",
    question: "Sebuah tabel memuat informasi pelanggan yang bersifat sensitif. Organisasi menerapkan mekanisme opt-in untuk hak akses data tersebut. Apa konsekuensi utamanya?",
    choices: [
      "Pengguna tidak dapat melakukan tindakan atas data sensitif jika belum memperoleh permission yang sesuai",
      "Semua pengguna otomatis dapat melihat data asalkan sudah memiliki akun aplikasi",
      "Pengguna yang tidak mempunyai permission tetap dapat mengubah data melalui database view",
      "Hak akses hanya dibatasi berdasarkan jam kerja tanpa memperhatikan permission pengguna"
    ],
    answer: 0,
    explanation: "Dengan mekanisme opt-in, pengguna tidak dapat melakukan tindakan apa pun terhadap data sensitif tersebut sampai mereka secara eksplisit diberikan permission yang sesuai."
  },
  {
    topic: "Data Security Management",
    question: "Seorang manajer cabang hanya boleh melihat baris transaksi milik cabangnya sendiri, sedangkan baris transaksi cabang lain harus disembunyikan. Mekanisme manakah yang paling tepat menurut materi?",
    choices: [
      "Memberikan hak READ terhadap seluruh tabel transaksi kepada semua manajer",
      "Menyimpan transaksi setiap cabang dalam kata sandi pengguna yang berbeda",
      "Mengubah klasifikasi seluruh transaksi menjadi For General Audiences",
      "Menggunakan relational database view yang membatasi baris berdasarkan nilai data tertentu"
    ],
    answer: 3,
    explanation: "Relational database view dapat digunakan untuk membatasi akses pada level baris (row-level security) berdasarkan nilai data tertentu, misalnya kode cabang milik manajer."
  },
  {
    topic: "Data Security Management",
    question: "Staf operasional perlu melihat nama dan nomor pelanggan, tetapi tidak boleh melihat kolom yang berisi informasi yang lebih rahasia. Solusi manakah yang didukung oleh materi?",
    choices: [
      "Menghapus seluruh kolom rahasia secara permanen dari database",
      "Menggunakan database view untuk membatasi akses ke kolom tertentu",
      "Mengizinkan akses ke semua kolom lalu meminta staf tidak membuka kolom rahasia",
      "Memberikan privilege DELETE agar staf dapat menyembunyikan kolom yang tidak diperlukan"
    ],
    answer: 1,
    explanation: "Database view juga dapat digunakan untuk membatasi akses pada level kolom (column-level security), sehingga kolom yang lebih sensitif disembunyikan dari pengguna yang tidak berhak."
  },
  {
    topic: "Data Security Management",
    question: "Sistem mendeteksi transaksi akses data yang tidak biasa pada malam hari. Mengapa kegiatan monitoring authentication and access behavior penting dalam situasi ini?",
    choices: [
      "Karena monitoring otomatis menggantikan seluruh kebutuhan perencanaan keamanan dan audit",
      "Karena monitoring memastikan setiap transaksi yang tidak biasa pasti merupakan pelanggaran",
      "Karena monitoring dapat mengungkap aktivitas mencurigakan yang perlu diselidiki serta menyediakan riwayat akses untuk audit kepatuhan",
      "Karena monitoring memungkinkan seluruh pengguna memperoleh hak akses tambahan secara otomatis"
    ],
    answer: 2,
    explanation: "Monitoring otentikasi dan perilaku akses penting karena dapat mengungkap aktivitas mencurigakan yang perlu diinvestigasi lebih lanjut, serta menyediakan riwayat akses (audit trail) untuk kepentingan audit kepatuhan."
  },
  {
    topic: "Data Security Management",
    question: "Dokumen strategi keuangan hanya boleh dibuka oleh pegawai dengan peran tertentu yang memiliki kebutuhan untuk mengetahui isinya dan mungkin memerlukan security clearance. Klasifikasi manakah yang paling sesuai?",
    choices: ["Restricted Confidential", "Internal Use Only", "For General Audiences", "Registered Confidential"],
    answer: 0,
    explanation: "Restricted Confidential adalah level klasifikasi tertinggi, dibatasi hanya untuk peran tertentu yang memiliki kebutuhan (need-to-know) dan terkadang mensyaratkan security clearance."
  },
  {
    topic: "Data Security Management",
    question: "Sebuah organisasi menetapkan bahwa siapa pun yang akan mengakses dokumen tertentu wajib menandatangani perjanjian hukum dan bertanggung jawab menjaga kerahasiaannya. Tingkat klasifikasi apa yang paling sesuai?",
    choices: ["Confidential", "Registered Confidential", "Internal Use Only", "For General Audiences"],
    answer: 1,
    explanation: "Registered Confidential mengharuskan setiap pihak yang mengakses dokumen untuk menandatangani perjanjian hukum (legal agreement) dan bertanggung jawab atas kerahasiaannya."
  },
  {
    topic: "Data Security Management",
    question: "Sebuah panduan kerja dibatasi untuk pegawai organisasi. Panduan tersebut boleh ditampilkan atau didiskusikan, tetapi tidak boleh disalin ke luar organisasi. Menurut skema klasifikasi pada materi, panduan ini termasuk kategori apa?",
    choices: ["For General Audiences", "Registered Confidential", "Restricted Confidential", "Internal Use Only"],
    answer: 3,
    explanation: "Internal Use Only berarti dokumen hanya untuk pegawai internal — boleh ditampilkan atau didiskusikan secara internal, tetapi tidak boleh disalin atau dibawa ke luar organisasi."
  },
  {
    topic: "Data Security Management",
    question: "Manakah pendekatan yang paling tepat untuk melaksanakan Audit Data Security?",
    choices: [
      "Meminta orang yang bertanggung jawab langsung atas proses tersebut untuk mengaudit hasil kerjanya sendiri",
      "Menggunakan audit terutama untuk mencari individu yang harus disalahkan ketika ditemukan kelemahan",
      "Menggunakan auditor independen untuk menghasilkan penilaian objektif dan rekomendasi perbaikan yang praktis",
      "Menghindari pemberian rekomendasi kepada manajemen karena audit hanya berfungsi mencatat aktivitas pengguna"
    ],
    answer: 2,
    explanation: "Audit data security sebaiknya dilakukan oleh auditor independen agar menghasilkan penilaian yang objektif beserta rekomendasi perbaikan yang praktis, bukan oleh pihak yang mengaudit pekerjaannya sendiri."
  },

  // ===================== WEEK 5: DOCUMENT & CONTENT MANAGEMENT =====================
  {
    topic: "Document & Content Management",
    question: "An organization wants to establish a process for storing, inventorying, and controlling both paper and electronic records. Which practice best describes this activity?",
    choices: ["Enterprise taxonomy development", "Document management", "Website content publishing", "Search engine optimization"],
    answer: 1,
    explanation: "Document management adalah proses penyimpanan, inventarisasi, dan pengendalian dokumen baik dalam bentuk fisik (paper) maupun elektronik."
  },
  {
    topic: "Document & Content Management",
    question: "A company organizes and categorizes information so that it can be stored, published, and reused across different departments. Which concept is being applied?",
    choices: ["Document disposal", "Physical records inventory", "Enterprise content management", "Document check-out"],
    answer: 2,
    explanation: "Enterprise Content Management (ECM) mencakup pengorganisasian dan kategorisasi informasi agar dapat disimpan, dipublikasikan, dan digunakan ulang lintas departemen."
  },
  {
    topic: "Document & Content Management",
    question: "Which of the following is the best example of unstructured data as described in document and content management?",
    choices: [
      "A video recording that has not been tagged or organized into records",
      "A customer table with predefined columns and primary keys",
      "A relational database table containing employee IDs",
      "A structured transaction table with fixed fields"
    ],
    answer: 0,
    explanation: "Unstructured data adalah data yang tidak memiliki model data yang terdefinisi secara formal, seperti rekaman video yang belum diberi tag/diorganisasi, berbeda dengan tabel database yang terstruktur dengan kolom dan primary key tetap."
  },
  {
    topic: "Document & Content Management",
    question: "Which of the following sequences correctly represents the four main stages used when planning a document's lifecycle?",
    choices: [
      "Distribution, creation or receipt, archiving, organization for retrieval",
      "Archiving, distribution, organization for retrieval, creation or receipt",
      "Organization for retrieval, archiving, creation or receipt, distribution",
      "Creation or receipt, organization for retrieval, distribution, archiving or disposition"
    ],
    answer: 3,
    explanation: "Empat tahap utama dalam document lifecycle adalah: Creation or receipt, Organization for retrieval, Distribution, dan Archiving or disposition — berurutan sesuai alur dokumen dari dibuat hingga diarsipkan/dimusnahkan."
  },
  {
    topic: "Document & Content Management",
    question: "A records manager is designing a classification system and taxonomy for thousands of organizational documents. What is the main intended benefit?",
    choices: [
      "Eliminating the need for retention policies",
      "Preventing the creation of electronic documents",
      "Making documents easier to retrieve",
      "Replacing all documents with structured database tables"
    ],
    answer: 2,
    explanation: "Tujuan utama dari classification system dan taxonomy adalah mempermudah pencarian dan pengambilan kembali (retrieval) dokumen di antara ribuan dokumen organisasi."
  },
  {
    topic: "Document & Content Management",
    question: "During the capture of electronic documents, which action is necessary to help users find those documents later?",
    choices: ["Indexing the documents", "Immediately disposing of the documents", "Removing document attributes", "Restricting all documents to paper storage"],
    answer: 0,
    explanation: "Indexing dilakukan pada saat capture dokumen elektronik agar dokumen dapat ditemukan kembali dengan mudah melalui pencarian di kemudian hari."
  },
  {
    topic: "Document & Content Management",
    question: "A project team needs to check documents in and out, compare revisions, track versions, and archive earlier copies. Which facility best supports these activities?",
    choices: ["A paper-only filing cabinet", "A keyword-free website", "A basic spreadsheet without version control", "A document repository"],
    answer: 3,
    explanation: "Document repository adalah fasilitas yang mendukung check-in/check-out, perbandingan revisi, pelacakan versi, dan pengarsipan salinan dokumen sebelumnya."
  },
  {
    topic: "Document & Content Management",
    question: "A critical document requires a formal change request, thorough impact evaluation, approval by a change authority, and full status accounting. Which level of control applies?",
    choices: ["Custody", "Formal", "Revision", "Informal"],
    answer: 1,
    explanation: "Formal control level mensyaratkan adanya change request resmi, evaluasi dampak yang menyeluruh, persetujuan dari change authority, dan status accounting secara penuh — sesuai untuk dokumen yang sangat kritis."
  },
  {
    topic: "Document & Content Management",
    question: "When an internal document changes, the organization requires notification to stakeholders and an incremented version number, but no formal change authority. Which control level is most appropriate?",
    choices: ["Formal", "Custody", "Revision", "Disposal"],
    answer: 2,
    explanation: "Revision control cukup dengan memberitahu stakeholder yang relevan dan menambah nomor versi dokumen, tanpa memerlukan persetujuan formal dari sebuah change authority."
  },
  {
    topic: "Document & Content Management",
    question: "A low-criticality document only needs safe storage and a reliable means of retrieval. Which control level best matches this requirement?",
    choices: ["Custody", "Formal", "Revision", "Audit"],
    answer: 0,
    explanation: "Custody control level hanya memerlukan penyimpanan yang aman dan metode retrieval yang reliable, sesuai untuk dokumen dengan tingkat kekritisan rendah."
  },
  {
    topic: "Document & Content Management",
    question: "An organization is preparing a disaster recovery plan for its documents and records. Which of the following is a required activity?",
    choices: [
      "Deleting vital records to reduce storage costs",
      "Identifying vital records and developing protection and recovery plans",
      "Replacing recovery procedures with a search engine",
      "Keeping recovery procedures separate from corporate backup activities"
    ],
    answer: 1,
    explanation: "Penyusunan disaster recovery plan untuk dokumen/records mengharuskan identifikasi vital records terlebih dahulu, kemudian mengembangkan rencana proteksi dan recovery untuk record-record tersebut."
  },
  {
    topic: "Document & Content Management",
    question: "A company specifies how long records must be maintained and when inactive records can move to secondary storage or be disposed of. Which program governs these decisions?",
    choices: ["Enterprise taxonomy mapping", "Digital asset publishing", "Search result ranking", "Retention and disposition"],
    answer: 3,
    explanation: "Program Retention and Disposition menentukan berapa lama record harus dipertahankan serta kapan record yang sudah inaktif dipindahkan ke secondary storage atau dimusnahkan."
  },
  {
    topic: "Document & Content Management",
    question: "Why should an organization periodically audit its document and records management practices?",
    choices: [
      "To ensure the right information reaches the right people at the right time",
      "To eliminate the need for document classification",
      "To guarantee that every document is stored permanently",
      "To replace all operational decisions with automated searches"
    ],
    answer: 0,
    explanation: "Audit berkala terhadap praktik document dan records management dilakukan untuk memastikan informasi yang tepat tersedia bagi orang yang tepat pada waktu yang tepat."
  },
  {
    topic: "Document & Content Management",
    question: "A university maintains its intranet by creating, editing, storing, organizing, and publishing digital articles through a controlled process. Which system is typically responsible?",
    choices: ["A disaster recovery system only", "A physical inventory management system", "A content management system", "A document destruction service"],
    answer: 2,
    explanation: "Content Management System (CMS) adalah sistem yang bertanggung jawab atas proses pembuatan, pengeditan, penyimpanan, pengorganisasian, dan publikasi konten digital seperti artikel intranet."
  },
  {
    topic: "Document & Content Management",
    question: "An enterprise defines relationships between content items, their required attributes, and the structure used to organize them. What is being developed?",
    choices: ["A document retention calendar", "Information Content Architecture", "A backup rotation schedule", "A change approval log"],
    answer: 1,
    explanation: "Mendefinisikan hubungan antar item konten, atribut yang diperlukan, dan struktur pengorganisasiannya merupakan pengembangan Information Content Architecture."
  },
  {
    topic: "Document & Content Management",
    question: "A taxonomy classifies countries into a controlled list of categories without relationships or hierarchy among those categories. Which type of taxonomy is this?",
    choices: ["Network taxonomy", "Hierarchical taxonomy", "Facet taxonomy", "Flat taxonomy"],
    answer: 3,
    explanation: "Flat taxonomy mengklasifikasikan item ke dalam daftar kategori terkontrol tanpa adanya relasi atau hierarki antar kategori tersebut."
  },
  {
    topic: "Document & Content Management",
    question: "A digital content object is described by creator, title, keywords, and access rights, each treated as an attribute of the same object. Which taxonomy type is illustrated?",
    choices: ["Facet taxonomy", "Flat taxonomy", "Hierarchical taxonomy", "Network taxonomy"],
    answer: 0,
    explanation: "Facet taxonomy mendeskripsikan sebuah objek melalui beberapa atribut/facet independen (misalnya creator, title, keyword, access rights) yang melekat pada objek yang sama."
  },
  {
    topic: "Document & Content Management",
    question: "A classification system lets users move from continent to country to city and then to address, refining the category at each level. Which taxonomy is being used?",
    choices: ["Facet taxonomy", "Flat taxonomy", "Hierarchical taxonomy", "Network taxonomy"],
    answer: 2,
    explanation: "Hierarchical taxonomy memungkinkan pengguna menelusuri dari kategori umum ke kategori yang lebih spesifik secara berjenjang, misalnya dari benua hingga alamat."
  },
  {
    topic: "Document & Content Management",
    question: "An online library recommends related materials using associations between content items, including links across different classification categories. Which taxonomy best fits this approach?",
    choices: ["Flat taxonomy", "Network taxonomy", "Hierarchical taxonomy only", "Facet taxonomy only"],
    answer: 1,
    explanation: "Network taxonomy menghubungkan item konten lintas kategori klasifikasi melalui asosiasi/relasi, sehingga mendukung rekomendasi konten yang saling terkait."
  },
  {
    topic: "Document & Content Management",
    question: "A search engine uses software that roams the Web and stores URLs of content it encounters. Which component performs this function?",
    choices: ["Retention scheduler", "Change authority", "Document repository", "Spider software"],
    answer: 3,
    explanation: "Spider software (web crawler) adalah komponen yang menjelajahi web dan menyimpan URL dari konten yang ditemukannya, digunakan oleh search engine."
  },

  // ===================== WEEK 6: REFERENCE & MASTER DATA MANAGEMENT =====================
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following best describes the purpose of Reference Data Management?",
    choices: [
      "Recording every transaction performed by an organization",
      "Controlling standardized domain values and ensuring their consistent use across systems",
      "Storing only unstructured documents and images",
      "Replacing all master data with transaction data"
    ],
    answer: 1,
    explanation: "Reference Data Management bertujuan mengontrol nilai-nilai domain yang terstandardisasi (reference data) dan memastikan penggunaannya konsisten di seluruh sistem organisasi."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A help desk system uses the values New, Assigned, Work In Progress, and Resolved to indicate ticket status. These values are an example of:",
    choices: ["Internally defined reference data", "Product master data", "Transactional data lineage", "Financial master data"],
    answer: 0,
    explanation: "Nilai status seperti New, Assigned, Work In Progress, dan Resolved merupakan reference data yang didefinisikan secara internal oleh organisasi/aplikasi, bukan berasal dari standar eksternal."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A data integration team maps the codes CA, US-CA, and 06 to the same state, California. Which concept is being applied?",
    choices: ["Data replication scheduling", "Match-merge rules", "Cross-reference data", "Product master data"],
    answer: 2,
    explanation: "Memetakan beberapa kode berbeda (CA, US-CA, 06) yang merujuk pada entitas yang sama (California) merupakan contoh penerapan cross-reference data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization uses UNSPSC codes to classify products from broad categories into more specific categories using parent-child relationships. What type of reference data is this?",
    choices: ["Financial master data", "Transactional data", "Location master data", "Taxonomic reference data"],
    answer: 3,
    explanation: "UNSPSC adalah contoh taxonomic reference data — mengklasifikasikan produk dari kategori umum ke kategori yang lebih spesifik melalui relasi parent-child."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Who is responsible for maintaining reference data code values, descriptions, and business definitions, including monitoring changes to external standards?",
    choices: ["Application end users only", "Business data stewards", "External customers only", "Network administrators only"],
    answer: 1,
    explanation: "Business data steward bertanggung jawab memelihara code values, deskripsi, dan definisi bisnis dari reference data, termasuk memantau perubahan pada standar eksternal yang relevan."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which statement correctly distinguishes master data from reference data?",
    choices: [
      "Master data must always use a fixed list of predefined domain values",
      "Reference data describes individual customers and employees in every transaction",
      "Master data describes essential business entities that provide context for transactions",
      "Master data never follows rules about formats or allowable ranges"
    ],
    answer: 2,
    explanation: "Master data menggambarkan entitas bisnis esensial (seperti party, product, lokasi) yang memberikan konteks bagi transaksi, berbeda dari reference data yang berupa kumpulan nilai domain standar."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A university maintains records describing its students and lecturers and the roles they play in the institution. Which master data category best fits these records?",
    choices: ["Party master data", "Product master data", "Financial master data", "Location reference data"],
    answer: 0,
    explanation: "Data mengenai orang (mahasiswa, dosen) beserta peran mereka dalam institusi termasuk dalam kategori party master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Data about organizational cost centers, general ledger accounts, budgets, and projections belongs primarily to:",
    choices: ["Party master data", "Location master data", "Taxonomic reference data", "Financial master data"],
    answer: 3,
    explanation: "Data terkait cost center, akun general ledger, budget, dan projection merupakan bagian dari financial master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A manufacturing company maintains bill-of-materials structures, component usage, product versions, and design documents. Which type of master data is most relevant?",
    choices: ["Party master data", "Product master data", "Location reference data", "Order-status reference data"],
    answer: 1,
    explanation: "Struktur bill-of-materials, penggunaan komponen, versi produk, dan dokumen desain merupakan bagian dari product master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following is the best example of location master data rather than location reference data?",
    choices: [
      "An official list of country codes",
      "A standardized list of province names",
      "A customer's address and geographic coordinates",
      "A table of postal-code formats"
    ],
    answer: 2,
    explanation: "Alamat dan koordinat geografis milik pelanggan tertentu merupakan location master data (instance spesifik), sedangkan daftar kode negara/provinsi/format kode pos adalah location reference data (standar/domain value)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following is a primary goal of Reference and Master Data Management?",
    choices: [
      "Providing an authoritative source of reconciled, high-quality data",
      "Encouraging separate definitions of the same entity in each application",
      "Eliminating the need for data quality measurements",
      "Preventing business intelligence systems from reusing data"
    ],
    answer: 0,
    explanation: "Salah satu tujuan utama Reference and Master Data Management adalah menyediakan sumber data otoritatif yang telah direkonsiliasi (reconciled) dan berkualitas tinggi untuk digunakan secara konsisten."
  },
  {
    topic: "Reference & Master Data Management",
    question: "In a hub-and-spoke reference data architecture, what is the main function of the database of record?",
    choices: [
      "Storing only temporary copies of reports",
      "Allowing each application to define its own conflicting codes",
      "Receiving updates only from data marts",
      "Acting as the authoritative hub that supplies data to other applications"
    ],
    answer: 3,
    explanation: "Dalam arsitektur hub-and-spoke, database of record berfungsi sebagai hub otoritatif yang mendistribusikan data ke aplikasi-aplikasi lain (spoke)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A source system publishes a reference data change, and subscribed application databases receive the update shortly afterward without a coordinated real-time transaction. Which approach is illustrated?",
    choices: [
      "Manual data entry into every database",
      "Asynchronous subscribe-and-publish replication",
      "Synchronous coordinated updates across databases",
      "Deletion of all replicated data"
    ],
    answer: 1,
    explanation: "Pendekatan ini adalah asynchronous subscribe-and-publish replication, di mana perubahan data direplikasi ke sistem yang berlangganan tanpa transaksi real-time yang terkoordinasi."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization routes reference and master data from several systems of record through a shared operational data store (ODS). What is a key advantage of this design?",
    choices: [
      "It requires more point-to-point interfaces between all applications",
      "It removes the need to manage data sources",
      "It standardizes interfaces and reduces point-to-point integration complexity",
      "It prevents applications from accessing shared master data"
    ],
    answer: 2,
    explanation: "Operational Data Store (ODS) bersama menstandardisasi interface antar sistem dan mengurangi kompleksitas integrasi point-to-point yang biasanya muncul bila setiap sistem saling terhubung langsung."
  },
  {
    topic: "Reference & Master Data Management",
    question: "What is a likely consequence of managing reference and master data separately in application silos without a data integration architecture?",
    choices: [
      "Redundant and inconsistent data across applications",
      "Automatic creation of a single golden record",
      "Complete elimination of data quality problems",
      "Standardized definitions in every application by default"
    ],
    answer: 0,
    explanation: "Mengelola reference dan master data secara silo tanpa arsitektur integrasi data cenderung menghasilkan data yang redundant dan tidak konsisten antar aplikasi."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which activity is an example of a common service that should be supported by a data integration architecture?",
    choices: [
      "Allowing every application to apply unrelated matching rules",
      "Disabling change approval for shared data",
      "Removing audit and error-resolution information",
      "Applying consistent data quality checks and matching rules"
    ],
    answer: 3,
    explanation: "Layanan umum (common service) dalam arsitektur integrasi data mencakup penerapan data quality check dan matching rules secara konsisten di seluruh sistem."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A company wants to flag potentially duplicate customer records for review, but it does not want the system to merge them automatically. Which matching approach should be used?",
    choices: ["Match-link rules", "Duplicate identification match rules", "Match-merge rules", "Data replication rules"],
    answer: 1,
    explanation: "Untuk menandai kemungkinan duplikat tanpa menggabungkannya secara otomatis, digunakan duplicate identification match rules, sehingga hasilnya dapat direview secara manual sebelum ditindaklanjuti."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Two systems contain complementary and conflicting information about the same supplier. The organization wants to reconcile these records into one comprehensive record. Which matching approach is most appropriate?",
    choices: [
      "Duplicate identification without further action",
      "Data classification using a taxonomy",
      "Match-merge rules",
      "Match-link rules without modifying record contents"
    ],
    answer: 2,
    explanation: "Match-merge rules digunakan untuk merekonsiliasi informasi yang saling melengkapi maupun berkonflik dari beberapa record menjadi satu record yang komprehensif (golden record)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization needs to establish a relationship between records referring to the same person while preserving the original content of each record. Which approach is most suitable?",
    choices: [
      "Match-link rules",
      "Match-merge rules",
      "Deleting all duplicate records immediately",
      "Converting the records into reference value domains"
    ],
    answer: 0,
    explanation: "Match-link rules digunakan untuk menghubungkan record-record yang merujuk ke entitas yang sama tanpa mengubah atau menggabungkan isi record aslinya."
  },
  {
    topic: "Reference & Master Data Management",
    question: "What does a golden master data value represent?",
    choices: [
      "The first value entered into any application, regardless of its accuracy",
      "A value that must remain unchanged even when the business entity changes",
      "The value stored in the system with the oldest database",
      "The most accurate, current, and relevant value selected for consistent shared use"
    ],
    answer: 3,
    explanation: "Golden value adalah nilai yang paling akurat, terkini, dan relevan yang dipilih untuk digunakan secara konsisten di seluruh organisasi, biasanya hasil dari proses match-merge."
  },

  // ===================== MODUL: PENGENALAN DATA GOVERNANCE & DATA MANAGEMENT =====================
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Dalam analogi pipa dan cairan, apa yang diibaratkan sebagai 'cairan' dan apa peran Data Governance?",
    choices: [
      "Data adalah cairan yang mengalir; Data Governance adalah keputusan tentang data tersebut (siapa, apa, kapan, di mana, bagaimana people/process/rules/teknologi memengaruhi data agar tetap 'bersih')",
      "IT adalah cairan; Data Governance adalah pompa dan filter",
      "Data adalah pipa; Data Governance adalah keputusan tentang pipa",
      "Data Governance adalah pipa yang memindahkan informasi"
    ],
    answer: 0,
    explanation: "IT diibaratkan pipa dan IT Governance adalah keputusan tentang pipa/pompa/filter. Data adalah cairan yang mengalir, dan Data Governance adalah keputusan tentang data itu sendiri."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Manakah definisi Data Governance yang paling sesuai dengan modul?",
    choices: [
      "Proses membersihkan data (data cleansing) pada seluruh sistem",
      "Pelaksanaan otoritas dan kontrol (perencanaan, pemantauan, penegakan) atas pengelolaan aset data",
      "Aktivitas tim Data Warehouse untuk membuat laporan BI",
      "Keputusan mengenai pembelian server dan jaringan"
    ],
    answer: 1,
    explanation: "Data Governance adalah high-level planning and control atas data management, yaitu authority dan control (planning, monitoring, enforcement) terhadap pengelolaan data assets."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Kepemilikan data (data ownership) tidak didefinisikan secara formal sehingga sebagian besar unit merasa hanya sebagai data consumer. Apa dampaknya terhadap bisnis?",
    choices: [
      "Data menjadi otomatis lebih akurat",
      "Proses cleansing data menjadi lebih efisien",
      "Keputusan terkait masalah data tidak diambil tepat waktu (proses resolusi konflik lebih lama)",
      "Cross selling menjadi lebih mudah"
    ],
    answer: 2,
    explanation: "Tanpa pemilik data yang jelas, tidak ada pihak yang bertanggung jawab menyelesaikan masalah data sehingga resolusi konflik menjadi lama dan keputusan terlambat."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Menurut guiding principles, bagaimana sebaiknya data steward ditunjuk?",
    choices: [
      "Direkrut dari luar perusahaan khusus untuk peran steward",
      "Dipilih dari staf IT saja",
      "Dilatih dari nol oleh konsultan",
      "Ditemukan, bukan dibuat: tunjuk orang yang sudah tertarik dan terlibat dalam pekerjaan data"
    ],
    answer: 3,
    explanation: "Prinsip 'the best data stewards are found, not made'. Penunjukan adalah pengakuan dan formalisasi akuntabilitas atas pekerjaan yang sudah mereka lakukan."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Tiga organisasi lintas fungsi yang memiliki tanggung jawab 'legislatif dan yudisial' dalam data governance adalah...",
    choices: [
      "Data Governance Council, Data Stewardship Program Steering Committees, dan Data Stewardship Teams",
      "CIO, DBA, dan Data Architect",
      "Data Governance Office, DBA, dan Data Analyst",
      "Data Management Executive, Data Broker, dan Help Desk"
    ],
    answer: 0,
    explanation: "Ketiganya bertugas menetapkan kebijakan/standar (legislatif) dan menyelesaikan isu (yudisial), sedangkan Data Management Services menjalankan fungsi eksekutif (administrasi, layanan, perlindungan)."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Pada Data Issue Escalation Path, sekitar berapa persen konflik data dapat diselesaikan di level Data Stewardship Teams?",
    choices: ["Kurang dari 5%", "Kurang dari 20%", "50-60%", "80-85%"],
    answer: 3,
    explanation: "Sebagian besar isu (80-85%) diselesaikan di level operasional oleh Data Stewardship Teams. Sisanya naik ke Steering Committee (<20%) dan Data Governance Council (<5%)."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Apa perbedaan utama data policy dengan data standards & procedures?",
    choices: [
      "Policy menjelaskan 'bagaimana' melakukan sesuatu, standards menjelaskan 'apa'",
      "Policy menjelaskan 'apa' yang harus/tidak boleh dilakukan, standards dan procedures menjelaskan 'bagaimana' melakukannya",
      "Policy lebih detail dan jumlahnya banyak",
      "Tidak ada perbedaan"
    ],
    answer: 1,
    explanation: "Data policy adalah pernyataan singkat maksud manajemen dan aturan fundamental (jumlahnya relatif sedikit). Standards dan procedures lebih detail dan menjelaskan cara melakukan sesuatu."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Manakah yang BUKAN merupakan hakikat Data Governance?",
    choices: [
      "Kerja sama antara Business dan IT",
      "Proses yang berkelanjutan",
      "Masalah teknologi yang cukup diserahkan ke IT",
      "Inisiatif tingkat enterprise"
    ],
    answer: 2,
    explanation: "Data Governance adalah kombinasi people, process, technology, dan metrics, bukan sekadar masalah teknologi atau aktivitas yang 'dilempar' ke IT."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Siapa yang dilaporkan oleh Data Management Executive (DME)?",
    choices: ["CIO", "Chief Data Steward", "Data Stewardship Team", "Regulatory Bodies"],
    answer: 0,
    explanation: "DME adalah manajer tertinggi Data Management Services di departemen IT, melapor ke CIO ('tangan kanan CIO'), dan bertanggung jawab mengoordinasikan governance, stewardship, serta proyek data management."
  },
  {
    topic: "Pengenalan Data Governance & Data Management",
    question: "Apa tujuan utama dibentuknya Data Governance Office pada perusahaan besar?",
    choices: [
      "Menggantikan Data Governance Council",
      "Mengelola infrastruktur server dan jaringan",
      "Menyediakan dukungan penuh waktu bagi tanggung jawab data stewardship paruh waktu, melalui Data Stewardship Facilitators",
      "Mengaudit seluruh pengguna data secara eksternal"
    ],
    answer: 2,
    explanation: "Business data steward biasanya bekerja paruh waktu. DGO berisi facilitator yang mengurus legwork (jadwal rapat, notulen, pengumpulan informasi) agar steward dapat mengambil keputusan yang tepat."
  },

  // ===================== MODUL: DATA ARCHITECTURE =====================
  {
    topic: "Data Architecture",
    question: "Apa inti dari Data Architecture?",
    choices: [
      "Memilih merek database yang paling murah",
      "Menjalankan backup dan recovery harian",
      "Mengidentifikasi kebutuhan data enterprise dan merancang serta memelihara master blueprint untuk memenuhinya",
      "Membuat laporan dashboard untuk manajer"
    ],
    answer: 2,
    explanation: "Data Architecture mengidentifikasi kebutuhan data enterprise (apa pun strukturnya) dan merancang blueprint untuk memandu integrasi data, kontrol aset data, serta menyelaraskan investasi data dengan strategi bisnis."
  },
  {
    topic: "Data Architecture",
    question: "Apa tujuan (purpose) Enterprise Data Architecture dibandingkan domain arsitektur lainnya?",
    choices: [
      "Mendeskripsikan bagaimana data harus diorganisasi dan dikelola",
      "Mendeskripsikan teknologi fisik yang dibutuhkan agar sistem berfungsi",
      "Mengidentifikasi bagaimana enterprise menciptakan nilai bagi pelanggan",
      "Mendeskripsikan struktur dan fungsi aplikasi di enterprise"
    ],
    answer: 0,
    explanation: "Business Architecture: penciptaan nilai. Data Architecture: pengorganisasian dan pengelolaan data. Applications Architecture: struktur dan fungsi aplikasi. Technology Architecture: teknologi fisik."
  },
  {
    topic: "Data Architecture",
    question: "Pendekatan pembangunan enterprise data model mana yang biasanya direkomendasikan?",
    choices: [
      "Hanya top-down",
      "Hanya bottom-up",
      "Kombinasi: mulai bottom-up dari model yang ada, lalu lengkapi dengan mendelegasikan pemodelan subject area ke proyek-proyek",
      "Tidak perlu membangun enterprise data model"
    ],
    answer: 2,
    explanation: "Top-down dimulai dari membentuk subject area, bottom-up berdasarkan model yang sudah ada. Kombinasi keduanya yang umumnya disarankan."
  },
  {
    topic: "Data Architecture",
    question: "Urutan level model dari yang paling umum ke paling detail pada Enterprise Data Model adalah...",
    choices: [
      "Logical Model → Conceptual Model → Subject Area Model → Application-specific",
      "Subject Area Model → Conceptual Model → Physical Model",
      "Application-specific → Logical Model → Conceptual Model",
      "Conceptual Model → Subject Area Model → Logical Model → Application/Project-Specific (LDM/PDM)"
    ],
    answer: 3,
    explanation: "Conceptual model (12-20 subject area) dirinci menjadi Subject Area Model, lalu Logical Model per subject area, dan terakhir model spesifik aplikasi/proyek (LDM & PDM)."
  },
  {
    topic: "Data Architecture",
    question: "Pada matriks data flow (entitas vs proses bisnis), apa arti penanda 'Create' dan 'Read/use'?",
    choices: [
      "Create: proses yang menghapus data; Read/use: proses yang mengarsipkan data",
      "Create: proses bisnis yang membuat/menghasilkan data entitas; Read/use: proses yang hanya membaca/menggunakannya",
      "Create dan Read/use sama-sama berarti mengubah data",
      "Create: pengguna eksternal; Read/use: pengguna internal"
    ],
    answer: 1,
    explanation: "Matriks menunjukkan proses mana yang menjadi sumber (create) suatu entitas data dan proses mana yang hanya menggunakannya (read/use), membantu melihat aliran data di seluruh enterprise."
  },
  {
    topic: "Data Architecture",
    question: "Manakah yang termasuk deliverables Data Architecture menurut context diagram?",
    choices: [
      "Enterprise Data Model, Data Flows, Data Value Chains, dan Implementation Roadmap",
      "Backup tapes dan log database",
      "Source code aplikasi mobile",
      "Laporan audit keuangan"
    ],
    answer: 0,
    explanation: "Deliverables: Data Architecture Design, Data Flows, Data Value Chains, Enterprise Data Model, dan Implementation Roadmap."
  },
  {
    topic: "Data Architecture",
    question: "Mengapa replikasi data perlu dikontrol oleh Data Architecture governance?",
    choices: [
      "Karena replikasi dapat meningkatkan performa dan ketersediaan, tetapi juga bisa menimbulkan inkonsistensi data",
      "Karena replikasi selalu menurunkan performa aplikasi",
      "Karena replikasi dilarang oleh regulasi",
      "Karena replikasi menghapus metadata"
    ],
    answer: 0,
    explanation: "Replikasi umum dipakai untuk meningkatkan kinerja dan ketersediaan, namun berisiko inkonsisten. Governance memastikan mekanisme replikasi sesuai tingkat konsistensi yang dibutuhkan (tidak semua aplikasi butuh konsistensi ketat)."
  },
  {
    topic: "Data Architecture",
    question: "Manakah yang termasuk risiko dalam readiness/risk assessment penerapan Data Architecture?",
    choices: [
      "Dukungan manajemen yang kuat",
      "Culture shock dan kurangnya dukungan manajemen",
      "Sponsor yang sangat percaya diri",
      "Rekam jejak keberhasilan yang panjang"
    ],
    answer: 1,
    explanation: "Risiko di modul: kurang dukungan manajemen, tidak ada rekam jejak, sponsor ragu-ragu, keputusan eksekutif kontraproduktif, culture shock, project leader kurang berpengalaman, dan dominasi satu sudut pandang."
  },
  {
    topic: "Data Architecture",
    question: "Manakah yang BUKAN metrik kinerja Enterprise Data Architecture?",
    choices: [
      "Architecture standard compliance rate",
      "Use/reuse/replace/retire measurements",
      "Business value measurements (misalnya business agility)",
      "Jumlah baris data transaksi per hari"
    ],
    answer: 3,
    explanation: "Metrik meliputi tingkat kepatuhan standar arsitektur, tren implementasi (use/reuse/replace/retire, efisiensi eksekusi proyek), dan pengukuran nilai bisnis."
  },
  {
    topic: "Data Architecture",
    question: "Dalam Data Architecture Governance, Enterprise Data Architecture diibaratkan sebagai apa untuk integrasi jangka panjang?",
    choices: ["Kotak alat (toolbox)", "Rencana tata ruang ('zoning plan')", "Buku kas", "Mesin pencari"],
    answer: 1,
    explanation: "Enterprise Data Architecture berfungsi sebagai 'zoning plan' integrasi jangka panjang; arsitektur masa depan memengaruhi tujuan dan prioritas proyek di portofolio."
  },

  // ===================== MODUL: DATA DEVELOPMENT & OPERATIONS =====================
  {
    topic: "Data Development & Operations",
    question: "Data Development didefinisikan sebagai...",
    choices: [
      "Perencanaan, kontrol, dan dukungan aset data terstruktur sepanjang siklus hidup",
      "Merancang, mengimplementasikan, dan memelihara solusi untuk memenuhi kebutuhan data enterprise",
      "Pengawasan regulasi data oleh pemerintah",
      "Pembuatan kebijakan data oleh Data Governance Council"
    ],
    answer: 1,
    explanation: "Pilihan A adalah definisi Data Operations Management. Data Development berfokus pada desain, implementasi, dan pemeliharaan solusi data."
  },
  {
    topic: "Data Development & Operations",
    question: "Manakah pernyataan yang benar tentang conceptual data model?",
    choices: [
      "Memuat tipe data dan indeks spesifik DBMS",
      "Bergantung pada teknologi database yang dipakai",
      "Hanya dibuat setelah database fisik selesai",
      "Memuat entitas bisnis dasar dan kritis beserta hubungannya, independen dari teknologi dan konteks penggunaan"
    ],
    answer: 3,
    explanation: "Conceptual model adalah gambaran tingkat tinggi tentang subject area bisnis yang mendefinisikan semantik (kata benda dan kata kerja) istilah bisnis, dan disertai glosarium."
  },
  {
    topic: "Data Development & Operations",
    question: "Entitas 'Registration' yang bergantung pada Student dan Course merupakan contoh entitas...",
    choices: [
      "Attributive/characteristic entity",
      "Independent entity",
      "Associative/mapping entity",
      "Category/sub-type entity"
    ],
    answer: 2,
    explanation: "Associative/mapping entity bergantung pada dua atau lebih entitas. Attributive bergantung pada satu entitas induk (contoh: Employee Beneficiary). Category/sub-type adalah jenis dari entitas lain."
  },
  {
    topic: "Data Development & Operations",
    question: "Pernyataan 'Satu perusahaan dapat mempekerjakan banyak orang' merupakan contoh aturan data jenis...",
    choices: [
      "Cardinality, yaitu jumlah instans entitas yang dapat berpartisipasi dalam suatu relationship",
      "Referential integrity",
      "Normalization",
      "Abstraction"
    ],
    answer: 0,
    explanation: "Cardinality mendefinisikan kuantitas instans entitas dalam relationship. Referential integrity memastikan nilai valid (misal: orang boleh ada tanpa perusahaan, tetapi perusahaan harus punya minimal satu orang)."
  },
  {
    topic: "Data Development & Operations",
    question: "Tujuan dasar normalization pada logical data model adalah...",
    choices: [
      "Memperbanyak duplikasi data agar akses cepat",
      "Menyimpan setiap elemen data hanya di satu tempat",
      "Menggabungkan semua atribut dalam satu tabel",
      "Menghapus semua relationship antar entitas"
    ],
    answer: 1,
    explanation: "Normalization adalah proses menerapkan aturan untuk mengorganisasi kompleksitas bisnis ke struktur data yang stabil, dengan tujuan setiap elemen data berada di satu tempat saja."
  },
  {
    topic: "Data Development & Operations",
    question: "Konsep 'phone number' pada model konseptual dipecah menjadi phone type code, country code, area code, prefix, base number, dan extension di model logis. Prinsip apa yang diterapkan?",
    choices: [
      "Atribut harus bersifat atomik (satu fakta yang tidak dapat dibagi lagi)",
      "Atribut harus selalu menjadi primary key",
      "Atribut harus memakai nama teknis dengan singkatan",
      "Atribut harus bernilai NULL"
    ],
    answer: 0,
    explanation: "Atribut di model logis harus atomik: hanya memuat satu fakta yang tidak dapat dipecah lagi."
  },
  {
    topic: "Data Development & Operations",
    question: "Apa yang membedakan physical data model dari logical data model?",
    choices: [
      "Physical model tidak memuat tabel dan kolom",
      "Physical model hanya berisi glosarium bisnis",
      "Physical model mengoptimalkan implementasi dengan mempertimbangkan kemampuan DBMS, batasan teknologi, performa, dan standar pemodelan",
      "Physical model independen dari seluruh teknologi"
    ],
    answer: 2,
    explanation: "Physical model dirancang dengan kemampuan DBMS tertentu (misal Oracle, SQL Server) dan kebutuhan performa; logical model masih independen dari teknologi."
  },
  {
    topic: "Data Development & Operations",
    question: "Manakah yang merupakan tiga goal Data Operations Management?",
    choices: [
      "Melindungi integritas aset data terstruktur, mengelola ketersediaan data sepanjang siklus hidup, dan mengoptimalkan performa transaksi database",
      "Menentukan strategi bisnis, merekrut data steward, dan menilai aset data",
      "Membuat model konseptual, logis, dan fisik",
      "Menyusun kebijakan, standar, dan regulasi data"
    ],
    answer: 0,
    explanation: "Goal: (1) protect and ensure integrity of structured data assets, (2) manage availability of data throughout its lifecycle, (3) optimize performance of database transactions."
  },
  {
    topic: "Data Development & Operations",
    question: "Aktivitas 'Plan for Data Recovery' (4.1.3) dalam Data Operations termasuk kategori...",
    choices: ["Development (D)", "Planning (P)", "Operational (O)", "Control (C)"],
    answer: 1,
    explanation: "Plan for Data Recovery bertanda (P). Sedangkan 'Backup and Recover Data' adalah Operational (O), dan 'Monitor and Tune Database Performance' adalah Control (C) pada context diagram."
  },
  {
    topic: "Data Development & Operations",
    question: "Pada proses 'Backup and Recover Data', siapa Responsible Role dan Approving Role-nya?",
    choices: [
      "Responsible: Data Stewards; Approving: Data Governance Council",
      "Responsible: Software Developers; Approving: Data Architects",
      "Responsible: Data Analysts; Approving: Application Architects",
      "Responsible: DBAs; Approving: DM Executive"
    ],
    answer: 3,
    explanation: "Pada ringkasan Data Operations, backup dan recovery dilakukan oleh DBAs dan disetujui oleh DM Executive, dengan deliverable berupa backup/log database, restored database, dan business continuity."
  }
];
