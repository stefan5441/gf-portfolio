export const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const workSection = document.querySelector("#work");
  if (workSection) {
    workSection.scrollIntoView({
      behavior: "smooth",
    });
  }
};
