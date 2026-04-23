
const Nav = () => { return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 max-w-295 px-6">
        <div className="glass border border-white/10 rounded-2xl p-2.5 pl-4.5 flex items-center justify-between gap-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          <a href="#" className="flex items-center gap-2.5 font-mono text-[13px] font-medium">
            <span className="logo-mark w-6 h-6 rounded-md bg-linear-to-br from-accent to-accent-dim flex items-center justify-center text-bg shadow-[0_0_20px_rgba(124,255,107,0.15)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10"/>
                <path d="M12 14l-4-4"/>
                <path d="M12 12l4-4"/>
                <path d="M12 10c0-3 2-5 5-5"/>
                <path d="M12 10c0-3-2-5-5-5"/>
              </svg>
            </span>
            moxietree
            <span className="text-ink-mute">/</span>
            <span className="text-ink-mute">enterprise_ltd</span>
          </a>

          <div className="hidden md:flex gap-1 text-[13px] font-mono">
            <a href="#services" className="text-ink-dim px-3.5 py-2 rounded-lg hover:text-ink hover:bg-bg-3 transition-colors">Services</a>
            <a href="#work" className="text-ink-dim px-3.5 py-2 rounded-lg hover:text-ink hover:bg-bg-3 transition-colors">Case studies</a>
            <a href="#approach" className="text-ink-dim px-3.5 py-2 rounded-lg hover:text-ink hover:bg-bg-3 transition-colors">Approach</a>
            <a href="#about" className="text-ink-dim px-3.5 py-2 rounded-lg hover:text-ink hover:bg-bg-3 transition-colors">About</a>
            <a href="#contact" className="text-ink-dim px-3.5 py-2 rounded-lg hover:text-ink hover:bg-bg-3 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden md:inline-flex items-center gap-2 status-dot font-mono text-[11px] text-accent px-3 py-2 border border-accent/25 bg-accent/5 rounded-lg">Taking new engagements</span>
            <a href="#contact" className="text-[13px] font-medium px-3.5 py-2 bg-ink text-bg rounded-lg hover:bg-accent transition-colors">Get in touch</a>
          </div>
        </div>
      </nav>
    );
}

export default Nav;