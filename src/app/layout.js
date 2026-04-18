import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "MS Dancepiration | Inspiring Passion Through Dance",
  description: "Join MS Dancepiration Dance Academy. Professional dance training in Hip-Hop, Bollywood, Contemporary, and more. Transform your passion into performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Preloader />
        <div className="reveal-content">
          <Header />
          <main>{children}</main>
          <Footer />
          <a 
            href="https://wa.me/918431556143" 
            className="whatsapp-btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="30" />
          </a>
        </div>
      </body>
    </html>
  );
}
