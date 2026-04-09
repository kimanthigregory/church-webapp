import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-lg font-semibold text-sky-800 dark:text-sky-200">
            St. Mary's Catholic Church Kiserian
          </div>
          <p className="font-headline text-base text-slate-700 dark:text-slate-300">
            A community of faith serving the Kiserian region with devotion and
            love since its founding.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-amber-700">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-amber-700">
              share
            </span>
            <span className="material-symbols-outlined text-amber-700">
              mail
            </span>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs text-slate-900 dark:text-slate-100">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-sky-700 hover:underline decoration-amber-500 underline-offset-4 transition-all"
                href="#"
              >
                Mass Times
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-sky-700 hover:underline decoration-amber-500 underline-offset-4 transition-all"
                href="#"
              >
                Confession
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-sky-700 hover:underline decoration-amber-500 underline-offset-4 transition-all"
                href="#"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-500 dark:text-slate-400 hover:text-sky-700 hover:underline decoration-amber-500 underline-offset-4 transition-all"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-xs text-slate-900 dark:text-slate-100">
            Our Location
          </h4>
          <div className="h-48 rounded-lg overflow-hidden grayscale border border-slate-200">
            <img
              className="w-full h-full object-cover"
              alt="Simple street map view of Kiserian neighborhood"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBExvuipXjqOJnWPnnphGM-r0S4U_CSMGnoVl_qK9bxNLN-tUmUq6pebkY6i_6JpsCkEQjsZEnqMaSlt7Bw__dUSf1m38UW_iG2oQBSdMqCz7tLpnvNqueRfqn6MM6f-HMccQA7t2S0woBVs5dY4wlYhBrnRiAs0Gv640VcixEWSenqcXChRPa6cQPooU6ILnwxK0taIQOvC9-kiWNZKA2VNLtaUKu4jxwr6oIo9ODpXgFm1E-RjLkFUBoq3SB5l90Rtsc4RuoYJu6i"
            />
          </div>
          <p className="text-sm text-slate-500">
            Main Magadi Road, Kiserian, Kenya
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-100 dark:border-slate-900 text-center">
        <p className="font-headline text-sm text-slate-500 dark:text-slate-400">
          © 2024 St. Mary's Catholic Church Kiserian. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
