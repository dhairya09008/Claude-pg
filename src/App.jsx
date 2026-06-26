import { useState } from 'react'

function App() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-near-black text-warm-off-white font-dm-sans selection:bg-burnt-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-near-black/80 backdrop-blur-md border-b border-subtle-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-syne font-bold text-2xl tracking-tight text-warm-off-white">
            The Traction Co.
          </div>
          <button
            onClick={scrollToForm}
            className="bg-burnt-orange hover:bg-deep-orange text-white px-6 py-2.5 rounded-[6px] font-semibold transition-colors duration-200"
          >
            Work With Me
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-syne font-bold text-5xl md:text-7xl leading-tight mb-8">
              We get traction for service businesses that are tired of posting into the <span className="text-dark-gray">void.</span>
            </h1>
            <p className="text-medium-gray text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Performance marketing for mortgage brokers, trades businesses, real estate agents, insurance advisors, and immigration consultants — built around strategy, not random posts.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-burnt-orange hover:bg-deep-orange text-white px-8 py-4 rounded-[6px] font-bold text-lg transition-colors duration-200"
            >
              Tell Me About Your Business
            </button>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-24 px-6 border-t border-subtle-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-burnt-orange font-semibold text-[11px] tracking-[0.15em] uppercase mb-12">
              SOUND FAMILIAR?
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "You're posting. Nobody's responding.",
                  body: "You're showing up online but getting nothing back — no leads, no calls, no traction."
                },
                {
                  title: "You're too busy running the business to fix the marketing.",
                  body: "Marketing keeps falling to the bottom of the list because clients and jobs come first."
                },
                {
                  title: "You've spent money on marketing before and felt burned.",
                  body: "Random boosts and agency promises that led nowhere. You need someone accountable."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-dark-surface p-10 rounded-[8px] border border-subtle-border">
                  <h3 className="font-syne font-semibold text-xl mb-4 leading-tight">{card.title}</h3>
                  <p className="text-medium-gray leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-6 bg-near-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-burnt-orange font-semibold text-[11px] tracking-[0.15em] uppercase mb-6">
              WHAT WE DO
            </div>
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-16 leading-tight max-w-3xl">
              The right strategy. The right platform. No guessing.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Meta Ads Management",
                  body: "Facebook and Instagram campaigns built around your ideal client — not just impressions or vanity metrics."
                },
                {
                  title: "Google Ads Management",
                  body: "Capture clients who are already searching for exactly what you offer. High intent. Lower waste."
                },
                {
                  title: "AI-Assisted Content Strategy",
                  body: "Consistent, on-brand content without you having to show up on camera every day. Strategy first, content second."
                },
                {
                  title: "Full Marketing Audit",
                  body: "A clear diagnosis of where your marketing is broken and a prioritized plan for what to fix first."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-dark-surface p-10 rounded-[8px] border border-subtle-border group">
                  <div className="w-12 h-12 bg-burnt-orange/10 flex items-center justify-center rounded-md mb-6 group-hover:bg-burnt-orange/20 transition-colors">
                    <div className="w-3 h-3 bg-burnt-orange rounded-full" />
                  </div>
                  <h3 className="font-syne font-semibold text-2xl mb-4">{service.title}</h3>
                  <p className="text-medium-gray leading-relaxed">{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-24 px-6 border-t border-subtle-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-burnt-orange font-semibold text-[11px] tracking-[0.15em] uppercase mb-6">
              CURRENT WORK
            </div>
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-16 leading-tight">
              The gap we're closing right now.
            </h2>
            <div className="bg-dark-surface p-8 md:p-12 rounded-[8px] border border-subtle-border">
              <div className="text-warm-off-white text-lg font-semibold mb-12">
                Local Immigration Consultancy, Surrey BC
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-subtle-border pb-12">
                <div>
                  <div className="text-4xl md:text-5xl font-syne font-bold text-warm-off-white mb-2">5 → 30+</div>
                  <div className="text-medium-gray text-sm uppercase tracking-wider">Monthly clients targeted</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-syne font-bold text-warm-off-white mb-2">$2,500 → $15,000</div>
                  <div className="text-medium-gray text-sm uppercase tracking-wider">Monthly revenue potential</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-syne font-bold text-warm-off-white mb-2">$12,500</div>
                  <div className="text-medium-gray text-sm uppercase tracking-wider">Monthly gap being closed</div>
                </div>
              </div>
              <p className="text-medium-gray text-lg leading-relaxed mb-6">
                Previous marketing: random, unstrategic posting on LinkedIn, Instagram, and Facebook. No system. No follow-up. No results.
              </p>
              <div className="text-dark-gray text-sm italic">
                Client details anonymized. Work in progress — results to be updated.
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-burnt-orange font-semibold text-[11px] tracking-[0.15em] uppercase mb-6">
              WHO'S BEHIND THIS
            </div>
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-12 leading-tight max-w-3xl">
              Not an agency. Not a guru. Just someone who does the work.
            </h2>
            <div className="max-w-3xl">
              <p className="text-warm-off-white text-lg md:text-xl leading-relaxed mb-8">
                I'm a performance marketer based in Surrey, BC. I have a certification in digital and performance marketing, and I work with a small number of service businesses at a time — so I'm never spread too thin to care about your results. I'm not here to sell you a package and disappear. I'm here to figure out what's actually broken in your marketing and fix it.
              </p>
              <div className="text-dark-gray text-sm">
                Currently taking on new clients for Fall 2026.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-24 px-6 border-t border-subtle-border">
          <div className="max-w-3xl mx-auto">
            <div className="text-burnt-orange font-semibold text-[11px] tracking-[0.15em] uppercase mb-6 text-center">
              LET'S TALK
            </div>
            <h2 className="font-syne font-bold text-4xl md:text-5xl mb-4 leading-tight text-center">
              Tell me about your business.
            </h2>
            <p className="text-medium-gray text-center mb-16 text-lg">
              Fill this out. I'll follow up within 24 hours.
            </p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-warm-off-white">What type of business do you run?</label>
                <input
                  type="text"
                  placeholder="e.g. Mortgage broker, electrician, real estate agent..."
                  className="w-full bg-dark-surface border border-subtle-border rounded-[6px] px-4 py-4 focus:outline-none focus:border-burnt-orange transition-colors text-warm-off-white placeholder:text-dark-gray"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-warm-off-white">What's your biggest marketing problem right now?</label>
                <textarea
                  rows={4}
                  placeholder="Be as specific as you can — the more detail, the better I can help."
                  className="w-full bg-dark-surface border border-subtle-border rounded-[6px] px-4 py-4 focus:outline-none focus:border-burnt-orange transition-colors text-warm-off-white placeholder:text-dark-gray resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-warm-off-white">Your name and best way to reach you</label>
                <input
                  type="text"
                  placeholder="Name, email, or phone — whatever you prefer"
                  className="w-full bg-dark-surface border border-subtle-border rounded-[6px] px-4 py-4 focus:outline-none focus:border-burnt-orange transition-colors text-warm-off-white placeholder:text-dark-gray"
                />
              </div>
              <button className="w-full bg-burnt-orange hover:bg-deep-orange text-white py-5 rounded-[6px] font-bold text-lg transition-colors">
                Send It
              </button>
            </form>
            <p className="text-dark-gray text-center mt-8 text-sm">
              No spam. No sales pitch on the call. Just a real conversation.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-subtle-border bg-near-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="font-syne font-bold text-xl">The Traction Co. — Surrey, BC</div>
            <div className="text-warm-off-white hover:text-burnt-orange transition-colors cursor-pointer">
              hello@thetraction.com
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-warm-off-white hover:text-burnt-orange transition-colors">Instagram</a>
              <a href="#" className="text-warm-off-white hover:text-burnt-orange transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="text-dark-gray text-sm text-center md:text-left">
            © 2026 The Traction Co.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
