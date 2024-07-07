import type { Metadata } from "next";
import "./globals.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Buy A Key`,
    description: `Support Nazareth Academy's Music Program`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
