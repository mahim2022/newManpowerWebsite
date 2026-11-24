import Image from "next/image";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Malaysia–Bangladesh Recruitment Update | November 2026",
  description: "Bangladesh's BOESL announces a Malaysia logistics recruitment round. See the latest reported departure and what Malaysian employers should check.",
  path: "/news/malaysia-bangladesh-recruitment-november-2026",
});

export default function MalaysiaRecruitmentNews() {
  return <article className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
    <p className="eyebrow">Labour mobility news · 24 November 2026</p>
    <h1 className="mt-5 font-serif text-4xl leading-tight text-[#0B1F3A] sm:text-5xl">Bangladesh–Malaysia recruitment: what employers should know</h1>
    <figure className="mt-8"><Image src="/images/malaysia-logistics-illustration.svg" width={1200} height={480} alt="Illustration of a warehouse and a route between Bangladesh and Malaysia" className="h-auto w-full rounded-sm" /><figcaption className="mt-2 text-sm text-neutral-600">Illustration of the recruitment route; not a photograph of the employer or departure.</figcaption></figure>
    <div className="mt-8 space-y-6 text-base leading-8 text-neutral-700">
      <p>Bangladesh’s state recruitment agency BOESL published a notice on 5 November for 112 skilled workers for DHL Supply Chain (Malaysia) Sdn Bhd. The notice lists operations assistant and technical skill worker roles and says the selected workers will not pay recruitment costs under this particular arrangement. Applications ran from 6 to 8 November and are closed.</p>
      <p>On 24 November, <a className="underline" href="https://www.thedailystar.net/news/work-and-migration/news/malaysia-recruitment-resumes-nov-26-112-bangladeshi-workers-fly-zero-cost-4332076">The Daily Star reported</a>, citing BOESL’s managing director, that the group was scheduled to depart Dhaka for Malaysia on 26 November. This was a planned departure at the time of reporting; it does not confirm that the flight has taken place.</p>
      <h2 className="font-serif text-3xl text-[#0B1F3A]">What this means for Malaysian employers</h2>
      <p>The BOESL round is a concrete example of recruitment from Bangladesh for a Malaysian employer. Its roles, selection process and worker-cost arrangement apply to that specific notice; they should not be assumed to apply to every employer or recruitment channel. Bangladesh Labour Supply is not involved in or affiliated with that BOESL recruitment round.</p>
      <p>Before beginning a new hiring request, check the current sector eligibility, foreign-worker quota and approvals with the relevant Malaysian authorities and your recruitment partners. In their <a className="underline" href="https://www.kln.gov.my/web/guest/press-release-mfa-news?_49_groupId=8390448&amp;_49_privateLayout=false&amp;_49_struts_action=%2Fmy_sites%2Fview&amp;p_p_id=49&amp;p_p_lifecycle=1&amp;p_p_mode=view&amp;p_p_state=normal">22 June 2026 joint statement</a>, Malaysia and Bangladesh said new foreign-worker quota approvals were assessed case by case against verified employer needs and sector ceilings. Confirm whether subsequent rules affect your application.</p>
      <p>Prepare the job titles, headcount, work location, skills, proposed pay and benefits, and details of any existing approvals. Our <Link className="underline" href="/malaysia/how-to-hire-workers-from-bangladesh">Malaysia hiring guide</Link> and <Link className="underline" href="/malaysia/foreign-worker-quota">foreign-worker quota guide</Link> explain the planning steps. You can also <Link className="underline" href="/contact">contact our team</Link> to discuss your requirement.</p>
      <h2 className="font-serif text-3xl text-[#0B1F3A]">Sources and status</h2>
      <p><a className="underline" href="https://probashi.gov.bd/pages/notices/%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%B6%E0%A7%82%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%85%E0%A6%AD%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A6%B8%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A7%9F%E0%A7%87-%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A7%9F%E0%A7%87%E0%A6%B6%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A7%9F-%E0%A6%A6%E0%A6%95%E0%A7%8D%E0%A6%B7-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A7%80-%E0%A6%A8%E0%A6%BF%E0%A7%9F%E0%A7%8B%E0%A6%97-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF-y3ci05-6aecb65b05b08a529905dbd0">Bangladesh Ministry: BOESL notice, 5 November 2026</a>; <a className="underline" href="https://www.imi.gov.my/index.php/en/main-services/foreign-worker/">Malaysia Immigration: foreign-worker requirements</a>. Information checked 24 November 2026. Requirements and schedules can change.</p>
    </div>
  </article>;
}
