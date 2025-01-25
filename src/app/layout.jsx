import LenisScrollProvider from "@/providers/LenisScroll";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SuisseIntl, SwearDisplay } from "./fonts/fonts";
import "./globals.css";
export const metadata = {
  title: "Zero Dawn Studios",
  description:
    "Zero Dawn Studios is a leading digital agency focused on branding, UI/UX design, mobile and web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${SuisseIntl.className} ${SwearDisplay.variable} bg-black`}
      >
        <LenisScrollProvider>
          {children}
          <SpeedInsights />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
