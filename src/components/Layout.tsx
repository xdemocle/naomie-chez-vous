import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className='min-h-screen flex flex-col bg-background'>
            <Header />
            <main className='flex-grow'>
              <Outlet />
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default Layout;
