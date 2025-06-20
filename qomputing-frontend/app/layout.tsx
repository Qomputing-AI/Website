// app/layout.tsx
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme'
import './globals.css';

export const metadata = {
  title: 'Qomputing',
  description: 'Quantum Tools and Ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
