import UseCaseCard from "@/components/UseCaseCard";

function Icon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export default function UseCasesPage() {
  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">How teams unlock value with WondeTech</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">Role-tailored knowledge flows help every function move faster with confidence.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UseCaseCard icon={<Icon />} title="Field Engineer" description="Access procedures, diagrams, and answers offline at the job site." />
        <UseCaseCard icon={<Icon />} title="Sales" description="Surface the latest messaging, decks, and competitive insights in seconds." />
        <UseCaseCard icon={<Icon />} title="HR" description="Standardize onboarding and policy knowledge across locations." />
        <UseCaseCard icon={<Icon />} title="IT Admin" description="Document systems, automate runbooks, and resolve tickets faster." />
        <UseCaseCard icon={<Icon />} title="Project Manager" description="Align teams with a single source of truth for plans and decisions." />
        <UseCaseCard icon={<Icon />} title="New Employee" description="Ramp quickly with curated learning paths and AI-assisted Q&A." />
      </div>
    </div>
  );
}




