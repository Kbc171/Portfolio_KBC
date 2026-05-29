import Link from "next/link";
import { profile } from "@/content/site-content";

export function ContactPanel() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[24px] border border-cyan-300/10 bg-[rgba(9,19,24,0.82)] p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-[#a6f0dd]">Signal</p>
        <h3 className="mt-3 text-3xl font-semibold text-white">
          Reach out for embedded systems, mentoring, and product-building work.
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
          {profile.availability}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`mailto:${profile.email}`}
            className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.05] px-5 py-3 text-sm text-white transition hover:border-cyan-300/28 hover:bg-cyan-300/[0.1]"
          >
            Email
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            className="rounded-full border border-cyan-300/12 bg-cyan-300/[0.05] px-5 py-3 text-sm text-white transition hover:border-cyan-300/28 hover:bg-cyan-300/[0.1]"
          >
            LinkedIn
          </Link>
        </div>
        <div className="mt-6 rounded-[20px] border border-cyan-300/10 bg-black/20 p-4 font-mono text-sm leading-7 text-cyan-50/80">
          <p>
            <span className="text-cyan-300">contact@portfolio:~$</span> open channels
          </p>
          <p>embedded_systems</p>
          <p>iot_projects</p>
          <p>mentorship_and_training</p>
          <p>hardware_software_collaboration</p>
        </div>
      </div>
      <div className="rounded-[24px] border border-cyan-300/10 bg-[rgba(9,19,24,0.82)] p-6">
        <div className="space-y-4 text-sm leading-7 text-white/76">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Email</p>
            <p>{profile.email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Phone</p>
            <p>{profile.phone}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Current Role</p>
            <p>
              {profile.role} at {profile.company}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Base</p>
            <p>{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Preferred Domains</p>
            <p>Embedded Systems • IoT • FPGA • VLSI • Linux-based engineering workflows</p>
          </div>
        </div>
      </div>
    </section>
  );
}
