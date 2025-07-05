import { SVGProps } from 'react'

// === Standalone Icon Components ===

// export const Github = (props: SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" {...props}>
//     <title>GitHub</title>
//     <path d="M12 .297c-6.63 0-12 5.373...Z" />
//   </svg>
// )

// export const Linkedin = (props: SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" {...props}>
//     <title>LinkedIn</title>
//     <path d="M20.447 20.452h-3.554...Z" />
//   </svg>
// )

// export const Mail = (props: SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 20 20" {...props}>
//     <title>Mail</title>
//     <path d="M2.003 5.884L10 9.882...Z" />
//     <path d="M18 8.118l-8 4-8-4...Z" />
//   </svg>
// )

// export const X = (props: SVGProps<SVGSVGElement>) => (
//   <svg viewBox="0 0 24 24" {...props}>
//     <title>X</title>
//     <path d="M18.901 1.153h3.68...Z" />
//   </svg>
// )

export const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Home</title>
    <path d="M15 21v-8a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v8" />
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
)

export const Blog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

export const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    <path d="M8 11h8" />
    <path d="M8 7h6" />
  </svg>
)

export const MenuOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" x2="19" y1="9" y2="9" />
    <line x1="5" x2="19" y1="15" y2="15" />
  </svg>
)

export const MenuClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    className="text-gray-800 dark:text-white"
    fill="currentColor"
    {...props}
  >
    <path d="M39.93,149.25l197.4,95.32c5.14,2.45,12,3.73,18.79,3.73s13.65-1.28,18.78-3.73l197.4-95.32c10.38-5,10.38-13.18,0-18.2L274.9,35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65,1.28-18.79,3.73L39.93,131.05C29.55,136.07,29.55,144.23,39.93,149.25Z" />
    <path d="M472.3,246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6,70.23-145.6,70.23A45.71,45.71,0,0,1,256,301.27c-6.77,0-13.65-1.29-18.78-3.74,0,0-136.85-66-143.27-69.18C87,225,85,225,78.67,228l-39,18.78c-10.38,5-10.38,13.19,0,18.2L237.1,360.3c5.13,2.45,12,3.73,18.78,3.73s13.65-1.28,18.79-3.73L472.07,265C482.68,260.08,482.68,251.92,472.3,246.9Z" />
    <path d="M472.3,362.75S436.25,345.37,431.47,343s-6.07-2.21-11.09.12S274.9,413.5,274.9,413.5a45.74,45.74,0,0,1-18.78,3.73c-6.77,0-13.65-1.28-18.79-3.73,0,0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39,18.78c-10.39,5-10.39,13.18,0,18.2l197.4,95.32c5.13,2.56,12,3.73,18.78,3.73s13.65-1.28,18.78-3.73L472.18,381C482.68,375.93,482.68,367.77,472.3,362.75Z" />
  </svg>
)

export const Search = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21 21-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
)

export const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

export const Theme = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M12 3l0 18"></path>
    <path d="M12 9l4.65 -4.65"></path>
    <path d="M12 14.3l7.37 -7.37"></path>
    <path d="M12 19.6l8.85 -8.85"></path>
  </svg>
)

export const Sun = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1" />
    <path d="M12 20v1" />
    <path d="M3 12h1" />
    <path d="M20 12h1" />
    <path d="m18.364 5.636-.707.707" />
    <path d="m6.343 17.657-.707.707" />
    <path d="m5.636 5.636.707.707" />
    <path d="m17.657 17.657.707.707" />
  </svg>
)
