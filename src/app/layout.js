import localFont from "next/font/local";
import "./globals.css";
import ReduxStoreProvider from "@/providers/ReduxProvider";
import StickyCursor from "@/components/StickyCursor";

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

export const metadata = {
  title: "Zero Dawn Studios",
  description: "Zero Dawn Studios Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxStoreProvider>
          <StickyCursor />
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
