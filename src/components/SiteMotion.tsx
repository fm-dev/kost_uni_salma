"use client";

import { useEffect, type ReactNode } from "react";

export default function SiteMotion({ children }: { children: ReactNode }) {
  useEffect(() => {
    // The kit changes text nodes; mount it after this page's hydration commits.
    for (const src of ["/assets/motion/motion.js", "/assets/moments/moments.js"]) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const script = document.createElement("script");
      script.type = "module";
      script.src = src;
      document.body.append(script);
    }
  }, []);

  return children;
}
