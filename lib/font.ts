import { Inter, Roboto_Mono, Poppins, Tinos, Roboto } from 'next/font/google'
// import { Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// Manrope

// export const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// export const inter = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
//   variable: "--font-inter",
// });

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

// export const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   display: "swap",
//   variable: "--font-poppins",
// });

// export const timesNewRoman = localFont({
//   src: './times-new-roman.ttf',
//   variable: '--font-times',
// })

export const timesNewRoman = localFont({
  src: './times.ttf',
  variable: '--font-times',
})
