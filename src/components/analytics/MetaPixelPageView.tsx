"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

export function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!META_PIXEL_ID || !window.fbq) return;
    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
