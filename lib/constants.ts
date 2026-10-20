const RECRUITMENT_LICENSE_NUMBER =
  process.env.NEXT_PUBLIC_RECRUITMENT_LICENSE_NUMBER?.trim() || "RL-1842";

export const PREFERRED_CANONICAL_URL = "https://www.recruitfrombangladesh.me";

export function normalizeCanonicalUrl(url: string): string {
  const rawValue = (url || PREFERRED_CANONICAL_URL).trim();

  try {
    const candidate = rawValue.startsWith("http://") || rawValue.startsWith("https://") ? rawValue : `https://${rawValue}`;
    const parsed = new URL(candidate);
    const preferredHost = new URL(PREFERRED_CANONICAL_URL).hostname.toLowerCase();

    const pathname = parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/+$/, "");
    const search = parsed.search || "";
    const hash = parsed.hash || "";

    return `${parsed.protocol}//${preferredHost}${pathname}${search}${hash}`.replace(/\/$/, "") || PREFERRED_CANONICAL_URL;
  } catch {
    return PREFERRED_CANONICAL_URL;
  }
}

export function dedupeCanonicalUrls(urls: string[]): string[] {
  return [...new Set(urls.map((url) => normalizeCanonicalUrl(url)))];
}

export const BRAND = {
  brandName: "Bangladesh Labour Supply",
  licensedCompanyName: "Janani Overseas Recruiting Agency Ltd.",
  licenseNumber: RECRUITMENT_LICENSE_NUMBER,
  websiteUrl: normalizeCanonicalUrl(process.env.NEXT_PUBLIC_SITE_URL || PREFERRED_CANONICAL_URL),
  phone: "+601166773501",
  whatsapp: "+8801625069703",
  email: "naimulmushfiq98@gmail.com",
  address: "Level 8, Gulshan Avenue, Dhaka 1212, Bangladesh",
  addressMapUrl: "https://maps.google.com/?q=Level+8,+Gulshan+Avenue,+Dhaka+1212,+Bangladesh",
  businessHours: "Mon - Sat • 9:00 AM - 6:30 PM (GMT+6)",
  linkedinUrl: "https://www.linkedin.com/company/janani-overseas-recruiting-agency-ltd/",
  whatsappMessage: "Hello, I need manpower recruitment support. Please contact me with candidate availability, compliance, and deployment timelines.",
};

export const MALAYSIA_SUBMENU_LINKS = [
  { label: "Overview", href: "/malaysia" },
  { label: "Required Documents", href: "/malaysia/required-documents" },
  { label: "Application & Approval", href: "/malaysia/application-approval-process" },
  { label: "How to Apply", href: "/malaysia/how-to-apply" },
  { label: "Recruitment Process", href: "/malaysia/recruitment-process" },
  { label: "How to Hire Workers", href: "/malaysia/how-to-hire-workers-from-bangladesh" },
  { label: "Foreign Worker Quota", href: "/malaysia/foreign-worker-quota" },
  { label: "Worker Categories", href: "/malaysia/worker-categories" },
  { label: "Construction Workers", href: "/malaysia/construction-workers" },
  { label: "Skilled Workers", href: "/malaysia/skilled-workers" },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Malaysia", href: "/malaysia", children: MALAYSIA_SUBMENU_LINKS },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_STATS = [
  {
    label: "Government Licensed",
    value: RECRUITMENT_LICENSE_NUMBER,
    helperText: "Bangladesh recruitment license",
  },
  { label: "Years of Experience", value: "12+", helperText: "Cross-border hiring operations" },
  { label: "Workers Deployed", value: "8,500+", helperText: "Placed through verified recruitment cycles" },
  { label: "Countries Served", value: "14", helperText: "Europe, Middle East, Japan, Korea" },
];

export const SERVICES = [
  {
    title: "Candidate Sourcing",
    description: "Structured talent identification through licensed field and database channels.",
  },
  {
    title: "Skill Verification",
    description: "Role-based screening, trade testing, and interview-ready candidate shortlists.",
  },
  {
    title: "Documentation Handling",
    description: "End-to-end support for legal paperwork and employer documentation packs.",
  },
  {
    title: "Visa Processing",
    description: "Coordinated submission and follow-through aligned to destination country rules.",
  },
  {
    title: "Deployment Coordination",
    description: "Travel planning, final compliance checks, and mobilization reporting.",
  },
];

export const INDUSTRIES = [
  "Construction",
  "Manufacturing",
  "Hospitality",
  "Logistics",
  "Cleaning",
  "Security",
];

export const PROCESS_STEPS = [
  {
    title: "Consultation",
    description: "Understand workforce needs, role specifications, and destination requirements.",
  },
  {
    title: "Sourcing",
    description: "Build qualified candidate pools through licensed recruitment channels.",
  },
  {
    title: "Screening",
    description: "Conduct interviews, technical assessments, and profile verification.",
  },
  {
    title: "Documentation",
    description: "Prepare contracts and regulatory documents with transparent tracking.",
  },
  {
    title: "Visa",
    description: "Manage submission flow and status follow-up to meet approved timelines.",
  },
  {
    title: "Deployment",
    description: "Execute pre-departure checks, orientation, and employer handover reporting.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The process was disciplined and predictable. Candidate quality and documentation accuracy were consistently strong.",
    company: "Industrial Contractor",
    country: "Qatar",
  },
  {
    quote:
      "Their compliance discipline reduced risk for our HR and legal teams. We received clear updates at each stage.",
    company: "Facility Management Group",
    country: "Saudi Arabia",
  },
  {
    quote:
      "From consultation to deployment, timelines were communicated clearly and delivered professionally.",
    company: "Manufacturing Employer",
    country: "Romania",
  },
];

export const SITE_COPY = {
  heroTitle: "Licensed Bangladesh Manpower Recruitment for International Employers",
  heroBody:
    "Foreign employers engage us to run verifiable recruitment cycles with documented screening, legal transparency, and disciplined deployment coordination.",
  ctaTitle: "Request a Compliance-Led Recruitment Consultation",
  ctaBody:
    "Share your workforce requirement and receive a structured response covering candidate pipeline approach, compliance checkpoints, and realistic mobilization timeline.",
  complianceBody:
    "Our recruitment operations are conducted under a valid Bangladesh government license with documented procedures, ethical recruitment commitments, and verifiable legal records.",
  contactTrustNote:
    "Business inquiries are reviewed within one working day by our operations team with a clear next-step recommendation.",
};

export const COMPLIANCE_PROOFS = [
  {
    title: "Government License",
    detail: `Recruitment operations conducted under Bangladesh government license ${RECRUITMENT_LICENSE_NUMBER}.`,
  },
  {
    title: "Contract Transparency",
    detail: "Employer-facing documentation checklist and status visibility at each process stage.",
  },
  {
    title: "Ethical Recruitment",
    detail: "Documented policy against hidden fee practices and unlawful candidate treatment.",
  },
  {
    title: "Audit Readiness",
    detail: "Process records maintained for legal verification and employer due diligence review.",
  },
];
