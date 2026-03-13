const RECRUITMENT_LICENSE_NUMBER =
  process.env.NEXT_PUBLIC_RECRUITMENT_LICENSE_NUMBER?.trim() || "RL-1842";

export const BRAND = {
  brandName: "Global Workforce Bangladesh",
  licensedCompanyName: "Global Workforce Recruitment Services Ltd.",
  licenseNumber: RECRUITMENT_LICENSE_NUMBER,
  websiteUrl: "https://www.globalworkforcebd.com",
  phone: "+880 2 4100 2451",
  email: "inquiries@globalworkforcebd.com",
  address: "Level 8, Gulshan Avenue, Dhaka 1212, Bangladesh",
};

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Compliance", href: "/compliance" },
  { label: "Case Studies", href: "/case-studies" },
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
