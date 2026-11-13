import Link from 'next/link';
import services from '@/data/services.json';
import projects from '@/data/projects.json';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Launch Faster. Fix Faster. <span className="text-blue-600">Grow Faster.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert Frontend Development, Bug Fixing, and Speed Optimization.
            I build high-performance React applications and repair broken layouts with precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Get Started Now
            </Link>
            <Link href="/projects" className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">From frontend architecture to rapid bug fixing, I provide the technical expertise your project needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="p-8 border rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {service.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="text-blue-600 font-bold hover:underline">
            View All Services →
          </Link>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Highlights</h2>
              <p className="text-gray-600">Real-world results delivered to clients.</p>
            </div>
            <Link href="/projects" className="hidden md:block text-blue-600 font-bold hover:underline">
              Full Portfolio →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 animate-pulse relative overflow-hidden">
                  {/* Placeholder for images */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                    {project.title} Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded uppercase font-bold tracking-tighter">{tag}</span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.slug}`} className="block text-center py-2 border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">
                    Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="bg-blue-600 text-white rounded-[2rem] p-12 md:p-20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to fix your website?</h2>
          <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">
            Contact me today for a free consultation and project quote.
            I typically respond within 1 hour.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg">
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
