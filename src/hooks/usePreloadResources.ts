import { useEffect, useState } from "react";

const resourceUrls = [
  "./assets/sara-face.png",
  "./assets/sara-pfp-icon.png",
  "./assets/images/branditImg.png",
  "./assets/images/gbaImg.png",
  "./assets/images/klerImg.png",
  "./assets/images/magnoliaImg.png",
  "./assets/images/mebeldizajnImg.png",
  "./assets/images/sundayImg.png",
  "./assets/logo-lettering/logo.png",
  "./assets/logos/brandit-logo.svg",
  "./assets/logos/gba.png",
  "./assets/logos/kler-logo.svg",
  "./assets/logos/magnolia-logo.png",
  "./assets/logos/mebeldizajn-logo.svg",
  "./assets/logos/sunday-logo.svg",
  "./assets/mobile/brandit.png",
  "./assets/mobile/gba.png",
  "./assets/mobile/kler.png",
  "./assets/mobile/magnolia.png",
  "./assets/mobile/mebeldizajn.png",
  "./assets/mobile/sunday.png",
  "./assets/icons/hireme.svg",
  "./assets/icons/projects.svg",
  "./assets/icons/resume.svg",
  "./assets/linkedinIcon.svg",
  "./assets/mailIcon.svg",
  "./assets/videos/brandit.gif",
  "./assets/videos/gba-front.gif",
  "./assets/videos/gba-full.gif",
  "./assets/videos/kler-front.gif",
  "./assets/videos/kler-full.gif",
  "./assets/videos/magnolia-front.gif",
  "./assets/videos/magnolia-full.gif",
  "./assets/videos/mebeldizajn-front.gif",
  "./assets/videos/mebeldizajn-full.gif",
  "./assets/videos/sunday-front.gif",
  "./assets/videos/sunday-full.gif",
];

export default function usePreloadResources(): { loading: boolean; percentLoaded: number } {
  const [loading, setLoading] = useState<boolean>(true);
  const [percentLoaded, setPercentLoaded] = useState<number>(0);

  useEffect(() => {
    let loadedCount = 0;

    resourceUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        setPercentLoaded(Math.round((loadedCount / resourceUrls.length) * 100));
        if (loadedCount === resourceUrls.length) {
          setLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setPercentLoaded(Math.round((loadedCount / resourceUrls.length) * 100));
        if (loadedCount === resourceUrls.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  return {
    loading: loading,
    percentLoaded,
  };
}
