import { Link } from "next-view-transitions";

function UpRightArrowIcon() {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

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

type ExperienceItem = {
  name: string;
  link: string;
  position: string;
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left">
      <h3 className="mb-6 text-xl font-medium">{title}</h3>
      {items.map((item, index) => (
        <div key={index}>
          <a
            href={item.link}
            target="_blank"
            className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          >
            {item.name}
          </a>
          <p className="mt-2">{item.position}</p>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {item.description}
          </p>
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default function HomePage() {
  const workItems = [
    {
      name: "AskAnon",
      link: "https://askanon.fun",
      position: "co-founder and cto (may 2024 - present)",
      description:
        "leading engineering to build ai agents for automating repetitive tasks in existing software",
    },
    {
      name: "CandyPay",
      link: "https://candypay.fun",
      position: "full-stack engineer (nov 2023 - jan 2024)",
      description:
        "contributed to a large-scale t3 stack app. worked on real-time presence and chat features",
    },
  ] satisfies ExperienceItem[];

  const projectItems = [
    {
      name: "create-t3-app",
      link: "https://create.t3.gg/",
      position: "creator and maintainer",
      description:
        "open-source project for initializing full-stack next.js apps. 24k+ stars, 200+ contributors",
    },
    {
      name: "spotify-voice-control",
      link: "https://github.com/nexxeln/spotify-voice-control",
      position: "creator and maintainer",
      description:
        "python-based terminal app for controlling spotify via voice commands",
    },
    {
      name: "all projects →",
      link: "https://github.com/nexxeln",
      position: "",
      description: "",
    },
  ] satisfies ExperienceItem[];

  return (
    <main className="text-left">
      <h1 className="mb-4 text-2xl font-medium tracking-tighter">
        Umang Verma
      </h1>

      <div className="mb-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
          <LocationIcon />
          <p>Kolkata, IN</p>
        </div>
      </div>

      <p className="prose prose-neutral dark:prose-invert">
        i&apos;m a 19 y/o college dropout. i love building fun products in the
        blockchain space
      </p>

      <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExperienceSection title="work" items={workItems} />
        <ExperienceSection title="projects" items={projectItems} />
      </div>
      <h3 className="mt-8 text-xl font-medium">links</h3>
      <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:uv@umangverma.com"
          >
            <p className="mr-1 h-7">email</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/umang_veerma"
          >
            <p className="mr-1 h-7">x.com</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/uveerma"
          >
            <p className="mr-1 h-7">github</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/umangveerma/"
          >
            <p className="mr-1 h-7">linkedin</p>
            <UpRightArrowIcon />
          </a>
        </li>
      </ul>
    </main>
  );
}
