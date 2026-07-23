import linkedinIcon from "../assets/icons/linkedin.svg";
import mailIcon from "../assets/icons/mail.svg";

export default function Footer({ isPhone }: { isPhone: boolean }) {
  return (
    <div className="bg-black h-28 flex items-center justify-center mt-16">
      <div className="container max-w-5xl mx-14 lg:mx-24 text-white flex justify-end md:justify-between items-center">
        {!isPhone && <div>© 2025 · Made without 🥛 because I'm allergic</div>}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/sarachambova/" rel="noreferrer" target="_blank">
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
