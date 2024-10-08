const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.rehabilitation.createMany({
    data: [
      {
        id: 1,
        provinsi: "Prov Aceh",
        name: "Lapas Klas II A Banda Aceh",
        type: "Rawat Inap",
      },
      {
        id: 2,
        provinsi: "Prov Aceh",
        name: "Lapas Klas III Narkotika Langsa",
        type: "Rawat Inap",
      },
      {
        id: 3,
        provinsi: "Prov Aceh",
        name: "SPN Seulawah Aceh",
        type: "Rawat Inap",
      },
      {
        id: 4,
        provinsi: "Prov Aceh",
        name: "Rindam Iskandar Muda",
        type: "Rawat Inap",
      },
      {
        id: 5,
        provinsi: "Prov Bali",
        name: "SPN Singaraja",
        type: "Rawat Inap",
      },
      {
        id: 6,
        provinsi: "Prov Bali",
        name: "Rindam Udayana",
        type: "Rawat Inap",
      },
      {
        id: 7,
        provinsi: "Prov Bali",
        name: "Lapas Klas III Narkotika Bangli",
        type: "Rawat Inap",
      },
      {
        id: 8,
        provinsi: "Prov Bali",
        name: "Lapas Klas IIB Tabanan",
        type: "Rawat Inap",
      },
      {
        id: 9,
        provinsi: "Prov Bali",
        name: "Lapas Klas II A Denpasar",
        type: "Rawat Inap",
      },
      {
        id: 10,
        provinsi: "Prov Bangka Belitung",
        name: "Lapas Klas III Narkotika Pangkal Pinang",
        type: "Rawat Inap",
      },
      {
        id: 11,
        provinsi: "Prov Banten",
        name: "Pusdiklat Dinas Sosial Prov Banten (Pasir Ona)",
        type: "Rawat Inap",
      },
      {
        id: 12,
        provinsi: "Prov Banten",
        name: "Pusdiklantas",
        type: "Rawat Inap",
      },
      {
        id: 13,
        provinsi: "Prov Banten",
        name: "Lapas Klas I Tangerang",
        type: "Rawat Inap",
      },
      {
        id: 14,
        provinsi: "Prov Banten",
        name: "Lapas Klas IIA Wanita Tangerang",
        type: "Rawat Inap",
      },
      {
        id: 15,
        provinsi: "Prov Banten",
        name: "SPN Mandalawangi",
        type: "Rawat Inap",
      },
      {
        id: 16,
        provinsi: "Prov Banten",
        name: "Lapas Pemuda Tangerang",
        type: "Rawat Inap",
      },
      {
        id: 17,
        provinsi: "Prov Bengkulu",
        name: "SPN Bukit Kaba",
        type: "Rawat Inap",
      },
      {
        id: 18,
        provinsi: "Prov Bengkulu",
        name: "Lapas Klas II A Bengkulu",
        type: "Rawat Inap",
      },
      {
        id: 19,
        provinsi: "Prov DI Yogyakarta",
        name: "Lapas Klas II A Narkotika Yogyakarta",
        type: "Rawat Inap",
      },
      {
        id: 20,
        provinsi: "Prov DI Yogyakarta",
        name: "Lapas Klas IIA Yogyakarta",
        type: "Rawat Inap",
      },
      {
        id: 21,
        provinsi: "Prov DKI Jakarta",
        name: "Lapas Klas II A Narkotika Cipinang",
        type: "Rawat Inap",
      },
      {
        id: 22,
        provinsi: "Prov DKI Jakarta",
        name: "Lapas Klas I Cipinang",
        type: "Rawat Inap",
      },
      {
        id: 23,
        provinsi: "Prov DKI Jakarta",
        name: "Lapas Klas I Jakarta Pusat",
        type: "Rawat Inap",
      },
      {
        id: 24,
        provinsi: "Prov DKI Jakarta",
        name: "Rindam Jaya",
        type: "Rawat Inap",
      },
      {
        id: 25,
        provinsi: "Prov DKI Jakarta",
        name: "Pusdikes",
        type: "Rawat Inap",
      },
      {
        id: 26,
        provinsi: "Prov DKI Jakarta",
        name: "RS Suyoto",
        type: "Rawat Inap",
      },
      {
        id: 27,
        provinsi: "Prov Gorontalo",
        name: "Lapas Klas II A Gorontalo",
        type: "Rawat Inap",
      },
      { id: 28, provinsi: "Prov Jambi", name: "SPN Jambi", type: "Rawat Inap" },
      {
        id: 29,
        provinsi: "Prov Jambi",
        name: "Lapas Klas III Narkotika Muara Sabak",
        type: "Rawat Inap",
      },
      {
        id: 30,
        provinsi: "Prov Jambi",
        name: "Lapas Klas II A Jambi",
        type: "Rawat Inap",
      },
      {
        id: 31,
        provinsi: "Prov Jawa Barat",
        name: "Pusdikpom",
        type: "Rawat Inap",
      },
      {
        id: 32,
        provinsi: "Prov Jawa Barat",
        name: "Pusdikif",
        type: "Rawat Inap",
      },
      {
        id: 33,
        provinsi: "Prov Jawa Barat",
        name: "Lapas Klas II A Banceuy",
        type: "Rawat Inap",
      },
      {
        id: 34,
        provinsi: "Prov Jawa Barat",
        name: "Lapas Klas II A Narkotika Bandung",
        type: "Rawat Inap",
      },
      {
        id: 35,
        provinsi: "Prov Jawa Barat",
        name: "Lapas Klas II A Narkotika Gintung Cirebon",
        type: "Rawat Inap",
      },
      {
        id: 36,
        provinsi: "Prov Jawa Barat",
        name: "Lapas Klas IIA Wanita Bandung",
        type: "Rawat Inap",
      },
      {
        id: 37,
        provinsi: "Prov Jawa Barat",
        name: "Lapas Klas IIA Bogor",
        type: "Rawat Inap",
      },
      {
        id: 38,
        provinsi: "Prov Jawa Barat",
        name: "Rindam Siliwangi",
        type: "Rawat Inap",
      },
      {
        id: 39,
        provinsi: "Prov Jawa Barat",
        name: "Pusdikhubad",
        type: "Rawat Inap",
      },
      {
        id: 40,
        provinsi: "Prov Jawa Barat",
        name: "Pusdik Binmas",
        type: "Rawat Inap",
      },
      {
        id: 41,
        provinsi: "Prov Jawa Barat",
        name: "Pusdik Zeni",
        type: "Rawat Inap",
      },
      {
        id: 42,
        provinsi: "Prov Jawa Barat",
        name: "Pusdik Intel",
        type: "Rawat Inap",
      },
      {
        id: 43,
        provinsi: "Prov Jawa Tengah",
        name: "Lapas Klas II A Narkotika Nusakambangan",
        type: "Rawat Inap",
      },
      {
        id: 44,
        provinsi: "Prov Jawa Tengah",
        name: "Lapas Klas I Semarang",
        type: "Rawat Inap",
      },
      {
        id: 45,
        provinsi: "Prov Jawa Tengah",
        name: "Lapas Klas IIA Wanita Semarang",
        type: "Rawat Inap",
      },
      {
        id: 46,
        provinsi: "Prov Jawa Tengah",
        name: "Lapas Klas IIA Magelang",
        type: "Rawat Inap",
      },
      {
        id: 47,
        provinsi: "Prov Jawa Tengah",
        name: "Rindam Diponegoro",
        type: "Rawat Inap",
      },
      {
        id: 48,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas II A Narkotika Pamekasan",
        type: "Rawat Inap",
      },
      {
        id: 49,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas III Narkotika Madiun",
        type: "Rawat Inap",
      },
      {
        id: 50,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas I Malang",
        type: "Rawat Inap",
      },
      {
        id: 51,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas II A Pamekasan",
        type: "Rawat Inap",
      },
      {
        id: 52,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas I Madiun",
        type: "Rawat Inap",
      },
      {
        id: 53,
        provinsi: "Prov Jawa Timur",
        name: "Lapas Klas IIA Sidoarjo",
        type: "Rawat Inap",
      },
      {
        id: 54,
        provinsi: "Prov Jawa Timur",
        name: "Rindam Brawijaya",
        type: "Rawat Inap",
      },
      {
        id: 55,
        provinsi: "Prov Jawa Timur",
        name: "TNI AL",
        type: "Rawat Inap",
      },
      {
        id: 56,
        provinsi: "Prov Jawa Timur",
        name: "Pusdigasum",
        type: "Rawat Inap",
      },
      {
        id: 57,
        provinsi: "Prov Kalimantan Barat",
        name: "SPN Pontianak",
        type: "Rawat Inap",
      },
      {
        id: 58,
        provinsi: "Prov Kalimantan Barat",
        name: "Rindam TanjungPura",
        type: "Rawat Inap",
      },
      {
        id: 59,
        provinsi: "Prov Kalimantan Barat",
        name: "Lapas Klas II A Pontianak",
        type: "Rawat Inap",
      },
      {
        id: 60,
        provinsi: "Prov Kalimantan Selatan",
        name: "SPN BanjarBaru",
        type: "Rawat Inap",
      },
      {
        id: 61,
        provinsi: "Prov Kalimantan Selatan",
        name: "Lapas Klas II A Narkotika Karang Intan",
        type: "Rawat Inap",
      },
      {
        id: 62,
        provinsi: "Prov Kalimantan Tengah",
        name: "SPN Tjikriwut",
        type: "Rawat Inap",
      },
      {
        id: 63,
        provinsi: "Prov Kalimantan Tengah",
        name: "Lapas Klas III Narkotika Kasongan",
        type: "Rawat Inap",
      },
      {
        id: 64,
        provinsi: "Prov Kalimantan Timur",
        name: "Lapas Klas III Narkotika Samarinda",
        type: "Rawat Inap",
      },
      {
        id: 65,
        provinsi: "Prov Kalimantan Timur",
        name: "Lapas Klas IIA Samarinda",
        type: "Rawat Inap",
      },
      {
        id: 66,
        provinsi: "Prov Kalimantan Timur",
        name: "SPN Balikpapan",
        type: "Rawat Inap",
      },
      {
        id: 67,
        provinsi: "Prov Kalimantan Timur",
        name: "Rindam Mulawarman",
        type: "Rawat Inap",
      },
      {
        id: 68,
        provinsi: "Prov Kepulauan Riau",
        name: "Lapas Klas IIA Batam",
        type: "Rawat Inap",
      },
      {
        id: 69,
        provinsi: "Prov Kepulauan Riau",
        name: "Lapas Klas IIA Tanjung Pinang",
        type: "Rawat Inap",
      },
      {
        id: 70,
        provinsi: "Prov Kepulauan Riau",
        name: "Lapas Klas II A Narkotika Tanjung Pinang",
        type: "Rawat Inap",
      },
      {
        id: 71,
        provinsi: "Prov Lampung",
        name: "SPN Kemiling",
        type: "Rawat Inap",
      },
      {
        id: 72,
        provinsi: "Prov Lampung",
        name: "Loka Lampung",
        type: "Rawat Inap",
      },
      {
        id: 73,
        provinsi: "Prov Lampung",
        name: "Lapas Klas I Bandar Lampung",
        type: "Rawat Inap",
      },
      {
        id: 74,
        provinsi: "Prov Lampung",
        name: "Lapas Klas II A Narkotika Bandar Lampung",
        type: "Rawat Inap",
      },
      {
        id: 75,
        provinsi: "Prov Maluku Utara",
        name: "Lapas Klas II A Ternate",
        type: "Rawat Inap",
      },
      {
        id: 76,
        provinsi: "Prov Maluku",
        name: "Rindam Pattimura",
        type: "Rawat Inap",
      },
      {
        id: 77,
        provinsi: "Prov Maluku",
        name: "Lapas Klas II A Ambon",
        type: "Rawat Inap",
      },
      {
        id: 78,
        provinsi: "Prov Nusa Tenggara Barat",
        name: "SPN Belanting",
        type: "Rawat Inap",
      },
      {
        id: 79,
        provinsi: "Prov Nusa Tenggara Barat",
        name: "Lapas Klas II A Mataram",
        type: "Rawat Inap",
      },
      {
        id: 80,
        provinsi: "Prov Nusa Tenggara Timur",
        name: "SPN Kupang",
        type: "Rawat Inap",
      },
      {
        id: 81,
        provinsi: "Prov Papua Barat",
        name: "Pemda Papua Barat",
        type: "Rawat Inap",
      },
      {
        id: 82,
        provinsi: "Prov Papua Barat",
        name: "Lapas Papua Barat",
        type: "Rawat Inap",
      },
      {
        id: 83,
        provinsi: "Prov Papua",
        name: "Rindam Cendrawasih",
        type: "Rawat Inap",
      },
      {
        id: 84,
        provinsi: "Prov Papua",
        name: "Lapas Klas II A Narkotika Jayapura",
        type: "Rawat Inap",
      },
      { id: 85, provinsi: "Prov Papua", name: "SPN Papua", type: "Rawat Inap" },
      { id: 86, provinsi: "Prov Riau", name: "BNK Kampar", type: "Rawat Inap" },
      {
        id: 87,
        provinsi: "Prov Riau",
        name: "Lapas Klas II A Pekanbaru",
        type: "Rawat Inap",
      },
      {
        id: 88,
        provinsi: "Prov Sulawesi Barat",
        name: "Lapas Klas III Narkotika Mamuju",
        type: "Rawat Inap",
      },
      {
        id: 89,
        provinsi: "Prov Sulawesi Selatan",
        name: "SPN Batua",
        type: "Rawat Inap",
      },
      {
        id: 90,
        provinsi: "Prov Sulawesi Selatan",
        name: "Lapas Klas II A Narkotika Sungguminasa",
        type: "Rawat Inap",
      },
      {
        id: 91,
        provinsi: "Prov Sulawesi Selatan",
        name: "Lapas Klas I Makassar",
        type: "Rawat Inap",
      },
      {
        id: 92,
        provinsi: "Prov Sulawesi Tengah",
        name: "Rindam Tadulako",
        type: "Rawat Inap",
      },
      {
        id: 93,
        provinsi: "Prov Sulawesi Tenggara",
        name: "SPN Kendari",
        type: "Rawat Inap",
      },
      {
        id: 94,
        provinsi: "Prov Sulawesi Utara",
        name: "SPN Karombasan",
        type: "Rawat Inap",
      },
      {
        id: 95,
        provinsi: "Prov Sumatera Barat",
        name: "SPN Padang Besi",
        type: "Rawat Inap",
      },
      {
        id: 96,
        provinsi: "Prov Sumatera Barat",
        name: "Rindam Bukit Barisan",
        type: "Rawat Inap",
      },
      {
        id: 97,
        provinsi: "Prov Sumatera Barat",
        name: "Lapas Klas II A Narkotika Kayutanam",
        type: "Rawat Inap",
      },
      {
        id: 98,
        provinsi: "Prov Sumatera Barat",
        name: "Lapas Klas IIA Bukittinggi",
        type: "Rawat Inap",
      },
      {
        id: 99,
        provinsi: "Prov Sumatera Selatan",
        name: "SPN Betung",
        type: "Rawat Inap",
      },
      {
        id: 100,
        provinsi: "Prov Sumatera Selatan",
        name: "Lapas Klas IIA Lubuk Linggau",
        type: "Rawat Inap",
      },
      {
        id: 101,
        provinsi: "Prov Sumatera Selatan",
        name: "Lapas Klas IIA Narkotika Banyuasin",
        type: "Rawat Inap",
      },
      {
        id: 102,
        provinsi: "Prov Sumatera Selatan",
        name: "Rindam Sriwijaya",
        type: "Rawat Inap",
      },
      {
        id: 103,
        provinsi: "Prov Sumatera Selatan",
        name: "Lapas Klas I Palembang",
        type: "Rawat Inap",
      },
      {
        id: 104,
        provinsi: "Prov Sumatera Selatan",
        name: "Lapas Klas IIA Wanita Palembang",
        type: "Rawat Inap",
      },
      {
        id: 105,
        provinsi: "Prov Sumatera Selatan",
        name: "Puslatpur",
        type: "Rawat Inap",
      },
      {
        id: 106,
        provinsi: "Prov Sumatera Utara",
        name: "Lapas Klas I Medan",
        type: "Rawat Inap",
      },
      {
        id: 107,
        provinsi: "Prov Sumatera Utara",
        name: "Lapas Klas III Narkotika Siantar",
        type: "Rawat Inap",
      },
      {
        id: 108,
        provinsi: "Prov Sumatera Utara",
        name: "SPN Sampali",
        type: "Rawat Inap",
      },
      {
        id: 109,
        provinsi: "Prov Sumatera Utara",
        name: "Lapas Klas IIA Lubuk Pakam",
        type: "Rawat Inap",
      },
      {
        id: 110,
        provinsi: "Prov Sumatera Utara",
        name: "Lapas Klas IIA Pematang Siantar",
        type: "Rawat Inap",
      },
      {
        id: 111,
        provinsi: "Prov Sumatera Utara",
        name: "Rindam Bukit Barisan",
        type: "Rawat Inap",
      },
      {
        id: 112,
        provinsi: "Prov Sumatera Barat",
        name: "RS Jiwa Dr. H.B Saanin Padang",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 113,
        provinsi: "Prov Sumatera Utara",
        name: "RS Jiwa Prof. Dr. M. Ildrem Medan",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 114,
        provinsi: "Prov Riau",
        name: "RS Jiwa Tampan Pekanbaru",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 115,
        provinsi: "Prov Jambi",
        name: "RS Jiwa Jambi",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 116,
        provinsi: "Prov Sumatera Selatan",
        name: "RS Ernaldi Bahar Palembang",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 117,
        provinsi: "Prov Lampung",
        name: "RS Jiwa Provinsi Lampung",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 118,
        provinsi: "Prov DKI Jakarta",
        name: "RS Jiwa Dr. Soeharto Heerdjan Jakarta",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 119,
        provinsi: "Prov Jawa Barat",
        name: "RS Jiwa Bandung",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 120,
        provinsi: "Prov Jawa Tengah",
        name: "RS Jiwa Dr. Amino Gondohutomo Semarang",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 121,
        provinsi: "Prov Jawa Timur",
        name: "RS Jiwa Dr. Radjiman Wediodiningrat Malang",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 122,
        provinsi: "Prov Bali",
        name: "RS Jiwa Bangli",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 123,
        provinsi: "Prov Nusa Tenggara Barat",
        name: "RS Jiwa Mutiara Sukma NTB",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 124,
        provinsi: "Prov Kalimantan Barat",
        name: "RS Jiwa Sungai Bangkong Pontianak",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 125,
        provinsi: "Prov Kalimantan Tengah",
        name: "RS Jiwa Kalawa Atei Palangkaraya",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 126,
        provinsi: "Prov Kalimantan Selatan",
        name: "RS Jiwa Sambang Lihum Banjarmasin",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 127,
        provinsi: "Prov Kalimantan Timur",
        name: "RS Jiwa Daerah Atma Husada Mahakam Samarinda",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 128,
        provinsi: "Prov Sulawesi Utara",
        name: "RS Jiwa Ratumbuysang Manado",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 129,
        provinsi: "Prov Sulawesi Selatan",
        name: "RS Jiwa Dr. V. L. Ratumbuysang Manado",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 130,
        provinsi: "Prov Sulawesi Selatan",
        name: "RS Jiwa Dr. V.L. Ratumbuysang Manado",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 131,
        provinsi: "Prov Sulawesi Tenggara",
        name: "RS Jiwa Kendari",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 132,
        provinsi: "Prov Sulawesi Tengah",
        name: "RS Jiwa Madani Palu",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 133,
        provinsi: "Prov Gorontalo",
        name: "RS Jiwa Gorontalo",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 134,
        provinsi: "Prov Maluku",
        name: "RS Jiwa Dr. R. M. Jojo Binangun Maluku",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
      {
        id: 135,
        provinsi: "Prov Papua",
        name: "RS Jiwa Jayapura",
        type: "Rehabilitasi Narkoba Rawat Jalan",
      },
    ],
  });

  console.log("Semua data berhasil disisipkan");
}

main();
