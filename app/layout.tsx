import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// 미리보기(SEO) 설정만 수정
export const metadata: Metadata = {
  title: "soykko | 마케팅 전문",
  description: "안녕하세요, 마케팅 전문 soykko입니다. 영상 제작부터 광고 대행, 웹사이트 구축까지 비즈니스의 성장을 돕습니다.",
  openGraph: {
    title: "soykko | 마케팅 전문 에이전시",
    description: "안녕하세요, 마케팅 전문 soykko입니다. 영상 제작, 광고 대행, 웹사이트 구축 솔루션을 제공합니다.",
    images: [
      {
        url: "/og-image.png", // public 폴더에 이 이름으로 이미지를 넣으세요.
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}