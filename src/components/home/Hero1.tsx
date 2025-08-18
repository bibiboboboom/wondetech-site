export default function Hero1() {
	return (
		<section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-700 text-white">
			<div className="absolute inset-0 opacity-30" aria-hidden>
				<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
					<defs>
						<linearGradient id="hero1-g" x1="0" x2="1" y1="0" y2="1">
							<stop offset="0%" stopColor="#22d3ee" stopOpacity=".35" />
							<stop offset="100%" stopColor="#818cf8" stopOpacity=".2" />
						</linearGradient>
					</defs>
					<circle cx="120" cy="120" r="120" fill="url(#hero1-g)" />
					<circle cx="700" cy="80" r="90" fill="url(#hero1-g)" />
					<circle cx="640" cy="520" r="140" fill="url(#hero1-g)" />
				</svg>
			</div>
			<div className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">Empowering Knowledge Management</h1>
				<p className="mt-4 max-w-2xl text-white/85 text-base sm:text-lg">AI-driven solutions for smarter documentation, training, and collaboration in the oil and gas sector.</p>
			</div>
		</section>
	);
}



