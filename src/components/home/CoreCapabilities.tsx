import FeatureCard from "@/components/FeatureCard";

export default function CoreCapabilities() {
	return (
		<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<FeatureCard
				title="Document Management"
				description="Centralize content and turn documents into usable team knowledge."
				href="/features#document-center"
			/>
			<FeatureCard
				title="Training Modules"
				description="Empower your team to upskill fast with modular, guided training."
				href="/features#learning-hub"
			/>
			<FeatureCard
				title="Semantic Search"
				description="Find exactly what you need with intelligent, context-aware search."
				href="/features#ai-knowledge-services"
			/>
			<FeatureCard
				title="Data Integration"
				description="Bring together data and insights for a unified view of enterprise knowledge."
				href="/features"
			/>
		</section>
	);
}



