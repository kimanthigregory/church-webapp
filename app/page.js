import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-sky-900">
          {/* Temporary placeholder background since the Google image link will expire */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-pattern-arch mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <span className="inline-block mb-6 font-label text-tertiary uppercase tracking-[0.2em] text-sm font-bold">
              A Digital Sanctuary
            </span>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl text-primary font-extrabold leading-[1.1] mb-8 -tracking-[0.02em]">
              Welcome to Our <br />
              Parish Family
            </h1>
            <p className="font-body text-xl text-secondary max-w-xl mb-12 leading-relaxed">
              Join us in prayer, fellowship, and service as we grow together in
              faith within the sacred heart of Kiserian.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-tertiary text-on-tertiary px-10 py-5 rounded-sm font-label uppercase text-sm tracking-widest font-bold hero-gradient border-none shadow-lg">
                Mass Times
              </button>
              <button className="bg-transparent text-primary px-10 py-5 rounded-sm font-label uppercase text-sm tracking-widest font-bold border border-outline-variant/20 hover:bg-surface-container transition-colors">
                Explore Ministries
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-cross pointer-events-none opacity-60"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-4xl text-on-surface mb-4 font-bold">
                Liturgical Schedule
              </h2>
              <div className="h-1 w-20 bg-tertiary mb-12"></div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      church
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Mass Times
                    </h3>
                    <div className="space-y-2 text-secondary">
                      <p className="flex justify-between w-64">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">6:30 AM</span>
                      </p>
                      <p className="flex justify-between w-64">
                        <span>Saturday:</span>
                        <span className="font-semibold">5:00 PM (Vigil)</span>
                      </p>
                      <p className="flex justify-between w-64">
                        <span>Sunday:</span>
                        <span className="font-semibold">8:00 AM, 10:30 AM</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border-l-4 border-tertiary">
                    <span className="material-symbols-outlined text-tertiary text-3xl">
                      favorite
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold mb-2">
                      Sacrament of Confession
                    </h3>
                    <div className="space-y-2 text-secondary">
                      <p className="flex justify-between w-64">
                        <span>Saturday:</span>
                        <span className="font-semibold">4:00 PM - 4:45 PM</span>
                      </p>
                      <p className="flex justify-between w-64">
                        <span>First Fridays:</span>
                        <span className="font-semibold">
                          After Morning Mass
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pt-12">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-tertiary/20 rounded-full z-0"></div>
              <div className="relative z-10 glass-reflection p-12 rounded-xl shadow-xl border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary mb-4">
                  format_quote
                </span>
                <blockquote className="font-headline text-2xl italic text-on-surface leading-relaxed mb-6">
                  "The Eucharist is the source and summit of the Christian
                  life."
                </blockquote>
                <cite className="font-body text-sm uppercase tracking-widest text-secondary font-bold not-italic">
                  — St. John Paul II
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-surface-container-highest relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-arch pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="material-symbols-outlined text-tertiary text-5xl mb-8">
              volunteer_activism
            </span>
            <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-8">
              Support Our Parish
            </h2>
            <p className="font-body text-xl text-secondary mb-12 leading-relaxed">
              Your stewardship allows us to maintain our sacred spaces and
              continue our vital outreach programs in the community. Every
              contribution is a seed of faith.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-tertiary text-on-tertiary px-12 py-5 rounded-sm font-label uppercase text-sm tracking-[0.2em] font-bold shadow-xl hover:translate-y-[-2px] transition-all">
                Donate Online
              </button>
              <button className="bg-white text-primary border border-outline-variant/30 px-12 py-5 rounded-sm font-label uppercase text-sm tracking-[0.2em] font-bold hover:bg-surface-container transition-all">
                Pledge Monthly
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
