import { Inter } from "next/font/google";
import "../component/scss/Main.scss";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sancho - The good times!",
  description:
    "Most of us degens are too caught up hunting for the 'the next banger' to handle our women's needs, whether it’s emotional or... you know, the other stuff. That’s where Sancho comes in — perfect for the typical degen who’s always grinding and just doesnt have the time to put in the work",
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
