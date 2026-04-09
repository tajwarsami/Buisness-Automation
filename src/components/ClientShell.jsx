'use client';
import { useState } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function ClientShell({ children }) {
  const [barClosed, setBarClosed] = useState(false);
  return (
    <>
      <AnnouncementBar onClose={() => setBarClosed(true)} />
      <Navbar barClosed={barClosed} />
      <main id="main" style={{ paddingTop: barClosed ? '72px' : '112px', minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
