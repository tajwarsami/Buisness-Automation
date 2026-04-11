'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ChatWidget from '@/components/ChatWidget';

export default function ClientShell({ children }) {
  return (
    <>
      <Navbar />
      <main id="main" style={{ paddingTop: '72px', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
      <ChatWidget />
      <FloatingElements />
    </>
  );
}
