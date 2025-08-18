export default function ContactForm() {
	return (
		<section className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
			<div className="max-w-2xl">
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Get in Touch with Us</h2>
				<p className="mt-3 text-black/70 dark:text-white/70">We are here to assist you with any inquiries about our solutions, partnerships, or tailored services for your enterprise needs.</p>
			</div>

			<form className="mt-8 max-w-2xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<label className="flex flex-col gap-1 text-sm">
						<span>First name</span>
						<input type="text" name="firstName" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300" />
					</label>
					<label className="flex flex-col gap-1 text-sm">
						<span>Last name</span>
						<input type="text" name="lastName" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300" />
					</label>
				</div>
				<label className="mt-4 flex flex-col gap-1 text-sm">
					<span>Email*</span>
					<input required type="email" name="email" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300" />
				</label>
				<label className="mt-4 flex flex-col gap-1 text-sm">
					<span>Phone</span>
					<input type="tel" name="phone" className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300" />
				</label>
				<label className="mt-4 flex flex-col gap-1 text-sm">
					<span>Message*</span>
					<textarea required name="message" rows={5} className="w-full rounded-md border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-300"></textarea>
				</label>
				<div className="mt-6">
					<button type="submit" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-indigo-400 text-slate-900 px-6 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
}


