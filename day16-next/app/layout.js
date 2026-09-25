import "./globals.css";
import Providers from "./providers";


export const metadata = {
  title: "Day 16 TanStack Query",
  description: "Learning TanStack Query",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
    
      <body className="min-h-full flex flex-col">
        <Providers>

        {children}
        </Providers>
        
        </body>
    </html>
  );
}
