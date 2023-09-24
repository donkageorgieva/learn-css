import "./globals.scss";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

const inter = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Flexboxy",
  description: "Resources to Learn flexbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
