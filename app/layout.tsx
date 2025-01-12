import './globals.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dr. Sadaf - Licensed Therapist',
  description: 'Professional therapy services for individuals and couples. Book your session today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}