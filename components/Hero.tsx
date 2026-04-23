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
            <div className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border border-accent/25 bg-accent/10 text-accent">
                B
              </div>
              <div>
                <div className="text-sm font-medium text-ink">
                  Bank of New Zealand
                </div>
                <div className="font-mono text-[10px] text-ink-mute mt-0.5">
                  Enterprise Payments API
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-mute text-right">
                2024—26
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border border-warning/25 bg-warning/10 text-warning">
                A
              </div>
              <div>
                <div className="text-sm font-medium text-ink">ACC</div>
                <div className="font-mono text-[10px] text-ink-mute mt-0.5">
                  MyACC for Business
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-mute text-right">
                2021—24
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border border-blue/25 bg-blue/10 text-blue">
                A
              </div>
              <div>
                <div className="text-sm font-medium text-ink">
                  ANZ Banking Group
                </div>
                <div className="font-mono text-[10px] text-ink-mute mt-0.5">
                  SwiSH core banking
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-mute text-right">
                2019—21
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border border-purple/25 bg-purple/10 text-purple">
                I
              </div>
              <div>
                <div className="text-sm font-medium text-ink">
                  Inland Revenue (IR)
                </div>
                <div className="font-mono text-[10px] text-ink-mute mt-0.5">
                  via Solnet Solutions
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-mute text-right">
                2012—17
              </div>
            </div>

            <div className="grid grid-cols-[40px_1fr_auto] gap-3.5 items-center px-2.5 py-3 rounded-lg hover:bg-bg-2 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-serif italic text-lg border border-accent/25 bg-accent/10 text-accent">
                M
              </div>
              <div>
                <div className="text-sm font-medium text-ink">
                  Ministry of Health
                </div>
                <div className="font-mono text-[10px] text-ink-mute mt-0.5">
                  Claims portal modernisation
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-mute text-right">
                2012—17
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bg-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-35 hover:border-white/15 transition-colors">
          <div>
            <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-4">
              Experience
            </div>
            <div className="font-serif italic text-[64px] font-normal leading-[0.9] tracking-tight-3 ink-gradient">
              19
              <small className="text-[0.4em] text-ink-mute not-italic font-mono font-normal tracking-normal ml-1">
                yrs
              </small>
            </div>
          </div>
          <div className="text-[13px] text-ink-dim leading-snug">
            Delivering production software across{" "}
            <strong className="text-ink font-medium">
              finance, government &amp; data
            </strong>
            .
          </div>
        </div>
        <div className="bg-bg-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-35 hover:border-white/15 transition-colors">
          <div>
            <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-4">
              Engagements
            </div>
            <div className="font-serif italic text-[64px] font-normal leading-[0.9] tracking-tight-3 ink-gradient">
              12+
              <small className="text-[0.4em] text-ink-mute not-italic font-mono font-normal tracking-normal ml-1">
                clients
              </small>
            </div>
          </div>
          <div className="text-[13px] text-ink-dim leading-snug">
            From <strong className="text-ink font-medium">Tier-1 banks</strong>{" "}
            to NZ crown entities.
          </div>
        </div>
        <div className="bg-bg-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-35 hover:border-white/15 transition-colors">
          <div>
            <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-4">
              Certified
            </div>
            <div className="font-serif italic text-[64px] font-normal leading-[0.9] tracking-tight-3 ink-gradient">
              AWS
              <small className="text-[0.4em] text-ink-mute not-italic font-mono font-normal tracking-normal ml-1">
                +5
              </small>
            </div>
          </div>
          <div className="text-[13px] text-ink-dim leading-snug">
            AWS Developer, MuleSoft,{" "}
            <strong className="text-ink font-medium">two IBM</strong>, Sun Java
            SE.
          </div>
        </div>
        <div className="bg-bg-1 border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-35 hover:border-white/15 transition-colors">
          <div>
            <div className="card-label flex items-center gap-2 font-mono text-[11px] text-ink-mute uppercase tracking-wider mb-4">
              Incorporated
            </div>
            <div className="font-serif italic text-[64px] font-normal leading-[0.9] tracking-tight-3 ink-gradient">
              NZ
            </div>
          </div>
          <div className="text-[13px] text-ink-dim leading-snug">
            NZ-registered limited company.{" "}
            <strong className="text-ink font-medium">GST-registered</strong>,
            fully insured.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
