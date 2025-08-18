import Image from "next/image";

const team = [
  { name: "Jordan Lee", title: "Head of Product", avatar: "/vercel.svg" },
  { name: "Taylor Kim", title: "Lead ML Engineer", avatar: "/vercel.svg" },
  { name: "Sam Patel", title: "Customer Success", avatar: "/vercel.svg" },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About Us</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">We build tools that turn knowledge into impact.</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Who We Are</h2>
        <p className="text-black/80 dark:text-white/80 max-w-3xl">WondeTech focuses on helping modern enterprises capture, organize, and activate knowledge. We combine robust content management with guided learning and AI to make every answer discoverable and actionable.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Our Mission and Vision</h2>
        <p className="text-black/80 dark:text-white/80 max-w-3xl">Our mission is to empower teams to learn faster and execute with clarity by connecting the right people with the right knowledge at the right time.</p>
        <p className="text-black/80 dark:text-white/80 max-w-3xl">We envision a world where institutional knowledge compounds effortlessly—where documents become training, training becomes decisions, and decisions lead to measurable outcomes.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Experts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden flex items-center justify-center">
                <Image src={member.avatar} alt={member.name} width={32} height={32} className="opacity-80" />
              </div>
              <h3 className="mt-3 font-semibold">{member.name}</h3>
              <p className="text-sm text-black/70 dark:text-white/70">{member.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}




