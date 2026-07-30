export const gentleSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
};

export const softEase = [0.32, 0.72, 0, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};
