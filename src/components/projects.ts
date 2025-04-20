// Assets
import branditLogo from "../assets/logos/brandit-logo.svg";
import gbaLogo from "../assets/logos/gba.png";
import klerLogo from "../assets/logos/kler-logo.svg";
import magnoliaLogo from "../assets/logos/magnolia-logo.png";
import mebeldizajnLogo from "../assets/logos/mebeldizajn-logo.svg";
import sundayLogo from "../assets/logos/sunday-logo.svg";

import sundayImg from "../assets/images/sundayImg.png";
import mebelDizajnImg from "../assets/images/mebeldizajnImg.png";
import klerImg from "../assets/images/klerImg.png";
import gbaImg from "../assets/images/gbaImg.png";
import branditImg from "../assets/images/branditImg.png";
import magnoliaImg from "../assets/images/magnoliaImg.png";

import sundayFront from "../assets/videos/sunday-frontpage.mov";
import sundayFull from "../assets/videos/sunday-full.mov";
import sundayMobile from "../assets/mobile/sunday.png";
import mebelDizajnFront from "../assets/videos/mebeldizajn-front.mov";
import mebelDizajnFull from "../assets/videos/mebeldizajn-full.mov";
import mebelDizajnMobile from "../assets/mobile/mebeldizajn.png";
import klerFront from "../assets/videos/kler-front.mov";
import klerFull from "../assets/videos/kler-full.mov";
import klerMobile from "../assets/mobile/kler.png";
import gbaFront from "../assets/videos/gba-front.mov";
import gbaFull from "../assets/videos/gba-full.mov";
import gbaMobile from "../assets/mobile/gba.png";
import branditFront from "../assets/videos/brandit-front.mov";
import branditMobile from "../assets/mobile/brandit.png";
import magnoliaFront from "../assets/videos/magnolia-front.mov";
import magnoliaFull from "../assets/videos/magnolia-full.mov";
import magnoliaMobile from "../assets/mobile/magnolia.png";

// Types
export type Project = {
  showTitle: boolean;
  image: string;
  frontPageVideo: string;
  fullPageVideo: string;
  mobileImage: string;
  title: string;
  logo: string;
  url: string;
  shortUrl: string;
  myRole: string;
  pillText: string;
  description: string[];
  done: string[];
  needs: string[];
  year: number;
};

// Sunday
const sundayDescription = [
  "Sunday is a Macedonian brand specializing in handmade desserts and sweets. Their team came to us with a clear need: a website that beautifully showcases their carefully crafted product catalogue while reflecting the heart of their brand — warm, sweet, and cozy. They had already developed a detailed brand book, which served as a foundation for the visual direction of the site.",
  "As the UX/UI and web designer on the project, my role was to bring that essence online — to create an experience that made users feel like they could almost *taste* the sweets through the screen. After an in-depth briefing session with the client, it was clear that the website would function as a digital portfolio, showcasing their full range of products and offering insight into their creative process and values.",
];

const sundayNeeds = [
  "A visually inviting, user-friendly website that aligns with Sunday’s brand identity.",
  "A flexible system to manage their growing product catalogue (~50 items and counting).",
  "A customized layout for individual product pages, where the background visually references the featured dessert.",
  "A simple and scalable platform to support their long-term content and product updates.",
];

const sundayDone = [
  "Research & Discovery – Collected relevant references and website inspirations to understand the desired direction.",
  "Moodboarding – Developed a visual moodboard to align with the brand’s tone: sweet, friendly, and cozy.",
  "Wireframing in Figma – Created low-fidelity wireframes in Figma to structure the layout and user journey.",
  "Prototyping in Figma – Developed high-fidelity prototypes using the brand’s color palette, typography, and visual identity.",
  "Client Collaboration – Incorporated client feedback iteratively until a final approved version.",
  "Visual Design – Designed additional assets in Photoshop and Illustrator as needed.",
  "Development & Implementation – Built and styled the website using Webstrian with custom HTML and CSS.",
  "Product Management Integration – Integrated a product manager to manage their large product catalogue.",
  "Custom Product Page Styling – Designed individual product pages with background elements reflecting desserts.",
  "SEO Optimization – Applied best practices for search engine visibility.",
  "Domain Setup – Connected the live website to a custom domain.",
];

// Mebel Dizajn
const mebelDizajnDescription = [
  "Mebel Dizajn is a Macedonian company that specializes in high-end custom furniture and interior design solutions. Their team approached us with the goal of building a modern, professional website that reflects the luxurious and reliable nature of their brand. With a thoughtfully crafted brand book already in place, the website needed to communicate their values and showcase their expertise through strong visuals and clean design.",
  "As the UX/UI and web designer on the project, I was responsible for shaping a digital experience that would position them as a premium, trustworthy service provider. The main focus of the site was to highlight their service offerings and display a carefully curated portfolio of completed projects. The client also requested an Inspiration section to highlight the full range of styles and ideas they’re capable of delivering — not limited to finished work, but also showcasing the aesthetic direction and design potential they bring to new projects. This was designed alongside standard pages like Home, About Us, and Contact.",
];

const mebelDizajnNeeds = [
  "A sleek, modern, and luxurious-looking website that reflects the professionalism and quality of the brand.",
  "Dedicated Portfolio and Inspiration pages to present past projects and potential project ideas.",
  "Intuitive UX design, especially for navigating between similar but differently purposed sections.",
  "Clear structure to guide potential clients and collaborators through the company’s services, approach, and past work.",
];

const mebelDizajnDone = [
  "Research & Discovery – Gathered examples of well-designed websites in the furniture and interior design industry.",
  "Moodboarding – Created a moodboard that aligned with the brand’s desired feel: modern, luxurious, and trustworthy.",
  "Wireframing in Figma – Designed low-fidelity wireframes to map out user journeys across the different page types.",
  "Prototyping in Figma – Built high-fidelity prototypes incorporating brand colors, fonts, and imagery.",
  "Client Collaboration – Worked closely with the client to refine the design through feedback rounds.",
  "Visual Design – Designed supporting visual elements and layouts in Photoshop and Illustrator.",
  "UX Solution for Complex Navigation – Developed a custom inner secondary menu for deep content layers.",
  "Development & Implementation – Implemented the final design using Webstrian with custom HTML and CSS.",
  "SEO Optimization – Applied SEO best practices.",
  "Domain Setup – Connected the finished website to its custom domain.",
];

// Kler
const klerDescription = [
  "Kler is a Macedonian company specializing in high-quality hospitality products — from toiletries to sewing kits — tailored for hotels and accommodation providers. With a carefully developed brand book already in place, they approached us to create a digital presence that reflects their professionalism, attention to detail, and luxurious aesthetic.",
  "As the UX/UI and web designer on the project, my goal was to design a clean, modern platform that effectively showcases Kler’s full catalogue of products. The website needed to serve as a digital portfolio, targeting potential clients in the hospitality industry by presenting all of the products in an intuitive and visually appealing way.",
];

const klerNeeds = [
  "A modern, professional, and luxurious website to represent the Kler brand online.",
  "A clear and functional way to showcase a large catalogue of products, including bundled collections.",
  "A custom UX/UI solution for presenting product collections that contain multiple items — without overwhelming the user.",
  "Easy navigation through all product categories to support future clients during browsing and decision-making.",
];

const klerDone = [
  "Research & Discovery – Collected references and examples of effective product showcase layouts.",
  "Moodboarding – Created a moodboard that matched Kler’s luxurious and professional tone.",
  "Wireframing in Figma – Mapped out the core pages and UX flow.",
  "Prototyping in Figma – Developed high-fidelity prototypes using Kler’s brand guidelines.",
  "Client Feedback Loop – Collaborated closely with the client during the design phase.",
  "Visual Design – Created additional assets and graphics using Photoshop and Illustrator.",
  "Collection Display Solution – Designed a slider for bundled products, letting users browse collection items easily.",
  "UX Improvements with Inner Menu – Integrated an inner navigation menu for easy category browsing.",
  "Development & Implementation – Built the site using Webstrian with custom HTML and CSS.",
  "SEO Optimization – Applied SEO best practices.",
  "Domain Setup – Connected the website to Kler’s official domain.",
];

// BrandIt
const brandItDescription = [
  "BrandIt is a Macedonian marketing agency with a strong visual identity and a carefully developed brand book. Their goal for the website was to create a vibrant and modern portfolio that not only showcases their creative work but also speaks directly to future clients and collaborators.",
  "As the UX/UI designer on the project, I was tasked with crafting a website that feels playful, dynamic, and engaging — aligning with their brand’s energetic tone. The client had a clear vision and communicated their needs precisely, which made the collaboration seamless and straightforward. They also encouraged creative freedom, allowing me to experiment with layouts and motion to keep the experience visually interesting and fun.",
];

const brandItNeeds = [
  "A modern and visually engaging website that matches their brand identity.",
  "A strong portfolio section that clearly highlights their work for potential clients.",
  "A playful tone with interactive or unexpected design elements that reflect their creative agency spirit.",
  "A smooth and intuitive user experience from homepage to contact.",
];

const brandItDone = [
  "Visual Research & Exploration – Explored existing agency sites for inspiration, focusing on engaging and interactive design.",
  "Moodboarding – Built a visual direction that captured the balance between professionalism and playful creativity.",
  "Wireframing in Figma – Sketched out initial layouts to map content structure and flow.",
  "Prototyping in Figma – Created a fully interactive prototype using BrandIt’s branding to define the design tone.",
  "Collaborative Feedback Process – Worked closely with the client, applying their feedback quickly and efficiently due to their clear communication.",
  "Design Elements & Motion – Designed interactive sections and fun UI elements to bring energy to the site while staying user-friendly.",
  "Development on Webstrian – Built and styled the website on Webstrian, using HTML and CSS to apply custom design details.",
  "SEO Optimization – Ensured the site was optimized for visibility in search results.",
  "Domain Setup – Connected the final version of the website to their custom domain.",
];

// GBA
const gbaDescription = [
  "Green Build Association (GBA) is a Macedonian non-governmental organization focused on sustainable development, green architecture, and community education. They approached me with a need for a website that would act as a central hub for all their activities — including showcasing their projects, promoting upcoming events, and documenting workshops.",
  "As the UX/UI and web designer on the project, I was responsible for shaping the digital identity of the organization from the ground up. The client didn’t have a brand book or structured content — only a small logo image. This meant I had the opportunity to establish the entire visual system and layout direction for the website. The final goal was to create a modern, eco-friendly, and easy-to-navigate site that could also serve as proof of activity when applying for future grants.",
];

const gbaNeeds = [
  "A complete website design from scratch, due to the absence of branding materials.",
  "A modern and eco-conscious look and feel that aligns with the organization’s values.",
  "A simple, intuitive UX focused on easy access to projects, events, and workshops.",
  "Self-management functionality for the client to upload and update content independently.",
  "Clear content organization to ensure eligibility when applying for funding and grants.",
];

const gbaDone = [
  "Research & Inspiration – Studied eco-focused NGO websites for best practices in tone and structure.",
  "Moodboarding – Developed a visual direction that feels modern, green, and clean — aligning with the NGO’s mission.",
  "Wireframing in Figma – Created low-fidelity wireframes to map out the core content flow and user paths.",
  "Prototyping in Figma – Designed high-fidelity prototypes to define the final layout, typography, and colors.",
  "Branding From Scratch – Built a cohesive visual style (colors, icons, typography) to support the logo and create a professional, unified appearance.",
  "Content Strategy & Structure – Extracted key information from provided documents and organized it logically throughout the site.",
  "CMS Functionality – Used the blog post upload feature on Webstrian so they could easily post updates for projects, workshops, and events themselves.",
  "Navigation Design – Designed a clear menu with dedicated sections for Projects, Events, and Workshops, all accessible from the top-level navigation for better usability.",
  "Development & Implementation – Developed the site in Webstrian, customizing the layout with HTML and CSS.",
  "SEO Optimization – Implemented basic SEO practices to increase visibility.",
  "Domain Connection – Set up and connected the final website to their official domain.",
];

// Magnolia
const magnoliaDescription = [
  "Magnolia Glamour is a skincare creator with a strong presence on Instagram, boasting over 56K followers on @magnolia.glamour. The client approached me with a need for a website that would act as a centralized platform for offering custom skincare routines. Until then, everything was happening in DMs — and it was becoming difficult to manage.",
  "As the UX/UI and web designer on the project, I started with minimal resources: a logo and her Instagram profile. There was no brand book, so I analyzed her social media content and audience to build a visual style that reflected her brand personality — bold, expressive, feminine, and slightly maximalist. The result was a rich, elegant design that feels personal and luxurious, without sacrificing usability.",
];

const magnoliaNeeds = [
  "A fully custom form for users to request skincare routines, with mandatory name and email fields for better communication and organization.",
  "A bold, beautiful, and maximalist design that reflects the personality of the brand.",
  "Intuitive UX that balances visual complexity with ease of use.",
  "A website that shifts her business from Instagram-only to a more scalable system.",
  "A design that captures the attention of her already-engaged audience.",
];

const magnoliaDone = [
  "Instagram Analysis – Since no brand book existed, I reviewed her Instagram content and follower interaction to extract key branding cues (tone, aesthetic, audience preferences).",
  "Moodboarding – Created a maximalist-inspired visual direction with touches of glamour, femininity, and elegance.",
  "Wireframing in Figma – Laid out the structure of the website to ensure a smooth flow from landing to routine request.",
  "Prototyping in Figma – Designed a high-fidelity prototype that reflects her unique brand while ensuring ease of navigation.",
  "Multiple Consultations – Worked closely with the client through multiple iterations to strike the perfect balance between visual richness and user experience.",
  "Custom Form Development – Designed and implemented a detailed form with key questions and required contact fields so the creator can organize and respond efficiently.",
  "Development on Webstrian – Built the site using Webstrian, adding custom HTML/CSS to match the desired look and functionality.",
  "SEO Optimization – Made sure the site is discoverable through search engines.",
  "Domain Setup – Connected the website to her custom domain.",
];

// Project List
export const projects: Project[] = [
  {
    image: sundayImg,
    showTitle: false,
    frontPageVideo: sundayFront,
    fullPageVideo: sundayFull,
    mobileImage: sundayMobile,
    title: "Sunday",
    logo: sundayLogo,
    myRole: "UX/UI, Web designer",
    pillText: "Food & Sweets",
    shortUrl: "sunday.mk",
    url: "https://www.sunday.mk/en/",
    description: sundayDescription,
    done: sundayDone,
    needs: sundayNeeds,
    year: 2025,
  },
  {
    image: mebelDizajnImg,
    showTitle: true,
    frontPageVideo: mebelDizajnFront,
    fullPageVideo: mebelDizajnFull,
    mobileImage: mebelDizajnMobile,
    title: "Mebel Dizajn",
    logo: mebeldizajnLogo,
    myRole: "UX/UI, Web designer",
    pillText: "Furniture design",
    shortUrl: "mebeldizajn.com",
    url: "https://www.mebeldizajn.com/en/",
    description: mebelDizajnDescription,
    done: mebelDizajnDone,
    needs: mebelDizajnNeeds,
    year: 2025,
  },
  {
    image: klerImg,
    showTitle: false,
    frontPageVideo: klerFront,
    fullPageVideo: klerFull,
    mobileImage: klerMobile,
    title: "Kler",
    logo: klerLogo,
    myRole: "UX/UI, Web designer",
    pillText: "Luxury cosmetics",
    shortUrl: "kler.mk",
    url: "https://www.kler.mk/",
    description: klerDescription,
    done: klerDone,
    needs: klerNeeds,
    year: 2025,
  },
  {
    image: gbaImg,
    showTitle: true,
    frontPageVideo: gbaFront,
    fullPageVideo: gbaFull,
    mobileImage: gbaMobile,
    title: "GBA",
    logo: gbaLogo,
    myRole: "UX/UI, Web designer",
    pillText: "NGO",
    shortUrl: "gba.mk",
    url: "https://www.gba.mk/",
    description: gbaDescription,
    done: gbaDone,
    needs: gbaNeeds,
    year: 2025,
  },
  {
    image: branditImg,
    showTitle: true,
    frontPageVideo: branditFront,
    fullPageVideo: branditFront,
    mobileImage: branditMobile,
    title: "BrandIt",
    logo: branditLogo,
    myRole: "UX/UI, Web designer",
    pillText: "Marketing",
    shortUrl: "brandit.mk",
    url: "https://www.brandit.mk/",
    description: brandItDescription,
    done: brandItDone,
    needs: brandItNeeds,
    year: 2025,
  },
  {
    image: magnoliaImg,
    showTitle: true,
    frontPageVideo: magnoliaFront,
    fullPageVideo: magnoliaFull,
    mobileImage: magnoliaMobile,
    title: "Magnolia Glamour",
    logo: magnoliaLogo,
    myRole: "UX/UI, Web designer",
    pillText: "Skincare",
    shortUrl: "magnoliaglamour.mk",
    url: "https://www.magnoliaglamour.mk/",
    description: magnoliaDescription,
    done: magnoliaDone,
    needs: magnoliaNeeds,
    year: 2025,
  },
];
