import FeatureCard from "@/components/FeatureCard";

export default function FeaturesPage() {
  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Explore WondeTech’s end-to-end capabilities across document management, learning, and AI-powered knowledge services.</p>
      </header>

      <section id="document-center" className="space-y-6">
        <h2 className="text-2xl font-semibold">Document Center</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Unified Repository" description="Centralize company documents with versioning and access control." />
          <FeatureCard title="Smart Tagging" description="Auto-tag content with entities and topics for quick retrieval." />
          <FeatureCard title="Knowledge Extraction" description="Convert PDFs, docs, and slides into structured, reusable knowledge." />
          <FeatureCard title="Document Workflows" description="Review, approve, and publish with integrated workflows." />
        </div>
      </section>

      <section id="learning-hub" className="space-y-6">
        <h2 className="text-2xl font-semibold">Learning Hub</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Modular Courses" description="Build guided learning paths from bite-sized modules." />
          <FeatureCard title="Assessments" description="Measure comprehension with quizzes and practical checks." />
          <FeatureCard title="Progress Tracking" description="Track completion rates and skill growth across teams." />
          <FeatureCard title="Certifications" description="Issue internal badges and role-based certifications." />
        </div>
      </section>

      <section id="ai-knowledge-services" className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Knowledge Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Semantic Search" description="Find answers with meaning-aware, context-rich retrieval." />
          <FeatureCard title="Summarization" description="Generate concise summaries tailored to roles and tasks." />
          <FeatureCard title="Q&A Assistants" description="Embed AI assistants that cite sources and respect permissions." />
          <FeatureCard title="Insights & Analytics" description="See what knowledge drives outcomes and fill gaps fast." />
        </div>
      </section>

      <section className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
        <h2 className="text-xl font-semibold mb-2">What Our Customers Say</h2>
        <blockquote className="text-black/80 dark:text-white/80">
          “WondeTech helped us capture field knowledge and ramp new hires twice as fast. The semantic search is a game changer for frontline teams.”
        </blockquote>
        <p className="mt-3 text-sm text-black/60 dark:text-white/60">— Alex Morgan, Operations Director</p>
      </section>
    </div>
  );
}




