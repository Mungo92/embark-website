import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Compass,
  FileCheck2,
  Landmark,
  Layers3,
  LineChart,
  Mail,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const palette = {
  page: "#f4f1ea",
  panel: "#fbfaf7",
  ink: "#13201f",
  muted: "#63706d",
  deep: "#102a2a",
  accent: "#2f6f67",
  accentDark: "#255850",
  sage: "#d9e4dc",
  seaMist: "#e7f0ed",
  stone: "#ece7dd",
  gold: "#b79a63",
};

const services = [
  {
    title: "Commercial advisory",
    copy: "Strategic commercial advice that helps leaders make confident decisions across complex public and private sector environments.",
    items: ["Commercial strategy", "Decision support", "Executive reporting"],
    icon: Scale,
  },
  {
    title: "Procurement assurance",
    copy: "Independent review and assurance support for procurement processes, key decision-makers and governance forums.",
    items: ["Assurance reviews", "Process review", "Risk and issue reporting"],
    icon: ShieldCheck,
  },
  {
    title: "Tender evaluation support",
    copy: "Structured support for complex tender evaluations, with clear planning, documentation and proportionate controls.",
    items: ["Evaluation planning", "Tender governance", "Panel support"],
    icon: FileCheck2,
  },
  {
    title: "Remediation and improvement",
    copy: "Practical activities that respond to review findings and improve procurement processes, practices and outcomes.",
    items: ["Remediation planning", "Practice uplift", "Targeted improvement"],
    icon: BriefcaseBusiness,
  },
];

const proofPoints = [
  ["91%", "of engagements move from discovery to delivery"],
  ["21 yrs", "average senior consultant experience"],
  ["120+", "business improvement projects supported"],
  ["4.9/5", "average client satisfaction score"],
];

const caseStudies = [
  {
    title: "Assuring a complex procurement pathway",
    sector: "Government advisory",
    result: "Provided review support, issue reporting and practical recommendations for key decision-makers.",
  },
  {
    title: "Strengthening tender evaluation governance",
    sector: "Public sector procurement",
    result: "Improved evaluation planning, records and decision support for a high value tender process.",
  },
  {
    title: "Remediating review findings",
    sector: "Commercial operations",
    result: "Translated assurance findings into targeted actions that improved process clarity and control.",
  },
];

const navItems = ["Services", "Advisor", "Approach", "Work", "Contact"];

function SectionHeading({ label, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#6b746f]">{label}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[#13201f] sm:text-4xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-7 text-[#63706d]">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
    }),
    []
  );

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#13201f]">
      <header className="sticky top-0 z-50 border-b border-[#13201f]/10 bg-[#f4f1ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Embark Partners home">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#102a2a] text-white shadow-lg shadow-[#102a2a]/15">
              <Sparkles size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Embark Partners</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[#4f5b57] transition hover:text-[#13201f]">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:hello@embarkpartners.com.au" className="text-sm font-semibold text-[#30403d] hover:text-[#13201f]">
              hello@embarkpartners.com.au
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f6f67] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#2f6f67]/20 transition hover:-translate-y-0.5 hover:bg-[#255850]"
            >
              Start a conversation
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#13201f]/10 bg-white/70 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#13201f]/10 bg-[#f4f1ea] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-base font-semibold text-[#30403d]">
                  {item}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#102a2a] px-5 py-3 text-sm font-semibold text-white">
                Book a consult
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d9e4dc] blur-3xl" />
        <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#2f6f67]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#b79a63]/12 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.28em] text-[#6b746f]">
              Velocity for Business
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-[#13201f] sm:text-6xl lg:text-7xl">
              Strategic commercial advice for complex decisions and public sector delivery.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5b57]">
              Embark Partners helps leaders move from uncertainty to action with practical advisory, procurement assurance and clear commercial judgement.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#102a2a] px-7 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#102a2a]/20 transition hover:-translate-y-0.5 hover:bg-[#183939]"
              >
                Talk to an adviser
                <ArrowRight size={17} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#13201f]/15 bg-white/70 px-7 py-4 text-sm font-semibold text-[#13201f] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore services
                <ChevronRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut" }} className="relative">
            <div className="rounded-[2.5rem] border border-[#13201f]/10 bg-[#fbfaf7] p-4 shadow-2xl shadow-[#102a2a]/10">
              <div className="relative min-h-[600px] overflow-hidden rounded-[2rem] bg-[#102a2a] p-6 text-white sm:p-8">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #2f6f67 0, transparent 28%), radial-gradient(circle at 82% 12%, #d9e4dc 0, transparent 18%), radial-gradient(circle at 60% 82%, #b79a63 0, transparent 20%)" }} />
                <div className="relative flex h-full min-h-[536px] flex-col">
                  <div className="mb-7 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-white/60">Advisory pathway</p>
                      <p className="mt-1 text-xl font-semibold">Procurement assurance review</p>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                      <Target size={24} />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      ["Discovery", "Complete", "100%"],
                      ["Assurance review", "In progress", "76%"],
                      ["Targeted uplift", "Next", "42%"],
                    ].map(([name, status, width]) => (
                      <div key={name} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur sm:p-6">
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <div>
                            <p className="font-semibold">{name}</p>
                            <p className="text-sm text-white/55">{status}</p>
                          </div>
                          <p className="text-sm font-semibold text-[#d9e4dc]">{width}</p>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-[#b79a63]" style={{ width }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid flex-1 auto-rows-fr items-stretch gap-4 sm:grid-cols-2">
                    <div className="flex min-h-[156px] flex-col justify-between rounded-3xl bg-[#2f6f67] p-6">
                      <LineChart size={28} />
                      <div>
                        <p className="text-4xl font-semibold leading-none">31%</p>
                        <p className="mt-2 text-sm text-white/75">faster issue resolution</p>
                      </div>
                    </div>
                    <div className="flex min-h-[156px] flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                      <ShieldCheck size={28} />
                      <div>
                        <p className="text-4xl font-semibold leading-none">91%</p>
                        <p className="mt-2 text-sm text-white/60">engagements move to delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-[#13201f]/10 bg-white/80 p-4 shadow-xl shadow-[#102a2a]/5 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map(([number, label]) => (
            <div key={number} className="rounded-[1.5rem] bg-[#e7f0ed] p-6">
              <p className="text-3xl font-semibold tracking-tight text-[#13201f]">{number}</p>
              <p className="mt-2 text-sm leading-6 text-[#63706d]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What we do"
            title="Commercial and procurement advisory built for complex environments."
            copy="We support public and private sector leaders with clear advice, proportionate assurance and practical delivery support."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.07 }}
                  className="group rounded-[2rem] border border-[#13201f]/10 bg-[#fbfaf7] p-7 shadow-xl shadow-[#102a2a]/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#102a2a]/10"
                >
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#e7f0ed] text-[#2f6f67]">
                      <Icon size={26} />
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#102a2a] text-white opacity-0 transition group-hover:opacity-100">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#13201f]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#63706d]">{service.copy}</p>
                  <div className="mt-7 grid gap-3">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-medium text-[#4f5b57]">
                        <Check size={17} className="text-[#2f6f67]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="advisor" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 overflow-hidden rounded-[2.5rem] border border-[#13201f]/10 bg-[#fbfaf7] p-6 shadow-2xl shadow-[#102a2a]/8 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div className="rounded-[2rem] bg-[#102a2a] p-8 text-white sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Lead advisor</p>
            <div className="mb-8 grid h-24 w-24 place-items-center rounded-[2rem] bg-[#d9e4dc] text-3xl font-semibold text-[#102a2a]">
              DH
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Dan Huby</h2>
            <p className="mt-3 text-lg font-medium text-[#d9e4dc]">Lead Advisory</p>
            <div className="mt-8 grid gap-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Landmark size={18} className="text-[#b79a63]" />
                ACT and Federal Government advisory
              </div>
              <div className="flex items-center gap-3">
                <FileCheck2 size={18} className="text-[#b79a63]" />
                Procurement assurance and tender evaluation
              </div>
              <div className="flex items-center gap-3">
                <Scale size={18} className="text-[#b79a63]" />
                Commercial strategy and transaction advice
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-2 sm:p-4">
            <p className="text-xl leading-9 text-[#30403d]">
              Dan has a broad legal and commercial background, with extensive experience as a commercial adviser to ACT and Federal Government departments and agencies.
            </p>
            <div className="grid gap-4 text-base leading-7 text-[#63706d] lg:grid-cols-2">
              <p>
                He has worked across a range of industry sectors, advising on complex commercial transactions in both the public and private sectors. Through this experience, Dan has developed strong expertise in commercial procurement planning and the management of complex tender evaluations.
              </p>
              <p>
                Dan has supported clients with procurement assurance reviews, executive reporting on key issues and opportunities, and remediation activities identified through review processes.
              </p>
              <p>
                His extensive experience in public procurement means he is well placed to advise agencies on procurement process reviews, provide assurance support to key decision-makers, and recommend targeted, proportionate measures to improve procurement processes and practices.
              </p>
              <p>
                Dan’s diverse skill set allows him to provide high-level strategic commercial advice across a range of industries, with a clear focus on client needs and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#102a2a] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Our approach</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">From intent to action without losing the detail.</h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Our work starts with the business problem, not a fixed method. We create a clear path, support the people involved and keep the focus on value.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#102a2a] transition hover:-translate-y-0.5">
              Plan your next move
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-5">
            {[
              ["01", "Understand the decision", "We clarify the commercial context, procurement risks, constraints and outcomes that matter most."],
              ["02", "Shape the pathway", "We turn complex options into a practical plan with clear owners, review points and measures."],
              ["03", "Support assurance", "We work beside your team to review process, report key issues and support decision-makers."],
              ["04", "Improve what matters", "We recommend targeted, proportionate actions that improve procurement practices and business outcomes."],
            ].map(([step, title, copy]) => (
              <article key={step} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#d9e4dc] text-lg font-semibold text-[#102a2a]">{step}</div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/62">{copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6b746f]">Selected work</p>
              <h2 className="text-4xl font-semibold tracking-tight text-[#13201f] sm:text-5xl">Recent commercial challenges we help solve.</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#13201f]/15 bg-white px-6 py-4 text-sm font-semibold text-[#13201f] transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#102a2a]/10">
              Discuss your project
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="flex min-h-[360px] flex-col justify-between rounded-[2rem] border border-[#13201f]/10 bg-[#fbfaf7] p-7 shadow-xl shadow-[#102a2a]/5">
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b746f]">0{index + 1}</p>
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[#e7f0ed] text-[#102a2a]">
                      <Users size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#13201f]">{study.title}</h3>
                  <p className="mt-4 text-sm font-semibold text-[#2f6f67]">{study.sector}</p>
                </div>
                <p className="mt-10 text-base leading-7 text-[#63706d]">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#d9e4dc] text-[#102a2a] shadow-2xl shadow-[#102a2a]/10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 sm:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#63706d]">Client perspective</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Clear judgement when the process is complex.</h2>
          </div>
          <div className="bg-[#102a2a] p-8 text-white sm:p-12">
            <p className="text-2xl font-medium leading-10 text-white/90">
              “Embark Partners gave our leadership team the structure and confidence to make decisions that had been sitting unresolved for months.”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 font-semibold">AR</div>
              <div>
                <p className="font-semibold">Avery Reid</p>
                <p className="text-sm text-white/55">Chief Operating Officer, Meridian Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2.5rem] border border-[#13201f]/10 bg-[#fbfaf7] p-6 shadow-2xl shadow-[#102a2a]/8 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="rounded-[2rem] bg-[#e7f0ed] p-8 sm:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#6b746f]">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight text-[#13201f] sm:text-5xl">Ready to build velocity for your business?</h2>
            <p className="mt-6 text-base leading-7 text-[#63706d]">
              Share the decision, procurement process or commercial challenge you are working through. We will help clarify the options, next steps and support required.
            </p>
            <div className="mt-9 grid gap-4">
              <a href="tel:+61280001234" className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#30403d] transition hover:bg-[#102a2a] hover:text-white">
                <Phone size={20} />
                +61 2 8000 1234
              </a>
              <a href="mailto:hello@embarkpartners.com.au" className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#30403d] transition hover:bg-[#102a2a] hover:text-white">
                <Mail size={20} />
                hello@embarkpartners.com.au
              </a>
            </div>
          </div>

          <form className="grid gap-4 p-2 sm:p-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[#4f5b57]">
                Name
                <input className="rounded-2xl border border-[#13201f]/10 bg-[#f4f1ea] px-4 py-4 font-medium outline-none transition focus:border-[#2f6f67]" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#4f5b57]">
                Email
                <input className="rounded-2xl border border-[#13201f]/10 bg-[#f4f1ea] px-4 py-4 font-medium outline-none transition focus:border-[#2f6f67]" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-[#4f5b57]">
              Organisation
              <input className="rounded-2xl border border-[#13201f]/10 bg-[#f4f1ea] px-4 py-4 font-medium outline-none transition focus:border-[#2f6f67]" placeholder="Company name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-[#4f5b57]">
              What can we help with?
              <textarea className="min-h-36 rounded-2xl border border-[#13201f]/10 bg-[#f4f1ea] px-4 py-4 font-medium outline-none transition focus:border-[#2f6f67]" placeholder="Tell us about the decision, process or project." />
            </label>
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#102a2a] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#102a2a]/15 transition hover:-translate-y-0.5 hover:bg-[#183939]" type="submit">
              Send enquiry
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#13201f]/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#63706d] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Embark Partners. Velocity for Business.</p>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-[#13201f]">Services</a>
            <a href="#advisor" className="hover:text-[#13201f]">Advisor</a>
            <a href="#approach" className="hover:text-[#13201f]">Approach</a>
            <a href="#contact" className="hover:text-[#13201f]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
