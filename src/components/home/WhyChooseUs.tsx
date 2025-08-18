function Icon() {
	return (
		<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-indigo-400 text-white">
			<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M20 6L9 17l-5-5" />
			</svg>
		</span>
	);
}

export default function WhyChooseUs() {
	const bullets = [
		"Accelerated onboarding and training",
		"AI-powered search for faster answers",
		"Seamless system integration",
		"Measurable business outcomes",
	];

	return (
		<section className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-6 py-12 sm:px-10 sm:py-16 lg:px-16 space-y-6">
			<div className="max-w-3xl">
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Why Choose Us</h2>
				<p className="mt-3 text-black/70 dark:text-white/70">WondeTech delivers real-world value with scalable, AI-powered knowledge solutions tailored for industrial teams.</p>
			</div>
			<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{bullets.map((text) => (
					<li key={text} className="flex items-start gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4">
						<Icon />
						<span className="text-sm sm:text-base">{text}</span>
					</li>
				))}
			</ul>
			<div>
				<a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">
					Read More
				</a>
			</div>
		</section>
	);
}



