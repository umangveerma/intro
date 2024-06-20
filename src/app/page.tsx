import Link from "next/link";

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main>
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">
        shoubhit dash
      </h1>

      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <LocationIcon />
          <p>chennai, india</p>
        </div>

        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <WorkIcon />
          <p className="inline-flex">
            co-founder and cto @&nbsp;
            <Link
              href="https://leapflow.tech"
              className="underline underline-offset-4"
            >
              leapflow
            </Link>
          </p>
        </div>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        i&apos;m a 19 y/o cs undergrad student. i love building things and
        solving problems. i enjoy language design, web development and i live on
        the terminal. if i&apos;m not coding, i&apos;m probably doing cardistry,
        watching movies or obsessing over mechanical keyboards.
      </p>
    </main>
  );
}
