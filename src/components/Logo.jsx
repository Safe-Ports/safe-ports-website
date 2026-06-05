export default function Logo({ dark = false }) {
  return (
    <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="Own Terra inicio">
      <span
        className={`grid h-10 w-10 place-items-center rounded-2xl border font-semibold transition duration-200 ${
          dark
            ? "border-white/15 bg-white text-terra-950"
            : "border-terra-200 bg-terra-950 text-white group-hover:bg-terra-800"
        }`}
      >
        OT
      </span>
      <span className="leading-none">
        <span className={`block text-sm font-semibold ${dark ? "text-white" : "text-graphite-950"}`}>
          Own Terra
        </span>
        <span className={`block text-xs ${dark ? "text-white/[0.55]" : "text-graphite-500"}`}>
          Ecosystems
        </span>
      </span>
    </a>
  );
}
