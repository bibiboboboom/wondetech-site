import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function FeatureCard({ title, description, href }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 shadow-sm hover:shadow transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-black/70 dark:text-white/70 mb-4">{description}</p>
      <div>
        <Link href={href ?? "/features"} className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4">
          Learn More
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}




