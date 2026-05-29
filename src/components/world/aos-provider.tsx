"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      delay: 0,
    });
    // Refresh on route changes
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
