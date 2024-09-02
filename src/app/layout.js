import { Lexend } from "next/font/google"; 
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] }); 

export const metadata = {
  title: "Cyparta",
  description: "Cyparta-task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
