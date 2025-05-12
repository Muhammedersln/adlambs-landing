import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Adlambs - Where Ads Meet Rewards",
  description:
    "AdLambs is an innovative platform that gamifies advertisements for e-commerce businesses, offering users a next-generation experience with discounts and rewards.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
