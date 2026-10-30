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
  websiteUrl: normalizeCanonicalUrl(process.env.NEXT_PUBLIC_SITE_URL || PREFERRED_CANONICAL_URL),
  phone: "+601166773501",
  whatsapp: "+8801625069703",
  email: "naimulmushfiq98@gmail.com",
  address: "Level 8, Gulshan Avenue, Dhaka 1212, Bangladesh",
  addressMapUrl: "https://maps.google.com/?q=Level+8,+Gulshan+Avenue,+Dhaka+1212,+Bangladesh",
  businessHours: "Mon - Sat • 9:00 AM - 6:30 PM (GMT+6)",
  linkedinUrl: "https://www.linkedin.com/company/janani-overseas-recruiting-agency-ltd/",
  whatsappMessage: "Hello, I am an employer looking to recruit workers from Bangladesh. My destination country is ____, the roles are ____, and I need approximately ____ workers. Please advise on availability and the recruitment process.",
};

export const PARTNER_AGENCIES = [
  {
    name: "East Bengal Overseas",
    licenseNumber: "912",
    role: "Main agency",
  },
  {
    name: "Lokobol Limited",
    licenseNumber: "1842",
    role: "Recruitment partner",
  },
  {
    name: "Janani Associates",
    licenseNumber: "833",
    role: "Recruitment partner",
  },
  {
    name: "Kings Trade International Ltd.",
    licenseNumber: "348",
    role: "Recruitment partner",
  },
];

export const DESTINATION_REGIONS = [
  "Europe",
  "Canada",
  "Australia",
  "Southeast Asia",
  "Middle East",
  "Other international markets",
];

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
    label: "Licensed agencies",
    value: "04",
    helperText: "Named licensed agencies, led by East Bengal Overseas",
  },
  { label: "Destination reach", value: "Global", helperText: "Multiple regions through our network" },
  { label: "Employer support", value: "End to end", helperText: "From workforce brief to deployment coordination" },
  { label: "Recruitment model", value: "Partner-led", helperText: "Agency matched to each hiring requirement" },
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
  heroTitle: "Bangladesh Manpower Recruitment, Built on a Stronger Network",
  heroBody:
    "We connect international employers with a network of licensed Bangladesh recruitment agencies. One coordinated team supports candidate sourcing, screening, documentation, and deployment planning across multiple destinations.",
  ctaTitle: "Request a Workforce Partnership Consultation",
  ctaBody:
    "Share your recruitment requirement and receive a structured response covering candidate sourcing, licensing checks, compliance milestones, and realistic deployment planning.",
  complianceBody:
    "Bangladesh Labour Supply coordinates employer requirements through named licensed recruitment partners. Each agency's licence remains specific to that agency, and destination recruitment is subject to applicable approvals and requirements.",
  contactTrustNote:
    "Business inquiries are reviewed within one working day by our operations team with a clear next-step recommendation.",
};

export const COMPLIANCE_PROOFS = [
  {
    title: "Agency-specific licensing",
    detail: "Each named recruitment partner operates under its own recruiting licence. We identify the agency responsible for a recruitment assignment.",
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
