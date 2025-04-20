export const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  if (window.location.pathname === "/") {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  } else {
    window.location.href = "/";
    window.sessionStorage.setItem("scrollToProjects", "true");
  }
};
