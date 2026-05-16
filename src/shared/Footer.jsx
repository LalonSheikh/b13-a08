// components/Footer.jsx

import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500">BookHaven</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            A modern online book borrowing platform where users can explore,
            borrow, and manage books easily.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/books" className="hover:text-orange-500 transition">
                All Books
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className="hover:text-orange-500 transition"
              >
                My Profile
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            Contact Us
          </h3>

          <div className="space-y-2 text-gray-300">
            <p>Email: support@bookhaven.com</p>
            <p>Phone: +880 1234-567890</p>
            <p>Location: Dinajpur, Rongpur, Bangladesh</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} BookHaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
