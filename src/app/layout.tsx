'use client'

import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLeadFormModal } from "@/hooks/useLeadFormModal";
import LeadFormModal from "@/components/ui/lead-form-modal";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { popupOpen, setPopupOpen } = useLeadFormModal()

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
        <LeadFormModal open={popupOpen} onClose={() => setPopupOpen(false)} />
      </body>
    </html>
  );
}
