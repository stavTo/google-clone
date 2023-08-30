import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        {children}
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
