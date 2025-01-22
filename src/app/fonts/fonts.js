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

export const SwearDisplay = localFont({
  src: [
    {
      path: "./Swear/Swear-Display-Bold.otf",
      weight: "700",
    },
    {
      path: "./Swear/Swear-Display-Medium.otf",
      weight: "500",
    },
    {
      path: "./Swear/Swear-Display-Regular.otf",
      weight: "400",
    },
    {
      path: "./Swear/Swear-Display-Thin-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Swear/Swear-Display-Thin.otf",
      weight: "300",
    },
  ],
  variable: "--font-swearDisplay",
});
