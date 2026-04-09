import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="font-headline text-xl font-bold text-sky-900 dark:text-sky-100">
          St. Mary's Kiserian
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link
            className="font-headline text-sm uppercase tracking-widest text-sky-700 dark:text-sky-400 border-b-2 border-amber-600 pb-1"
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-headline text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="font-headline text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
            href="/readings"
          >
            Daily Readings
          </Link>
          <Link
            className="font-headline text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
            href="/ministries"
          >
            Ministries
          </Link>
          <Link
            className="font-headline text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-sky-800 dark:hover:text-sky-200 transition-colors"
            href="#"
          >
            Gallery
          </Link>
        </div>
        <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-sm font-label uppercase text-xs tracking-widest font-bold hover:bg-tertiary-container transition-colors duration-300">
          Donate
        </button>
      </div>
    </nav>
  );
}
