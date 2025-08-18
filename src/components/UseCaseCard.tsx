type UseCaseCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 shadow-sm flex gap-4">
      <div className="h-10 w-10 shrink-0 rounded-md bg-foreground text-background flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70">{description}</p>
      </div>
    </div>
  );
}




