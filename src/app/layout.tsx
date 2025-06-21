import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Login",
  description: "login page for the application",
  icons:"/icon-google.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-gray-50 min-h-screen flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
