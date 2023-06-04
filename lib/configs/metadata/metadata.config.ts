import type { Metadata } from "next";

const data = {
  title: "Marvel movies catalog",
  description: [
    "Discover the Marvel universe through our site:",
    "the ultimate list of Marvel movies and books, all in one place. Join us now to experience the action, intrigue and magic of Marvel."
  ].join(" "),
  siteName: "Marvel's universe"
};

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  applicationName: data.siteName,

  themeColor: "#EE1D23",
  icons: "/images/marvel-icon.png",

  openGraph: {
    title: data.title,
    description: data.description,
    siteName: data.siteName,
    url: "https://marvel.romainsav.ch",
    type: "website"
  },

  twitter: {
    title: data.title,
    description: data.description
  }
};