import '../styles/globals.css'
import type { AppProps } from 'next/app'

import wrapper from '../redux/store';
import Header from '../components/presentation/header';
import Footer from '../components/presentation/footer';
import BreadCrumb from '../components/container/breadCrumb';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <Component {...pageProps} className="min-h-full relative" />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
