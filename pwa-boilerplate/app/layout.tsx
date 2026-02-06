import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalStyles from "@/components/GlobalStyles";
import StyledComponentsRegistry from "@/lib/registry";
import AppTheme from '../components/AppTheme';
import { MagicScriptTag } from '../../assets/js/MagicScriptTag';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA Boilerplate",
  description: "NextJS with TailwindCSS, Framer-Motion and Styled-Components | PWA Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <Head>
        <meta name="theme-color" content="#317EFB" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" sizes="192x192" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <MagicScriptTag />
      </Head>
      <AppTheme>
      <body className={inter.className}><StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
        </body>
      </AppTheme>
    </html>
  );
}
