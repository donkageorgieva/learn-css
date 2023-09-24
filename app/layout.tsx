import ReduxProvider from "@/redux/provider";
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
      <body className={inter.className}>
        <div className="container mx-auto">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
