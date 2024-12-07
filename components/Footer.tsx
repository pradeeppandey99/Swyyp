import Link from 'next/link'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-emerald-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="hover:text-emerald-400 transition-colors">Help Center</Link></li>
              <li><Link href="/api" className="hover:text-emerald-400 transition-colors">API Documentation</Link></li>
              <li><Link href="/community" className="hover:text-emerald-400 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-emerald-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Swyyp. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="font-semibold mb-2">Stay Updated – Subscribe to Our Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}

