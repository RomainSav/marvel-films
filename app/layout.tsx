import "@lib/styles/tailwind.css";

import { Navbar } from "@lib/components/navbar";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import type { PropsWithChildren, ReactElement } from "react";

export const metadata: Metadata = {
  title: "Marvel movies catalog"
};

const Particles = dynamic(() => import("@lib/components/particles/particles"), {
  ssr: false
});

const RootLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <body className="bg-gray-1">
        <Particles />

        <main className="relative z-20">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;