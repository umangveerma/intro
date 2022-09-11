import { PageCard } from "~/components/More";
import Wrapper from "~/components/Wrapper";

const pages = [
  {
    title: "About Me",
    description:
      "More about me. How I got into coding, my other interests, etc.",
    to: "/about",
  },
  {
    title: "Acknowledgements",
    description: "People who have helped and inspired me in my journey.",
    to: "/acknowledgements",
  },
  {
    title: "Experiments",
    description: "Random experiments with new and bleeding edge tech.",
  },
  {
    title: "Shortener",
    description: "Very fast link shortener using my domain.",
    to: "/shortener",
  },
];

const MorePage = () => {
  return (
    <Wrapper title="nexxel • more" description="More things in my website">
      <h1 className="text-3xl font-bold bold-text pt-14 text-t-purple">More</h1>
      <p className="pt-1 text-slate-200">
        This page was a result of me not wanting to overpopulate the navbar.
        Mostly random things which might interest you.
      </p>

      <div className="pt-10" />

      <div className="grid grid-cols-1 gap-4 auto-cols-max sm:grid-cols-2 sm:gap-3">
        {pages.map((page) => {
          if (page.to) {
            return (
              <PageCard
                key={page.title}
                title={page.title}
                description={page.description}
                to={page.to}
              />
            );
          } else {
            return (
              <PageCard
                key={page.title}
                title={page.title}
                description={page.description}
              />
            );
          }
        })}
      </div>
    </Wrapper>
  );
};

export default MorePage;
