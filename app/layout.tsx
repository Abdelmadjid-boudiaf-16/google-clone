import type { Metadata } from "next";
import "./globals.css";
import { Prompt } from "next/font/google";

const prompt = Prompt({ subsets: ["latin"], weight: "500" });
export const metadata: Metadata = {
  title: "Google clone app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
