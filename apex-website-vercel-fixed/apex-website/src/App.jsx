import React from "react";

const CONTACT = {
  company: "Apex Audio & Video Systems",
  phoneRaw: "2055660900",
  phoneDisplay: "205-566-0900",
  email: "apexaudioandvideosystems@gmail.com",
  facebook: "Apex Audio & Video Systems",
};

const services = [
  { icon: "◉", title: "Security Cameras", text: "Professional camera systems for homes, businesses, shops, farms, and new construction projects." },
  { icon: "▰", title: "TV Mounting", text: "Clean TV mounting, hidden wires, structured cabling, and custom media wall setups." },
  { icon: "▣", title: "Projectors & Screens", text: "Projector installation, screen setup, clean wiring, and room-ready video systems." },
  { icon: "⌂", title: "Home Theaters", text: "Custom home theater rooms with surround sound, projectors, TVs, receivers, and clean wiring." },
  { icon: "⛳", title: "Golf Simulator Rooms", text: "Golf simulator room wiring, projector placement, screen setup, audio, and network support." },
  { icon: "♪", title: "Speakers & Audio", text: "Indoor, outdoor, patio, theater, and whole-home speaker installation with clean cable management." },
  { icon: "◈", title: "Indoor Speakers", text: "Professional in-wall and in-ceiling indoor speaker installation for media rooms, living spaces, and whole-home audio systems." },
  { icon: "⌁", title: "Network & Mesh Systems", text: "Mesh WiFi systems, access points, router setup, and stronger network coverage." },
  { icon: "⇄", title: "Gate Operators", text: "Gate operator wiring support, access control, cameras, networking, and low-voltage integration." },
  { icon: "⌘", title: "Pre-Wiring", text: "Structured low-voltage pre-wiring for existing and new construction, remodels, theaters, camera systems, speakers, and smart home integration." },
  { icon: "⚙", title: "Troubleshooting Existing Equipment", text: "Professional troubleshooting for existing cameras, audio systems, TVs, projectors, network equipment, speakers, and low-voltage systems." },
];

const packages = [
  "RESIDENTIAL & COMMERCIAL SYSTEM INSTALLATIONS",
  "EXISTING & NEW CONSTRUCTION PRE-WIRING",
  "GOLF SIMULATOR & MEDIA ROOM PRE-WIRING",
  "SECURITY CAMERA & GATE ACCESS INTEGRATION",
  "NETWORK & MESH WIFI SYSTEMS",
  "PRECISION CABLE MANAGEMENT & PROFESSIONAL FINISHING",
];

const galleryItems = [
  "Golf Simulator Rooms", "Projector Setups", "Home Theater Rooms", "Mounted TVs",
  "Security Cameras", "Gate Operators", "Network Mesh Systems", "Outdoor Speakers",
  "Indoor Speakers", "Pre-Wiring", "Troubleshooting Existing Equipment",
];

function runSanityTests() {
  console.assert(CONTACT.phoneRaw.length === 10, "Phone number should contain 10 digits.");
  console.assert(CONTACT.email.includes("@"), "Email should contain an @ symbol.");
  console.assert(CONTACT.phoneRaw === "2055660900", "Text Us button should use the business phone number.");
  console.assert(services.length >= 11, "Website should show at least eleven services.");
  console.assert(services.every((service) => service.title && service.text), "Every service should have a title and description.");
  console.assert(services.some((service) => service.title === "Indoor Speakers"), "Website should include Indoor Speakers as a service.");
  console.assert(services.some((service) => service.title === "Pre-Wiring"), "Website should include Pre-Wiring as a service.");
  console.assert(services.some((service) => service.title === "Troubleshooting Existing Equipment"), "Website should include Troubleshooting Existing Equipment as a service.");
  console.assert(galleryItems.includes("Golf Simulator Rooms"), "Website should include golf simulator rooms.");
  console.assert(galleryItems.includes("Network Mesh Systems"), "Website should include network mesh systems.");
  console.assert(galleryItems.includes("Pre-Wiring"), "Gallery should include Pre-Wiring.");
  console.assert(galleryItems.includes("Troubleshooting Existing Equipment"), "Gallery should include Troubleshooting Existing Equipment.");
}
runSanityTests();

function IconBadge({ children, size = "large" }) {
  const sizeClass = size === "small" ? "h-9 w-9 text-lg" : "h-14 w-14 text-3xl";
  return <span className={`${sizeClass} inline-flex flex-none items-center justify-center rounded-2xl bg-orange-500/15 font-black text-orange-400`}>{children}</span>;
}

function ApexWatermark() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]">
      <div className="absolute left-1/2 top-24 -translate-x-1/2 select-none text-[9rem] font-black uppercase tracking-tighter text-white md:text-[16rem]">APEX</div>
      <div className="absolute right-[-5rem] top-1/3 h-80 w-80 rounded-full border-[2rem] border-orange-500" />
      <div className="absolute bottom-[-8rem] left-[-6rem] h-96 w-96 rounded-full border-[3rem] border-blue-500" />
    </div>
  );
}

function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <div className="hidden w-72 rounded-3xl border border-white/10 bg-slate-900/95 p-4 text-left shadow-2xl backdrop-blur md:block">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">Live Chat</p>
        <h3 className="mt-2 text-lg font-black uppercase text-white">Need Help?</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">Chat with Apex about cameras, pre-wiring, home theaters, networking, speakers, or troubleshooting. Se Habla Español.</p>
        <a href={`sms:${CONTACT.phoneRaw}`} className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-orange-500/20 hover:bg-orange-400">Start Chat</a>
      </div>
      <a href={`sms:${CONTACT.phoneRaw}`} className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-2xl shadow-orange-500/30 transition hover:-translate-y-1 hover:bg-orange-400" aria-label="Text Apex Audio & Video Systems"><span className="text-xl">💬</span>Text Us</a>
    </div>
  );
}

export default function ApexAudioVideoWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <FloatingContactButtons />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight">{CONTACT.company}</h1>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">Security • Audio • Video • Network</p>
          </div>
          <a href={`tel:${CONTACT.phoneRaw}`} className="rounded-2xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400">Call Now</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,.25),transparent_30%)]" />
          <ApexWatermark />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-2">
            <div className="animate-[fadeIn_.7s_ease-out]">
              <p className="mb-4 inline-flex rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-300">Professional low-voltage installation</p>
              <div className="flex items-center justify-center md:justify-start">
                <div className="relative w-full max-w-4xl">
                  <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle,rgba(249,115,22,.25),transparent_65%)] blur-3xl" />
                  <img src="/apex-logo.png" alt="Apex Audio & Video Systems Logo" className="relative z-10 w-full scale-110 object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.45)]" />
                  <div className="absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent" />
                </div>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{CONTACT.company} helps homeowners, builders, and businesses with security cameras, golf simulator rooms, projectors, home theaters, TV mounting, speakers, gate operator support, and network mesh systems.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={`tel:${CONTACT.phoneRaw}`} className="rounded-2xl bg-orange-500 px-7 py-4 text-center font-bold text-white shadow-xl shadow-orange-500/20 hover:bg-orange-400">Get a Free Quote</a>
                <a href={`mailto:${CONTACT.email}`} className="rounded-2xl border border-white/20 px-7 py-4 text-center font-bold text-white hover:bg-white/10">Email Us</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl animate-[fadeIn_.9s_ease-out]">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="mb-6 flex items-center gap-3">
                  <IconBadge>▲</IconBadge>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-[0.18em] text-white">PREMIUM APEX INSTALLATIONS</h3>
                    <p className="text-sm uppercase tracking-[0.14em] text-slate-400">ENGINEERED FOR PERFORMANCE, RELIABILITY, CABLE MANAGEMENT & MODERN SYSTEM DESIGN.</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  {packages.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"><IconBadge size="small">✓</IconBadge><span className="font-medium">{item}</span></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center"><h2 className="text-4xl font-extrabold">Our Services</h2><p className="mt-4 text-slate-300">Quality low-voltage installation with a clean, professional finish.</p></div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/10"><div className="mb-5"><IconBadge>{service.icon}</IconBadge></div><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p></div>)}
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-20 text-slate-950">
          <div className="absolute inset-0 opacity-[0.04]"><div className="absolute left-10 top-8 text-[9rem] font-black uppercase tracking-tighter">APEX</div><div className="absolute bottom-6 right-8 text-[7rem] font-black uppercase tracking-tighter">A/V</div></div>
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-10 text-center"><h2 className="text-4xl font-extrabold">Installations We Can Help With</h2><p className="mt-4 text-slate-600">Great for builders, homeowners, businesses, entertainment rooms, shops, and outdoor spaces.</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {galleryItems.map((item, index) => <div key={item} className="group relative min-h-40 overflow-hidden rounded-3xl bg-slate-900 p-5 text-white shadow-xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,.35),transparent_45%)]" /><div className="absolute right-4 top-4 text-5xl font-black text-white/10">0{index + 1}</div><div className="relative flex h-full flex-col justify-end"><p className="text-sm uppercase tracking-[0.2em] text-orange-300">Apex Install</p><h3 className="mt-2 text-2xl font-extrabold">{item}</h3></div></div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">
          <div className="md:col-span-1"><h2 className="text-4xl font-extrabold">Why choose Apex?</h2><p className="mt-4 text-slate-300">We focus on clean work, dependable systems, customer satisfaction, and Se Habla Español support.</p></div>
          <div className="grid gap-5 md:col-span-2">
            {["CLEAN WIRE RUNS & PROFESSIONAL CABLE MANAGEMENT", "CUSTOM CAMERA SYSTEMS • THEATER INSTALLATIONS • PROJECTOR SETUPS • AUDIO SOLUTIONS", "NETWORK MESH & ACCESS POINT INSTALLATIONS FOR MAXIMUM WIFI COVERAGE", "PROFESSIONAL COMMUNICATION FROM CONSULTATION TO COMPLETION", "LICENSED & INSURED FOR RESIDENTIAL & COMMERCIAL PROJECTS", "SE HABLA ESPAÑOL"].map((item) => <div key={item} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"><span className="text-2xl text-orange-400">★</span><p className="font-semibold">{item}</p></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold">Ready to upgrade your system?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Call or message {CONTACT.company} today for a quote on cameras, golf simulator rooms, projectors, home theaters, TVs, speakers, gate operator support, network mesh systems, existing & new construction pre-wiring, troubleshooting existing equipment, or cable management.</p>
          <div className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left md:grid-cols-4">
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4 hover:bg-slate-800"><IconBadge size="small">☎</IconBadge><span>{CONTACT.phoneDisplay}</span></a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4 hover:bg-slate-800"><IconBadge size="small">✉</IconBadge><span className="break-all">{CONTACT.email}</span></a>
            <a href={`sms:${CONTACT.phoneRaw}`} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4 hover:bg-slate-800"><IconBadge size="small">💬</IconBadge><span>Text Us • Se Habla Español</span></a>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4"><IconBadge size="small">f</IconBadge><span>{CONTACT.facebook}</span></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400"><p>© 2026 {CONTACT.company}. All rights reserved.</p></footer>
    </div>
  );
}
