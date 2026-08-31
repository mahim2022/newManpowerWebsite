type InquiryInput = {
  companyName: string;
  country: string;
  industry: string;
  hiringTimeline: string;
  email: string;
  phone: string;
  message: string;
  workerCount: number | null;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRegex = /^[+()\-\s\d]{7,20}$/;

export function validateInquiryInput(input: InquiryInput) {
  if (!input.companyName || input.companyName.length < 2 || input.companyName.length > 120) return false;
  if (!input.country || input.country.length < 2 || input.country.length > 56) return false;
  if (!input.industry || input.industry.length < 2 || input.industry.length > 56) return false;
  if (!input.hiringTimeline || input.hiringTimeline.length < 2 || input.hiringTimeline.length > 80) return false;
  if (!input.email || !emailRegex.test(input.email) || input.email.length > 150) return false;
  if (!input.phone || !phoneRegex.test(input.phone)) return false;
  if (!input.message || input.message.length < 15 || input.message.length > 2000) return false;
  if (!input.workerCount || input.workerCount < 1 || input.workerCount > 50000) return false;

  return true;
}
