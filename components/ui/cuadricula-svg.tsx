export default function CuadriculaSvg() {
  return (
    <svg
      className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-full -translate-x-1/2 stroke-gray-400 [mask-image:radial-gradient(72rem_72rem_at_bottom,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="e813992c-7d03-4cc4-a2bd-151760b470a0"
          width="50"
          height="50"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M25 50V.5M.5 .5H50" fill="none"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        className="[mask-image:radial-gradient(72rem_72rem_at_top,white,transparent)]"
      ></rect>
    </svg>
  );
}
