import "@mantine/core/styles.css";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { DoubleHeader } from "@/components/Navbar";
import { theme } from "@/theme";

export const metadata = {
  title: "Ian Allish | MSBA & AI Candidate • Aerospace Engineer • Web Developer",
  description:
    "Portfolio of Ian Allish - Master of Science in Business Analytics and AI candidate at the University of Tennessee (Haslam College of Business), Aerospace Engineering B.S. graduate, and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <DoubleHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
