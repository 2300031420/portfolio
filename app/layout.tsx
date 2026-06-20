import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saneesh Reddy | Software Engineer",
  description:
    "Portfolio of Saneesh Reddy showcasing Full Stack, Backend, and Software Engineering projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html
  lang="en"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{const theme=localStorage.getItem('theme');if(theme==='dark'){document.documentElement.classList.add('dark');}else if(theme==='light'){document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
