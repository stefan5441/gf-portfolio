import { useEffect, useState } from "react";

// TODO: Change these Links, they are incorrect
const resourceUrls: string[] = [];

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
