import '@/app/globals.css';
import ClientShell from '@/components/ClientShell';

export const metadata = {
  title: 'Automate IT Limited',
  description: 'Automate IT Limited demo site built with Next.js App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
