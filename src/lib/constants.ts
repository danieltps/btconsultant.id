export const SITE = {
  name: "BTC Tax Consultant",
  legalName: "PT Bintang Konsultama Prima",
  tagline: "Certified Brevet C Tax Consultant",
  url: "https://btconsultant.id",
  email: "admin@btconsultant.id",
  phone: "+62 812 8 544 588 9",
  whatsapp: "6281285445889",
  address: {
    street: "Grand Galaxy City, RRG 2 No. 36",
    area: "Jakasetia, Bekasi Selatan",
    city: "Kota Bekasi, Jawa Barat 17147",
    mapsUrl: "https://maps.app.goo.gl/WAifXKD9f55bE4498",
  },
  social: {
    linkedin: "https://id.linkedin.com/company/btconsultant",
    instagram: "https://instagram.com/btconsultant.id",
  },
};

export const SERVICE_IDS = ["01", "02", "03", "04", "05"] as const;

export const CONSULTANTS = [
  {
    id: "bg",
    initials: "BG",
    name: "Berelli Ginting",
    degrees: "S.E., Ak., M.M., C.A., B.K.P.",
    license: "KEP-5310/IP.C/PJ/2019",
  },
  {
    id: "ts",
    initials: "TS",
    name: "Timbang Siahaan",
    degrees: "S.E., S.H., M.Si., M.H., B.K.P.",
    license: "KEP-8013/IP.C/PJ/2022",
  },
] as const;

export const INDUSTRY_IDS = [
  "energy",
  "infrastructure",
  "manufacturing",
  "property",
  "interior",
  "lifestyle",
  "logistics",
] as const;
