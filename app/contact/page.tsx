export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Get in Touch</h1>
          <p className="text-xl text-gray-600">Let's discuss how I can help you fix your website or launch your next big project.</p>
        </header>

        <div className="bg-white border rounded-[2rem] p-8 md:p-12 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                placeholder="Taha Soumbate"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                placeholder="hello@tahadigitallab.com"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Service Needed</label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all bg-white"
              >
                <option>Bug Fixing / UI Repair</option>
                <option>Speed Optimization</option>
                <option>React Development</option>
                <option>Migration / Deployment</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none"
                placeholder="Briefly describe what you need help with..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-gray-500 text-sm mb-4">Or reach me directly at:</p>
            <p className="font-bold text-blue-600">hello@tahadigitallab.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
