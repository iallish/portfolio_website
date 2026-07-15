// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { DoubleHeader } from '@/components/Navbar';

export const metadata = {
  title: 'Ian Allish',
  description: 'Portfolio Website for Ian Allihs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript  defaultColorScheme='dark'/>
      </head>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          <DoubleHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}