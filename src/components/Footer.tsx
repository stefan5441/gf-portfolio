import linkedinIcon from "../assets/linkedinIcon.svg";
import mailIcon from "../assets/mailIcon.svg";

export default function Footer() {
  return (
    <div className="bg-black h-28 flex items-center mt-16">
      <div className="container mx-auto text-white flex justify-between items-center">
        <div>© 2025 · Made without 🥛 becasue I'm allergic</div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sarakochovska/" rel="noreferrer" target="_blank">
            <img src={linkedinIcon} className="invert" />
          </a>
          <a href="mailto:sara_kochovska@yahoo.com" rel="noreferrer" target="_blank">
            <img src={mailIcon} className="invert" />
          </a>
        </div>
      </div>
    </div>
  );
}
