import LenisScrollProvider from "@/providers/LenisScroll";
import { SuisseIntl, SwearDisplay } from "./fonts/fonts";
import "./globals.css";
export const metadata = {
  title: "Zero Dawn Studios",
  description: "Zero Dawn Studios Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-transparent">
      <body className={`${SuisseIntl.className} ${SwearDisplay.variable}`}>
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
