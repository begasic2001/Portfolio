import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import {Poppins} from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  display:'swap',
  variable: '--font-poppins',
  weight: ['400','500','600','700','800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
