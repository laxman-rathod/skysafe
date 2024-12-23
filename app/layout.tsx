import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "SkySafe - Your Secure Gateway to Effortless Cloud Storage",
  description:
    "SkySafe is a secure and reliable cloud storage platform designed to safeguard your files and data. With advanced encryption, seamless file sharing, and multi-device synchronization, SkySafe ensures your digital life is always accessible and protected. Experience peace of mind with SkySafe, your trusted companion for cloud storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}
