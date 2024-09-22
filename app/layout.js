import { Inter } from "next/font/google";
import "../component/scss/Main.scss";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sancho - The good times!",
  description:
    "Sancho the MemeCoin – the legendary sidekick you didn’t know you needed on the Solana blockchain! 🌞💰",
  openGraph: {
    images: [
      "https://res.cloudinary.com/dmlbfqbox/image/upload/v1726997092/akpo8vzt9o67tv0tnwhd.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
