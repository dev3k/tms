export function Logo() {
  return (
    <svg
      className="h-full w-auto text-[#14142B] dark:text-white"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 37"
    >
      <mask
        id="logo"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        style={{ maskType: "alpha" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 36.4V0h35v36.4H0Z"
          fill="currentColor"
        ></path>
      </mask>
      <g
        mask="url(#logo)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      >
        <path d="M0 35.472V22.4h6.44v13.072H0ZM0 15.871V0h6.44v15.871H0ZM28.557 9.329V0h6.441v9.329h-6.44ZM28.557 35.471v-24.27h6.441v24.27h-6.44Z"></path>
        <path d="M0 9.328V2.8h34.082v6.528H0ZM0 20.529V14h34.082v6.529H0ZM0 31.729V25.2h34.082v6.529H0Z"></path>
      </g>
    </svg>
  );
}
