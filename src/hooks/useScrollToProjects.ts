import { useNavigate } from "react-router-dom";

export function useScrollToProjects() {
  const navigate = useNavigate();

  return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToProjects", "true");
      navigate("/");
    }
  };
}
