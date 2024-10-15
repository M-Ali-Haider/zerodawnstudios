import localFont from "next/font/local";
import "./globals.css";
import ReduxStoreProvider from "@/providers/ReduxProvider";
import StickyCursor from "@/components/StickyCursor";
import LenisScrollProvider from "@/providers/LenisScroll";
import { SuisseIntl } from "./fonts/fonts";
export const metadata = {
  title: "Zero Dawn Studios",
  description: "Zero Dawn Studios Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SuisseIntl.className} antialiased`}>
        <ReduxStoreProvider>
          <LenisScrollProvider />
          <StickyCursor />
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
