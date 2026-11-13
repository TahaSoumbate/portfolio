import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-blue-600">
            tahadigitallab
          </Link>
          <div className="space-x-6 hidden md:flex">
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-blue-600 transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Me
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-4 text-blue-600">tahadigitallab</h2>
              <p className="text-gray-600 max-w-sm">
                Helping businesses launch faster, rank better, and fix what's broken through expert frontend development and technical optimization.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Portfolio</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Morocco, Casablanca</li>
                <li>hello@tahadigitallab.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} tahadigitallab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
