import { clients } from "@/data/client";
import ClientCard from "./ClientCard";
import MetricCard from "./MetricCard";

const Hero = () => {
  return (
    <section className="max-w-310 mx-auto px-8 pt-20 pb-20 relative z-10">
      <div className="reveal">
        <div className="inline-flex items-center gap-2.5 py-1.5 pl-3.5 pr-1.5 border border-white/10 rounded-full bg-bg-2 font-mono text-xs text-ink-dim mb-9">
          <span>Moxietree Enterprise Limited · Wellington, New Zealand</span>
          <strong className="inline-flex items-center gap-1.5 pill-dot px-2.5 py-1 bg-accent/15 text-accent rounded-full font-medium text-[11px] tracking-wide">
            Software engineering consultancy
          </strong>
        </div>
      </div>

      <h1 className="reveal font-sans font-medium text-[clamp(52px,8vw,120px)] leading-[0.98] tracking-tight-45 mb-9 max-w-275">
        Senior engineering for{" "}
        <em className="font-serif italic font-normal accent-gradient pr-[0.1em]">
          consequential
        </em>{" "}
        systems — banking, government, data.
      </h1>

      <p className="reveal text-[19px] leading-snug text-ink-dim max-w-180 mb-11">
        Moxietree is a Wellington-based consultancy delivering{" "}
        <strong className="text-ink font-medium">Java &amp; Spring Boot</strong>{" "}
        backends,{" "}
        <strong className="text-ink font-medium">enterprise integration</strong>
        , and <strong className="text-ink font-medium">React</strong> front-ends
        for New Zealand&apos;s most demanding organisations. Nineteen years of
        production delivery, behind a single point of contact.
      </p>

      <div className="reveal flex flex-wrap gap-3 mb-18">
        <a
          href="#services"
          className="group inline-flex items-center gap-2.5 text-sm font-medium px-5 py-3.5 rounded-[10px] bg-ink text-bg hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_0_0_3px_rgba(124,255,107,0.15)] transition-all duration-200"
        >
          Explore services{" "}
          <span className="arr-hover inline-block transition-transform">↗</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 text-sm font-medium px-5 py-3.5 rounded-[10px] bg-bg-2 text-ink border border-white/15 hover:bg-bg-3 hover:border-ink-dim hover:-translate-y-0.5 transition-all duration-200"
        >
          Book a discovery call
        </a>
      </div>

      <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:row-span-2 bg-bg-1 border border-white/10 rounded-2xl p-6 hover:border-white/15 transition-colors">
          <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-5">
            Proven in production with
          </div>
          <div className="grid gap-0.5">
            {clients.map((client, i) => {
              return <ClientCard key={i} client={client} index={i} />;
            })}
          </div>
        </div>

        <MetricCard
          label="Experience"
          value="19"
          suffix="yrs"
          body={
            <>
              Delivering production software across{" "}
              <strong className="text-ink font-medium">
                finance, government &amp; data
              </strong>
              .
            </>
          }
        />

        <MetricCard
          label="Engagements"
          value="12+"
          suffix="clients"
          body={
            <>
              From{" "}
              <strong className="text-ink font-medium">Tier-1 banks</strong> to
              NZ crown entities.
            </>
          }
        />

        <MetricCard
          label="Certified"
          value="AWS"
          suffix="+5"
          body={
            <>
              AWS Developer, MuleSoft,{" "}
              <strong className="text-ink font-medium">two IBM</strong>, Sun
              Java SE.
            </>
          }
        />

        <MetricCard
          label="Incorporated"
          value="NZ"
          body={
            <>
              NZ-registered limited company.{" "}
              <strong className="text-ink font-medium">GST-registered</strong>,
              fully insured.
            </>
          }
        />
      </div>
    </section>
  );
};

export default Hero;
