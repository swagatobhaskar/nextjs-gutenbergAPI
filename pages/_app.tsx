import '../styles/globals.css'
import type { AppProps } from 'next/app'

import wrapper from '../redux/store';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import BreadCrumb from '../components/container/breadCrumb';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BreadCrumb />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default wrapper.withRedux(MyApp);
