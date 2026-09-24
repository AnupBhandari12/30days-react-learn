import Link from "next/link";

export const metadata ={
  title : "30 Days React and Next.js",
  description : "Day 11 Next.js learning",
};

export default function RootLayout ({children}){
  return(
    <html lang="en">
    <body>
      <header>
        <h2>Anup's Learning Journey</h2>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about"> About</Link>
          <Link href="/contact">Contact</Link>
        </nav>


      </header>

      {children}
    </body>
    </html>
  );
}