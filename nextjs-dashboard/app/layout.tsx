import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard', 
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Course Dashboard, built with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: ['Next-js, dashboard, invoices, TypeScript'],
  openGraph: {
    title: '%s | Acme Dashboard',
    description: 'The official Next.js Course Dashboard, built with App Router',
    type: 'article',
    publishedTime: '2024-11-09T00:00:00.000Z',
    authors: 'Ulrich',
  },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
