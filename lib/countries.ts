export const POPULAR_JOB_COUNTRIES = [
  "Australia",
  "Austria",
  "Bahrain",
  "Belgium",
  "Brunei",
  "Bulgaria",
  "Canada",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kuwait",
  "Luxembourg",
  "Malaysia",
  "Maldives",
  "Malta",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Oman",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Saudi Arabia",
  "Serbia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Türkiye",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
] as const;

export function countrySlug(country: string) {
  return country
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
