import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "AdLambs - Reklamlar ve Ödüller Buluşuyor",
  description:
    "AdLambs, e-ticaret işletmeleri için reklamları oyunlaştıran, kullanıcılara indirim ve ödüllerle yeni nesil bir deneyim sunan yenilikçi bir platformdur.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: [
    { rel: "icon", url: "/images/logo.png" },
    { rel: "apple-touch-icon", url: "/images/logo.png" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
