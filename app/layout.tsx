import type { Metadata } from "next";
import "./globals.css";
import { Prompt } from "next/font/google";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";

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
      <body className={cn(prompt.className, "relative min-h-screen flex flex-col")}>
        <main className="grow">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
