import type { Metadata } from "next";
import { Inter , Playfair_Display,Cinzel,Ubuntu_Mono,Sedan} from '@next/font/google';
import "./globals.css";
import { Providers } from "@/store/provider";


const inter = Inter({ subsets: ["latin"] });
const lucky = Ubuntu_Mono({ subsets: ["latin"], weight : ['400'] });

export const metadata: Metadata = {
  title: "Ecomm",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body className={lucky.className}>
        <Providers>

        {children}
        </Providers>
        </body>
    
    </html>
  );
}
