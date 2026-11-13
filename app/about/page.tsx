import { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Taha Soumbate (tahadigitallab), a Frontend Developer & Web Specialist based in Morocco. Specializing in React, Next.js, bug fixing, responsive design, speed optimization, and mobile app development.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-950">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-dark-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-dark-50 mb-6">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Taha Soumbate</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-dark-300 mb-4">
                Frontend Developer & Web Specialist — <span className="font-medium">tahadigitallab</span>
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-400 mb-8 leading-relaxed">
                I help businesses launch faster and fix what's broken. Based in Morocco, I serve clients globally
                in English, French, and Arabic. With expertise across the full frontend spectrum — from bug fixing
                and responsive layouts to React applications and mobile app conversion — I deliver clean, performant,
                and accessible code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Work With Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 hover:bg-primary-100 dark:hover:bg-primary-900/50 rounded-lg transition-colors border border-primary-200 dark:border-primary-800"
                >
                  View Projects
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-1">
                <div className="aspect-square bg-dark-50 dark:bg-dark-950 rounded-xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-primary-200 dark:text-primary-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-dark-950 rounded-xl p-4 shadow-lg border border-dark-200 dark:border-dark-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-dark-50">Available Now</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">Response within 1 hour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-dark-50 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300">
              Modern tools and frameworks I work with daily
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
              { category: 'Styling', skills: ['Tailwind CSS', 'CSS Grid', 'Flexbox', 'CSS Variables', 'Animations', 'Responsive Design'] },
              { category: 'Performance', skills: ['Core Web Vitals', 'Lighthouse', 'Lazy Loading', 'Image Optimization', 'Caching', 'Service Workers'] },
              { category: 'Tools', skills: ['Git', 'GitHub Actions', 'Vercel', 'Netlify', 'VS Code', 'Figma'] },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-dark-950 rounded-xl p-6 border border-dark-200 dark:border-dark-800">
                <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full" />
                  {item.category}
                </h3>
                <ul className="space-y-1">
                  {item.skills.map((skill) => (
                    <li key={skill} className="text-sm text-dark-600 dark:text-dark-400 flex items-center gap-2">
                      <svg className="w-3 h-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 lg:py-24 bg-dark-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-dark-50 mb-4">
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'bug', title: 'Bug Fixing & Layout', desc: 'Fix broken layouts, CSS issues, JS errors across all devices' },
              { icon: 'speed', title: 'Speed Optimization', desc: 'Core Web Vitals, Lighthouse scores, image optimization' },
              { icon: 'react', title: 'React Development', desc: 'Next.js, TypeScript, hooks, server components' },
              { icon: 'migration', title: 'Website Migration', desc: 'WordPress, Shopify, Webflow to modern stacks' },
              { icon: 'email', title: 'Email Templates', desc: 'Cross-client compatible HTML/CSS emails' },
              { icon: 'mobile', title: 'Mobile Apps', desc: 'PWA, React Native, Capacitor, App Store deployment' },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-dark-950 rounded-xl p-6 border border-dark-200 dark:border-dark-800 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg w-fit mb-4">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-dark-50 mb-2">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Languages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary-600 rounded-2xl">
              <svg className="w-12 h-12 mx-auto text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Based in Morocco</h3>
              <p className="text-primary-100">GMT+1 timezone — aligned with EU/US business hours</p>
            </div>
            <div className="text-center p-8 bg-dark-900 dark:bg-dark-950 rounded-2xl border border-dark-800">
              <svg className="w-12 h-12 mx-auto text-primary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">3 Languages</h3>
              <p className="text-dark-400">English (Fluent) • French (Native) • Arabic (Native)</p>
            </div>
            <div className="text-center p-8 bg-dark-900 dark:bg-dark-950 rounded-2xl border border-dark-800">
              <svg className="w-12 h-12 mx-auto text-primary-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Fast Response</h3>
              <p className="text-dark-400">Typically respond within 1 hour during business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-primary-100 mb-6">
            Whether you need a bug fixed, a site optimized, or a full application built — I'm ready to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-semibold text-primary-600 bg-white hover:bg-primary-50 rounded-lg transition-colors"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  )
}

function renderIcon(icon: string) {
  const icons: Record<string, React.ReactNode> = {
    bug: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    speed: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    react: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    migration: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    email: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    mobile: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  }
  return icons[icon] || icons.bug
}