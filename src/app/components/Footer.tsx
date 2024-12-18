"use client"
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Footer Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h3>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition duration-300"
          >
            <FaFacebook size={30} />
          </Link>
          <Link
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition duration-300"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition duration-300"
          >
            <FaTwitter size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-500 transition duration-300"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>

        {/* Footer Links */}
        <ul className="flex justify-center gap-8 mb-8 text-lg">
          <li>
            <Link href="/" className="hover:text-orange-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-orange-500 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/destination" className="hover:text-orange-500 transition duration-300">
              Destinations
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Footer Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Travel Blog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
