import "~~/styles/globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { clx } from "~~/utils";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://umangverma.com"),
  title: {
    default: "Umang Verma",
    template: "Umang Verma",
  },
  description: "I'm just a builder!",
  openGraph: {
    title: "Umang Verma",
    description: "I'm just a builder!",
    url: "https://umangverma.com",
    siteName: "Umang Verma",
    locale: "en_US",
    type: "website",
    images: ["https://umangverma.com/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Umang Verma",
    card: "summary_large_image",
    creator: "@umang_veerma",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={clx(
          "bg-neutral-100 text-black dark:bg-neutral-950 dark:text-white",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <body className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
          <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
