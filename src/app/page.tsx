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

type ExperienceItem = {
  name: string;
  link: string;
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
            className="font-medium text-slate-600 underline underline-offset-2 hover:text-purple-500"
          >
            {item.name}
          </a>
          <p className="mt-2 text-slate-500">{item.description}</p>
          {index !== items.length - 1 && <div className="mt-6"></div>}
        </div>
      ))}
    </section>
  );
}

export default function HomePage() {
  const workItems = [
    {
      name: "Cleopetra",
      link: "https://cleopetra.fun",
      description:
        "Founder of Cleopetra, bringing DeFi to masses through AI powered Telegram bots and native mobile apps.",
    },
    {
      name: "CandyPay",
      link: "https://candypay.fun",
      description:
        "Prev bootstrapped CandyPay, a crypto payments platform trusted by 500+ apps & developers including Triton One, Prospera Global Network State, and more.",
    },
  ] satisfies ExperienceItem[];

  const projectItems = [
    {
      name: "AskAnon",
      link: "https://askanon.fun",
      description:
        "Send anon messages to crypto influencers straight from Twitter using blinks. 14K+ messages sent!",
    },
    {
      name: "Others",
      link: "",
      description: "Won 7+ global Solana and AI hackathons!",
    },
  ] satisfies ExperienceItem[];

  return (
    <main className="text-left">
      <h1 className="mb-4 text-2xl font-medium tracking-tighter">
        Umang Verma
      </h1>

      <p className="text-slate-500">
        I'm a 19 y/o college dropout, self taught developer turned BD and growth
        hacker, currently building fun products in the blockchain space.
      </p>

      <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExperienceSection title="work" items={workItems} />
        <ExperienceSection title="projects" items={projectItems} />
      </div>
      <h3 className="mt-8 text-xl font-medium">links</h3>
      <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-slate-500 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-orange-500"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:uv@umangverma.com"
          >
            <UpRightArrowIcon />
            <p className="ml-1 h-7">uv@umangverma.com</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-orange-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/umang_veerma"
          >
            <UpRightArrowIcon />
            <p className="ml-1 h-7">x.com</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-orange-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/umangveerma"
          >
            <UpRightArrowIcon />
            <p className="ml-1 h-7">github</p>
          </a>
        </li>
      </ul>
    </main>
  );
}
