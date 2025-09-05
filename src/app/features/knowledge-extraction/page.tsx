export default function KnowledgeExtractionPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Knowledge Extraction</h1>
        <p className="text-black/80 dark:text-white/80">Transform documents into structured, actionable knowledge.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-4">
          <p>Through advanced OCR and reverse-parsing algorithms, the system converts legacy files—whether PDFs, scanned drawings, or handwritten forms—into intelligent records. Extraction covers both visible metadata and deep structure such as embedded document codes, table content, and version control.</p>
          <h2 className="text-xl font-semibold">Key Capabilities:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>OCR conversion supporting low-resolution and non-standard fonts</li>
            <li>Reverse parsing of filenames and embedded codes to derive fields like project code, version, and document status</li>
            <li>Batch import and metadata population via Excel templates or drag-and-drop</li>
            <li>Flagging of missing fields and duplicates</li>
            <li>Audit trail of imported and edited metadata for compliance</li>
          </ul>
          <h2 className="text-xl font-semibold">Business Value:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enables full visibility into historical document archives</li>
            <li>Allows integration of physical documents into live search, training, and analysis workflows</li>
            <li>Saves massive manual effort in digitization, classification, and QA</li>
          </ul>
        </article>
        <aside className="space-y-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            📸 [Placeholder for image: OCR process overlay]
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            🎬 [Placeholder for demo: drag-and-drop import + auto metadata fill]
          </div>
        </aside>
      </section>
    </div>
  );
}



