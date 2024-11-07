import LenisScrollProvider from "@/providers/LenisScroll";
import { SuisseIntl } from "./fonts/fonts";
import "./globals.css";
// import { LoadingProvider } from "./loading-context";
// import LayoutWrapper from "@/providers/layout-wrapper";
// import LoadingScreen from "@/components/LoadingScreen";
export const metadata = {
  title: "Zero Dawn Studios",
  description: "Zero Dawn Studios Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SuisseIntl.className} bg-white`}>
        {/* <LoadingProvider> */}
        {/* <LayoutWrapper> */}
        <LenisScrollProvider>
          {/* <LoadingScreen /> */}
          {children}
        </LenisScrollProvider>
        {/* </LayoutWrapper> */}
        {/* </LoadingProvider> */}
      </body>
    </html>
  );
}
