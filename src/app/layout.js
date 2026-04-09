import './globals.css';
import ClientShell from '@/components/ClientShell';

export const viewport = {
  themeColor: '#0057A8',
};

export const metadata = {
  title: { default: "Dynamic Technosoft Pvt. Ltd. | Nepal's Leading ERP & IT Solutions", template: "%s | Dynamic Technosoft" },
  description: "Dynamic Technosoft is Nepal's #1 IRD-certified ERP provider. Academic ERP, Accounting ERP, Hospital ERP, HRM & Payroll, and custom software development. Serving 2,500+ clients since 2010.",
  keywords: "ERP Nepal, Academic ERP, Accounting Software Nepal, Hospital ERP, IT company Nepal, software development Kathmandu, IRD certified ERP, Dynamic Technosoft",
  openGraph: { title: "Dynamic Technosoft — Nepal's Leading IT Solutions", description: "ERP systems, web development, and IT services for 2,500+ clients.", type: "website", url: "https://www.dynamic.net.np" },
  alternates: { canonical: "https://www.dynamic.net.np" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
