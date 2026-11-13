import Link from 'next/link';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600">A collection of technical problems I've solved for businesses.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden relative border hover:border-blue-500 transition-all">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                     {project.title} Preview
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                <Link href={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase border px-2 py-1 rounded text-gray-500 tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
