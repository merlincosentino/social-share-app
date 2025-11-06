import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/store/Providers";

export const metadata: Metadata = {
  title: "Social Share",
  description: "Mini red social con Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
