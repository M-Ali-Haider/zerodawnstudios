import localFont from "next/font/local";

export const SuisseIntl = localFont({
  src: [
    {
      path: "./Suisse/Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Suisse/Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Suisse/Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Suisse/Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Suisse/Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisseIntl",
});
