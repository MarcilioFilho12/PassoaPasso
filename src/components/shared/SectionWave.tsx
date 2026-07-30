type WaveColor = "linen" | "cream" | "olive-deep";

const fills: Record<WaveColor, string> = {
  linen: "var(--linen)",
  cream: "var(--cream)",
  "olive-deep": "var(--olive-deep)",
};

type SectionWaveProps = {
  from: WaveColor;
  to: WaveColor;
};

export function SectionWave({ from, to }: SectionWaveProps) {
  return (
    <div
      aria-hidden
      className="leading-none"
      style={{ backgroundColor: fills[to] }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="block h-8 w-full md:h-10"
      >
        <path
          fill={fills[from]}
          d="M0,32 C240,0 480,48 720,24 C960,0 1200,40 1440,16 L1440,48 L0,48 Z"
        />
      </svg>
    </div>
  );
}
