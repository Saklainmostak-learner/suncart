import Link from "next/link";
import { Search, SunIcon, UserCircle2Icon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-yellow-50 border-b border-orange-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4 rounded-full bg-white/80 px-5 py-3 shadow-sm border border-orange-100">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <SunIcon className="w-7 h-7 text-orange-500" />
            <span className="text-2xl font-bold bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent ">
              SunCart
            </span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <Link href="/" className="text-yellow-900 hover:text-orange-500">
              HOME
            </Link>
            <Link href="/products" className="text-yellow-900 hover:text-orange-500">
              PRODUCTS
            </Link>
            <Link href="/my-profile" className="text-yellow-900 hover:text-orange-500">
              MY PROFILE
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search in..."
                className="w-48 md:w-64 rounded-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
              />
              <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-yellow-900" />
            </div>

            <Link
              href="/login"
              className="rounded-full border border-orange-200 px-4 py-2 text-sm font-medium text-yellow-900 hover:bg-orange-500 hover:text-white"
            >
              Login
            </Link>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-orange-400 to-pink-500 text-white">
              <UserCircle2Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;