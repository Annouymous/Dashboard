import type { Metadata } from "next";
import "../library/globals.css";
import { Inter } from "next/font/google";
import { AuthorProvider } from "../../Context/Author";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Commerce Dashboard - Manage Products & Sales Efficiently",
    description: "A powerful e-commerce dashboard tailored to seamlessly manage their products, track sales, and monitor performance with real-time insights."
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <AuthorProvider>
            {  
            children
            }
        </AuthorProvider>
      </body>
    </html>
  );
}
