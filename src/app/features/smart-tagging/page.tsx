export default function SmartTaggingPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Smart Tagging</h1>
        <p className="text-black/80 dark:text-white/80">Automatically organize knowledge at scale with intelligent tagging.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-4">
          <p>The Smart Tagging engine analyzes filenames, metadata, and OCR results to automatically classify documents based on rules, keywords, and organizational logic. Administrators can define custom tagging policies, while users benefit from dynamic filters and AI-assisted suggestions.</p>
          <h2 className="text-xl font-semibold">Key Capabilities:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tag extraction from document codes (e.g. “ATPC-DS2-SIP-0004”)</li>
            <li>Mapping of fields like plant, originator, discipline, revision, doc type</li>
            <li>OCR-based tagging of scanned legacy documents</li>
            <li>Support for custom metadata schemas: region, asset, contractor, etc.</li>
            <li>Tag-driven filtering and advanced search refinement on frontend</li>
            <li>Admin interface to bulk assign/edit tags and manage rule logic</li>
          </ul>
          <h2 className="text-xl font-semibold">Business Value:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Significantly shortens time-to-find for critical files</li>
            <li>Prevents misfiling by enforcing standardized taxonomy</li>
            <li>Lays the foundation for semantic search and AI content recommendation</li>
          </ul>
        </article>
        <aside className="space-y-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            📸 [Placeholder for image: tag admin panel]
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            🎬 [Placeholder for demo: automated tag assignment + filter search]
          </div>
        </aside>
      </section>
    </div>
  );
}



