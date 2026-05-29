"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/site-nav";
import { 
  Cpu, 
  Globe, 
  Layers, 
  ArrowRight, 
  Download, 
  Users, 
  Mail,
  Zap,
  Code,
  Box,
  Radio,
  ExternalLink,
  BookOpen,
  Briefcase,
  Award,
  MapPin,
  Calendar,
  CheckCircle2,
  Phone,
  Camera as InstagramIcon
} from "lucide-react";
import { OscilloscopeWave } from "@/components/ui/oscilloscope";
import { TextPressure } from "@/components/ui/text-pressure";
import { FPGABoard, ESP32Module, BluePill } from "@/components/hardware/floating-hardware";
import { 
  profile, 
  aboutDetails, 
  experience, 
  projects, 
  education, 
  toolchains 
} from "@/content/site-content";

// ── Status Pill ───────────────────────────────────────────
function StatusPill() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] mb-8">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
        {profile.availability}
      </span>
    </div>
  );
}

// ── Typing Effect ──────────────────────────────────────────
function TypingEffect() {
  const words = [profile.role, "Embedded Systems Engineer", "IoT Developer", "VLSI Enthusiast", "FPGA Programmer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="h-8 text-lg md:text-xl text-muted font-medium">
      {words[index].substring(0, subIndex)}
      <span className="cursor-blink"></span>
    </div>
  );
}

// ── Skill Card (Simplified for performance) ──────────────────
function SkillCard({ title, icon: Icon, skills }: { title: string; icon: any; skills: string[] }) {
  return (
    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:bg-white/[0.05]" data-aos="fade-up">
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="text-primary w-7 h-7" />
        </div>
        <h3 className="text-xl mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill} className="text-[10px] py-1.5 px-3 rounded-lg bg-black/20 border border-white/5 text-muted/80 hover:border-primary/30 hover:text-main transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Project Card ──────────────────────────────────────────
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden group" data-aos="fade-up">
      <div className="h-48 bg-[#1a1a1a] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        <Box className="w-12 h-12 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-4 right-4">
          <span className="text-[9px] py-1 px-2.5 rounded-full bg-black/60 border border-primary/20 text-primary font-bold tracking-wider uppercase">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl mb-3 group-hover:text-primary transition-colors uppercase tracking-tight">{project.name}</h3>
        <p className="text-xs text-muted mb-6 leading-relaxed h-12 overflow-hidden">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              <span className="text-[9px] font-bold text-main uppercase tracking-tighter">{metric}</span>
            </div>
          ))}
        </div>

        <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black text-primary hover:text-secondary transition-colors uppercase tracking-widest">
          VIEW DETAILS <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

// ── Timeline Item ─────────────────────────────────────────
function TimelineItem({ item }: { item: typeof experience[0] }) {
  return (
    <div className="relative pl-8 pb-10 border-l border-white/10 last:pb-0" data-aos="fade-up">
      <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <h4 className="text-lg text-main mb-0.5">{item.title}</h4>
          <p className="text-primary font-bold text-xs">{item.organization}</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-muted">
          <span className="bg-white/5 px-2 py-1 rounded-md border border-white/5">{item.period}</span>
        </div>
      </div>
      <p className="text-xs text-muted mb-4 max-w-2xl leading-relaxed">
        {item.summary}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tools.slice(0, 4).map(tool => (
          <span key={tool} className="text-[9px] py-0.5 px-2 rounded-sm bg-white/5 border border-white/10 text-muted">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* ══ HERO SECTION ══════════════════════════════════════════ */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div data-aos="zoom-in" className="flex flex-col items-center">
          <div className="mb-4">
            <span className="text-primary font-black tracking-[0.5em] text-[10px] md:text-xs uppercase">
              // PORTFOLIO_OF_K_B_CHANDRASHEKARAN
            </span>
          </div>
          <StatusPill />
          <TextPressure 
            text="IMAGINE" 
            fontSize="clamp(4rem, 15vw, 10rem)" 
            className="mb-[-4vw]"
          />
          <TextPressure 
            text="INNOVATE." 
            fontSize="clamp(4rem, 15vw, 10rem)" 
            className="text-gradient mt-[-4vw]"
          />
          <TypingEffect />
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-secondary text-background font-black px-10 py-4 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-105 opacity-50 cursor-not-allowed">
              RESUME ON HOLD <Download className="w-5 h-5" />
            </button>
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-white/5 border border-white/10 px-10 py-4 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              VIEW GITHUB <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ══ ABOUT SECTION ═════════════════════════════════════════ */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="glass-card aspect-square rounded-[3rem] p-12 relative z-10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                  <FPGABoard size={200} />
                </div>
                
                {/* Floating mini-modules */}
                <div className="absolute top-10 right-10 z-20">
                  <BluePill size={70} />
                </div>
                <div className="absolute bottom-10 left-10 z-20">
                  <ESP32Module size={50} />
                </div>
              </div>
              {/* Backglow */}
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full z-0" />
            </div>

            <div data-aos="fade-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-primary" />
                <span className="text-primary font-black tracking-widest text-[10px]">/ {profile.name.toUpperCase()}</span>
              </div>
              <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
                CRAFTING <span className="text-gradient">LOGIC</span> <br /> 
                AT SCALE.
              </h2>
              <p className="text-muted text-base mb-10 leading-relaxed max-w-xl">
                {profile.intro} Currently based in {profile.location}.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {aboutDetails.values.slice(0, 2).map((val, i) => (
                  <div key={i} className="glass-card p-5 rounded-2xl border-white/5">
                    <Zap className="text-primary w-5 h-5 mb-3" />
                    <h4 className="text-xs mb-1 font-bold">{val}</h4>
                    <p className="text-[9px] text-muted uppercase tracking-tighter">ENGINEERING_VALUE_{i+1}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-primary w-4 h-4" />
                  <span className="text-[9px] font-black tracking-widest text-primary uppercase">Accomplishment_Log</span>
                </div>
                <p className="text-xs text-muted leading-relaxed italic">
                  &quot;{education.accomplishment}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXPERIENCE & EDUCATION ════════════════════════════════ */}
      <section id="history" className="py-24 px-6 bg-[rgba(255,255,255,0.005)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-3 mb-10" data-aos="fade-right">
                <Briefcase className="text-primary w-6 h-6" />
                <h2 className="text-2xl md:text-4xl tracking-tight">EXPERIENCE<span className="text-primary">.</span></h2>
              </div>
              <div className="space-y-2">
                {experience.map((exp, i) => (
                  <TimelineItem key={i} item={exp} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10" data-aos="fade-left">
                <BookOpen className="text-primary w-6 h-6" />
                <h2 className="text-2xl md:text-4xl tracking-tight">ACADEMICS<span className="text-primary">.</span></h2>
              </div>
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-3xl" data-aos="fade-left">
                  <h3 className="text-xl text-main mb-2 uppercase tracking-tighter">{education.degree}</h3>
                  <p className="text-primary font-bold text-xs mb-6 uppercase">{education.institution}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                      <span className="text-[8px] text-primary font-bold block mb-1 tracking-widest uppercase">Class of</span>
                      <p className="text-xs text-main">{education.expected}</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-xl border border-white/5">
                      <span className="text-[8px] text-primary font-bold block mb-1 tracking-widest uppercase">Languages</span>
                      <p className="text-[10px] text-muted">{aboutDetails.languages.slice(0, 3).join(", ")}...</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl" data-aos="fade-left" data-aos-delay="200">
                  <span className="text-[9px] font-black tracking-widest text-primary uppercase mb-4 block">/ CERTIFICATIONS</span>
                  <div className="grid grid-cols-1 gap-2">
                    {education.certifications.slice(0, 3).map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-muted/80">
                        <CheckCircle2 className="w-3 h-3 text-primary/50" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SKILLS SECTION ════════════════════════════════════════ */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4" data-aos="fade-up">TECHNICAL <span className="text-gradient">STACK.</span></h2>
          <p className="text-muted text-sm max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Hardware-to-software toolchains optimized for system verification and deployment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {toolchains.map((toolchain, i) => (
              <SkillCard 
                key={i}
                title={toolchain.name} 
                icon={[Cpu, Radio, Globe, Code][i]} 
                skills={toolchain.tools} 
              />
            ))}
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden" data-aos="fade-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
              <div>
                <h3 className="text-lg tracking-widest text-primary font-black uppercase mb-1">/ Signal Analysis Dashboard</h3>
                <p className="text-[9px] text-muted font-mono tracking-widest uppercase">System status: Online // Ready for processing</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-bold text-primary">LIVE_TELEMETRY</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="h-28 bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between text-[9px] font-mono text-primary/50 mb-3">
                  <span>CH_01: TIMING</span>
                  <span>98.2 MHz</span>
                </div>
                <OscilloscopeWave type="sine" frequency={0.08} amplitude={25} />
              </div>
              <div className="h-28 bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between text-[9px] font-mono text-secondary/50 mb-3">
                  <span>CH_02: LOGIC</span>
                  <span>ACTIVE</span>
                </div>
                <OscilloscopeWave type="square" frequency={0.04} amplitude={20} color="#34D399" />
              </div>
              <div className="h-28 bg-black/40 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between text-[9px] font-mono text-primary/50 mb-3">
                  <span>CH_03: STREAM</span>
                  <span>115.2K</span>
                </div>
                <OscilloscopeWave type="digital" frequency={0.15} amplitude={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS SECTION ══════════════════════════════════════ */}
      <section id="projects" className="py-24 px-6 bg-[rgba(255,255,255,0.005)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-4" data-aos="fade-up">FEATURED <span className="text-gradient">MODULES.</span></h2>
          <p className="text-muted text-sm" data-aos="fade-up" data-aos-delay="100">
            Selected engineering modules across VLSI, FPGA, and IoT domains.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <ProjectCard key={i} project={proj} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT FOOTER ════════════════════════════════════════ */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden relative">
            <div data-aos="zoom-in">
              <h2 className="text-3xl md:text-5xl font-black text-gradient mb-6 tracking-tighter uppercase">LET&apos;S COLLABORATE.</h2>
              <p className="text-muted max-w-md mx-auto mb-10 text-sm leading-relaxed">
                Ready to take your engineering project to the next level? Get in touch and let&apos;s build something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="bg-main hover:bg-white/90 text-background font-black px-10 py-3.5 rounded-full text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  SEND EMAIL <Mail className="w-4 h-4" />
                </a>
                <a 
                  href={`tel:${profile.phone}`} 
                  className="bg-transparent hover:bg-white/5 border border-white/10 text-main font-black px-10 py-3.5 rounded-full text-sm transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  CALL ENGINEER <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center gap-8 flex-wrap">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-primary transition-all text-[10px] font-bold tracking-widest uppercase">
                  GITHUB
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-primary transition-all text-[10px] font-bold tracking-widest uppercase">
                  LINKEDIN
                </a>
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-primary transition-all text-[10px] font-bold tracking-widest uppercase group">
                  <InstagramIcon className="w-3.5 h-3.5" /> INSTAGRAM
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-[9px] tracking-[0.2em] text-white/10 font-bold uppercase">
            © 2026 {profile.name.toUpperCase()} — SYSTEM_STATUS: STABLE
          </div>
        </div>
      </section>
    </div>
  );
}
