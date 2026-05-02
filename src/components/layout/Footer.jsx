import { Mail, MapPin, Phone, SunIcon } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-yellow-950 text-yellow-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="flex items-center gap-2">
            <SunIcon className="w-7 h-7 text-orange-500 " />
            <span className="text-xl font-bold bg-linear-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              SunCart
            </span>
          </h2>
          <p className="mt-4 text-yellow-100">
            Your modern summer essentials store for sunny days, beach trips,
            skincare and seasonal outfits.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="flex items-center gap-2 mb-2">
            <Mail size={18} /> support@suncart.com
          </p>
          <p className="flex items-center gap-2 mb-2">
            <Phone size={18} /> +880 1234-567890
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Dhaka, Bangladesh
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Links</h3>

          <div className="flex gap-3 mt-5">
            <a href="https://facebook.com" target="_blank">
              <span className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
                <FaFacebookF size={18} />
              </span>
            </a>
            <a href="https://instagram.com" target="_blank">
              <span className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
                <FaInstagram size={18} />
              </span>
            </a>
            <a href="https://twitter.com" target="_blank">
              <span className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
                <FaTwitter size={18} />
              </span>
            </a>
          </div>

          <div className="mt-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-800 py-4 text-center text-sm text-yellow-200">
        © 2026 SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
