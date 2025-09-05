export default function DocumentWorkflowsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Document Workflows</h1>
        <p className="text-black/80 dark:text-white/80">End-to-end digital control over your archive lifecycle.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 space-y-4">
          <p>Document Workflows power a structured process for submission, review, retrieval, and disposal of documents—integrated with RFID tracking and mobile scanning. Every action is logged, permission-gated, and mapped to a lifecycle stage to ensure operational control and regulatory compliance.</p>
          <h2 className="text-xl font-semibold">Key Capabilities:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Online form-based submission with document info + file + physical box barcode</li>
            <li>Configurable approval workflows involving Focal Points (FPs) and Document Record Managers (DRMs)</li>
            <li>Support for borrow/return flows with expected return dates and email reminders</li>
            <li>RFID handheld PDA integration to confirm box movement and binder identity</li>
            <li>Disposal workflows with destruction requests, authorization, and irreversible status update</li>
            <li>Real-time status dashboard and document history timeline</li>
          </ul>
          <h2 className="text-xl font-semibold">Business Value:</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Enables decentralized teams to archive or retrieve without physical presence</li>
            <li>Minimizes document loss and improves accountability with RFID</li>
            <li>Aligns with enterprise-level records management policy and compliance</li>
          </ul>
        </article>
        <aside className="space-y-4">
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            📸 [Placeholder for image: workflow dashboard + RFID scan]
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-4">
            🎬 [Placeholder for demo: submit + approve + borrow + return]
          </div>
        </aside>
      </section>
    </div>
  );
}



