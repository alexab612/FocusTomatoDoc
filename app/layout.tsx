import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusTomato - Website Blocker for Deep Work",
  description:
    "A polished static homepage for FocusTomato, a distraction blocker and focus timer for intentional work."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
