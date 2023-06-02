import type { Metadata } from "next";
import type { PropsWithChildren, ReactElement } from "react";

export const metadata: Metadata = {
  title: "Marvel movies catalog"
};

const RootLayout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;