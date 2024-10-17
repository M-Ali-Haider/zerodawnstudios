import LenisScrollProvider from "@/providers/LenisScroll";
import ReduxStoreProvider from "@/providers/ReduxProvider";
import { SuisseIntl } from "./fonts/fonts";
import "./globals.css";
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
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
