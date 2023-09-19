import { MobileMenuProvider } from '@/context/MobileMenuContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import './globals.css';

import { Open_Sans } from "next/font/google";

const open_Sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_Sans",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: 'BarberShop',
  description: 'BarberShop',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={open_Sans.className}>
        <MobileMenuProvider>
          <section className="container">
            <Header />
            <main>
              {children}
            </main>
            <Footer/>
          </section>
        </MobileMenuProvider>        
      </body>
    </html>
  )
}

export default RootLayout;
