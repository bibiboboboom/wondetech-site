import UseCaseCard from "@/components/UseCaseCard";

function PlaceholderIcon() {
	return (
		<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="3" y="3" width="18" height="18" rx="4" />
			<path d="M7 8h10M7 12h6M7 16h8" />
		</svg>
	);
}

export default function UseCases() {
	return (
		<section className="space-y-6">
			<h2 className="text-2xl font-semibold">Real Impact Across Teams</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<UseCaseCard
					icon={<PlaceholderIcon />}
					title="New Hires"
					description="Onboarding was faster and clearer than ever—training materials were well-structured and easy to access. I felt confident from day one."
				/>
				<UseCaseCard
					icon={<PlaceholderIcon />}
					title="Project Coordinators"
					description="No more digging through outdated folders. All documents are centralized and searchable, making project tracking much more efficient."
				/>
				<UseCaseCard
					icon={<PlaceholderIcon />}
					title="Training Managers"
					description="Creating targeted learning paths takes minutes. The system shows who’s completed what, so we can focus on improving results."
				/>
			</div>
		</section>
	);
}



