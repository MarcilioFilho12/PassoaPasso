export function SteppingStoneDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-2 py-6 opacity-40"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block h-2 w-6 rounded-full bg-olive"
          style={{ opacity: 1 - i * 0.2 }}
        />
      ))}
    </div>
  );
}
