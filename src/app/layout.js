import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "SafetyKit!!",
  description: "Oh, my god. Beautiful.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>        
         <Providers>{children}</Providers>
      </body>
    </html>
  );
}
