import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/world/aos-init";
import { DataBusFollower } from "@/components/world/data-bus-follower";

export const metadata: Metadata = {
  title: "CHANDRA | Engineering Lab",
  description: "Modern portfolio of K B Chandrashekaran - Embedded Systems, IoT, FPGA, VLSI engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AOSInit />
        <DataBusFollower />
        
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="sphere absolute w-64 h-64 -top-20 -left-20 opacity-20 animate-float" />
          <div className="sphere absolute w-96 h-96 top-1/2 -right-20 opacity-10 animate-float" style={{ animationDelay: '1s' }} />
          <div className="sphere absolute w-48 h-48 bottom-10 left-1/4 opacity-15 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
