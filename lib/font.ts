// import { Inter, Roboto_Mono, Poppins, Tinos, Roboto } from 'next/font/google'
import { Geist_Mono, Inter, JetBrains_Mono } from 'next/font/google'
// import localFont from 'next/font/local'

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// export const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

export const jetbrainMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrain-mono',
})

// export const roboto_mono = Lora({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })

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

// export const timesNewRoman = localFont({
//   src: './times.ttf',
//   variable: '--font-times',
// })

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
