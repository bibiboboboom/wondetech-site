export default function UnifiedRepositoryPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Unified Repository</h1>
        <p className="text-black/80 dark:text-white/80">Your single source of truth for enterprise documents.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-4">
          <p>The Unified Repository serves as the backbone of enterprise knowledge management, providing a centralized platform to store, manage, and retrieve both digital and scanned physical documents. It ensures all stakeholders—from field teams to document controllers—have secure access to the most current and relevant information.</p>
          <h2 className="text-xl font-semibold">Key Capabilities:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Centralized storage for PDFs, scanned drawings, Word/Excel files, and archive images</li>
            <li>Hierarchical folder tree structured by project, discipline, department, and document type</li>
            <li>Full-text indexing with support for Arabic, English, and multilingual archives</li>
            <li>Role-based permission layers: view-only, editor, uploader, controller</li>
            <li>Seamless integration with project handover processes and online document workflows</li>
            <li>Archive lifecycle status (e.g., active, under review, obsolete) visible at a glance</li>
          </ul>
          <h2 className="text-xl font-semibold">Business Value:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Eliminates information silos across teams and departments</li>
            <li>Ensures consistency and traceability in documentation across project phases</li>
            <li>Greatly reduces manual time spent searching, validating, or duplicating content</li>
          </ul>
        </article>
        <aside className="space-y-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            📸 [Placeholder for image: file tree + search preview]
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            🎬 [Placeholder for demo: uploading + retrieval scenario]
          </div>
        </aside>
      </section>
    </div>
  );
}



