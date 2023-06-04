import "@lib/styles/tailwind.css";

import type { Metadata } from "next";
import type { PropsWithChildren, ReactElement } from "react";
import { Particles } from "@lib/components/particles";

export const metadata: Metadata = {
  title: "Marvel movies catalog"
};

const RootLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <body className="bg-gray-1">
        <Particles />

        <main className="relative z-20">
          {/*  <Navbar /> */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;