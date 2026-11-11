import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inchbox - Website and App Blocker for Mac",
  description:
    "Inchbox is a native Mac app for blocking distracting websites and apps, running focus sessions, and protecting your attention."
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
