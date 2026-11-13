import services from '@/data/services.json';

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert-level development and optimization services tailored to your business needs.
            I focus on performance, responsiveness, and clean, maintainable code.
          </p>
        </header>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full h-80 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-3xl flex items-center justify-center">
                 <span className="text-blue-300 font-bold text-2xl uppercase tracking-widest">{service.id} Demo Area</span>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-32 bg-gray-900 text-white p-12 md:p-20 rounded-[3rem] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom service?</h2>
          <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
            If you don't see exactly what you need, get in touch anyway.
            I'm happy to discuss custom technical challenges and solutions.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Custom Quote
          </a>
        </section>
      </div>
    </div>
  );
}
