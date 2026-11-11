import { MalaysiaPartnerCard } from "@/components/MalaysiaPartnerCard";

export default function MalaysiaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <MalaysiaPartnerCard />
    </>
  );
}
