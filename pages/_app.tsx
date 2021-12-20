import '../styles/globals.css'
import type { AppProps } from 'next/app'

import wrapper from '../redux/store';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
