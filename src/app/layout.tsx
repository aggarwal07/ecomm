import type { Metadata } from "next";
import { Inter , Playfair_Display,Cinzel,Ubuntu_Mono,Sedan,Oswald} from '@next/font/google';
import "./globals.css";
import { Providers } from "@/store/provider";


const inter = Inter({ subsets: ["latin"] });
const lucky = Oswald({ subsets: ["latin"], weight : ['400'] });

export const metadata: Metadata = {
  title: "Canvify - Print Your Imagination",
  description: "We sell Wall Posters (Vinyl, Paper, 350 GSM Sheet, Canvas) , Mouse Pads , Keyboard Sticker, etc. Basically many types of printing solutions",
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
