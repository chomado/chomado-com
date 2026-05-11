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
  title: "ちょまど | Madoka Chiyoda",
  description:
    "Microsoft Cloud Developer Advocate ちょまど（千代田まどか）のポートフォリオ。登壇イベント情報・SNSリンクなど。",
  openGraph: {
    title: "ちょまど | Madoka Chiyoda",
    description: "Microsoft Cloud Developer Advocate ちょまど のポートフォリオ",
    images: ["https://avatars.githubusercontent.com/u/3405269?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
