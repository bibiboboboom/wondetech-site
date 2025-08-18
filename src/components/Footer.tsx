export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/60 dark:text-white/60">
        <p>© {new Date().getFullYear()} WondeTech. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline underline-offset-4" href="#">Privacy</a>
          <a className="hover:underline underline-offset-4" href="#">Terms</a>
          <a className="hover:underline underline-offset-4" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}




