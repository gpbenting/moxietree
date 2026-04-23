import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moxietree Enterprise Limited — Software engineering consultancy, Wellington NZ",
  description:
    "Moxietree is a Wellington-based software engineering consultancy specialising in Java, Spring Boot, enterprise integration, and React for New Zealand's most demanding organisations.",
  openGraph: {
    title: "Moxietree Enterprise Limited",
    description:
      "Senior engineering for consequential systems — banking, government, data.",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-bg text-ink overflow-x-hidden leading-normal relative">
        {children}
      </body>
    </html>
  );
}
