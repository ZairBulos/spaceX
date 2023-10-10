import './globals.css'
import Provider from './providers'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Next SpaceX',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}