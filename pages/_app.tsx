import '../styles/globals.css'
import type { AppProps } from 'next/app'

import wrapper from '../redux/store';
import Header from '../components/presentation/header';
import Footer from '../components/presentation/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} className="min-h-full relative" />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
