import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
