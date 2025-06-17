// app/layout.tsx
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
