import projects from '@/data/projects.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects" className="text-blue-600 font-bold mb-8 inline-block hover:underline">
          ← Back to All Projects
        </Link>

        <header className="mb-12">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">{project.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
        </header>

        <div className="aspect-video bg-gray-100 rounded-3xl mb-16 flex items-center justify-center text-gray-400 font-bold text-2xl border">
          Main Project Image / Video Walkthrough
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20 border-y py-12">
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-2">My Role</h3>
            <p className="font-bold">Lead Frontend Developer</p>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="font-bold text-sm text-blue-600">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-2">Deliverables</h3>
            <p className="font-bold">React Components, Performance Audit</p>
          </div>
        </div>

        <article className="prose prose-lg max-w-none prose-blue">
          <h2>The Challenge</h2>
          <p>
            This section describes the technical obstacles faced during the project.
            For example, legacy code issues, performance bottlenecks, or complex UI requirements.
          </p>

          <h2>The Solution</h2>
          <p>
            Detailed explanation of the technical approach taken to solve the problem.
            Mentioning specific tools like React, Tailwind CSS, or performance profiling techniques.
          </p>

          <div className="bg-blue-50 p-8 rounded-2xl my-12 border border-blue-100">
            <h3 className="text-blue-900 mt-0">Technical Detail: Core Fixes</h3>
            <ul className="text-blue-800 font-medium">
              <li>Optimized React reconciliation via proper key management</li>
              <li>Implemented dynamic imports for heavy components</li>
              <li>Refined Tailwind CSS configuration for minimal bundle size</li>
              <li>Repaired responsive breakpoints across 5 distinct viewports</li>
            </ul>
          </div>

          <h2>The Results</h2>
          <p>
            Measurable outcomes such as Lighthouse score improvements, reduced bundle sizes,
            or positive client feedback regarding the UI fixes.
          </p>
        </article>

        <section className="mt-24 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-8 text-center">Ready to get similar results?</h2>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg">
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
