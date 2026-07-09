import React from "react"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

export const ReactIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

export const NextjsIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
    </mask>
    <g mask="url(#next-mask)">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.52L69.142 54H54V126H68.117V74.077L138.583 164.785C142.427 162.613 146.082 160.174 149.508 157.52Z"
        fill="black"
      />
      <rect x="115" y="54" width="14" height="72" fill="black" />
    </g>
  </svg>
)

export const TypescriptIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="100" height="100" rx="12" fill="currentColor" />
    <path
      d="M32 70V30H48V38H40V70H32ZM66.5 45C61.5 45 57 47.5 55 51L62 55C63 53.5 64.5 52.5 66.5 52.5C69 52.5 70.5 53.5 70.5 56V57.5C69 57 66 56.5 63 56.5C55 56.5 50.5 60.5 50.5 67.5C50.5 73.5 54.5 77.5 61.5 77.5C67.5 77.5 70.5 74.5 71.5 72.5H72V77H79.5V56.5C79.5 49 74.5 45 66.5 45ZM66.5 70.5C63.5 70.5 61.5 69 61.5 66.5C61.5 63.5 64 62.5 68.5 62.5C70 62.5 71 63 71.5 63.5V66.5C71 69.5 69.5 70.5 66.5 70.5Z"
      fill="black"
    />
  </svg>
)

export const TailwindIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10c2.93 0 5.58-1.27 7.42-3.29M12 2v20M2 12h20" />
  </svg>
)

export const NodejsIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 1.836l11.45 6.61v13.22L16 28.276 4.55 21.666v-13.22L16 1.836zm0 2.31L6.55 9.467v10.938L16 25.726l9.45-5.32V9.466L16 4.146zm-2.07 7.32h4.14v2.07h-4.14v8.28h-2.07v-8.28H7.72v-2.07h4.14v-2.07h2.07v2.07zm10.35 1.035c1.14 0 2.07.93 2.07 2.07v4.14c0 1.14-.93 2.07-2.07 2.07H20.14v2.07H18.07v-2.07c-1.14 0-2.07-.93-2.07-2.07v-4.14c0-1.14.93-2.07 2.07-2.07h4.14zm-2.07 2.07h-2.07v2.07h2.07v-2.07z" />
  </svg>
)

export const ExpressIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 10h12M4 14h18M10 6h4M14 18h4" />
  </svg>
)

export const DatabaseIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
)

export const CloudIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.01-1.2-1.89-2.22-2.5C12.7 7.8 11.4 7.5 10 7.5 7 7.5 4.5 9.7 4 12.5c-1.33.27-2.5 1.15-3 2.5C.5 16.5 1.5 19 4.5 19H17.5z" />
  </svg>
)

export const MobileIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

export const GitIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    <line x1="6" y1="9" x2="6" y2="15" />
  </svg>
)

export const UnityIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
)

export const DockerIcon = ({ size = 40, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 12h-4v-3h4v3zm-5 0h-4V7h4v5zm-5 0H7V5h5v7zm-5 0H2v1h5v-1zm1 4h14v-2H8v2zm0 4h14v-2H8v2z" />
  </svg>
)
