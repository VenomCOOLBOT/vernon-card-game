import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Orbitron } from "next/font/google";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 */

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vernon's Card Game",
  description: "It is Vernon's best card game in the whole entire world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
