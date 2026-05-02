"use client";

import Link from "next/link";
import {
  Menu,
  X,
  Search,
  SunIcon,
  UserCircle2Icon,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";
import { getCart } from "@/lib/cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const showLogout = pathname === "/my-profile";

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      const total = cart.reduce((sum, item) => sum + item.qty, 0);
      setCartCount(total);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out");
    router.push("/");
    router.refresh();
  };

  return (
    <header className="w-full bg-yellow-50 border-b border-orange-100 ">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <SunIcon className="w-7 h-7 text-orange-500 " />
          <span className="text-xl font-bold bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            SunCart
          </span>
        </Link>

        <div className="hidden md:flex gap-6 font-semibold">
          <Link className="text-yellow-900 hover:text-orange-500" href="/">
            HOME
          </Link>
          <Link
            className="text-yellow-900 hover:text-orange-500"
            href="/products"
          >
            PRODUCTS
          </Link>
          <Link
            className="text-yellow-900 hover:text-orange-500"
            href="/my-profile"
          >
            MY PROFILE
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-44 md:w-64 rounded-full border border-orange-200 bg-orange-50/60 py-2 pl-4 pr-11 text-sm text-yellow-900 outline-none placeholder:text-yellow-900/50 focus:border-orange-400 focus:bg-white"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4  text-yellow-900" />
          </div>
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-orange-500" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <>
              <Link href="/my-profile">
                {user.image ? (
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-orange-200">
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-orange-400 to-pink-500 text-white">
                    <UserCircle2Icon className="h-6 w-6" />
                  </div>
                )}
              </Link>

              {showLogout && (
                <button
                  onClick={handleLogout}
                  className="border border-orange-200 px-4 py-2 rounded-full text-sm font-medium text-yellow-900 hover:bg-orange-500 hover:text-white"
                >
                  Logout
                </button>
              )}
            </>
          ) : (
            <Link
              href="/login"
              className="border border-orange-200 px-4 py-2 rounded-full text-sm font-medium text-yellow-900 hover:bg-orange-500 hover:text-white"
            >
              Login
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-orange-500 "
          >
            {open ? (
              <X size={25} strokeWidth={2.5} />
            ) : (
              <Menu size={25} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white px-6 pb-4 ">
          <div className="flex flex-col gap-4 text-yellow-900 font-semibold">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-yellow-900 hover:text-orange-500"
            >
              HOME
            </Link>
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="text-yellow-900 hover:text-orange-500"
            >
              PRODUCTS
            </Link>
            <Link
              href="/my-profile"
              onClick={() => setOpen(false)}
              className="text-yellow-900 hover:text-orange-500"
            >
              MY PROFILE
            </Link>
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="hover:text-orange-500"
            >
              CART ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
