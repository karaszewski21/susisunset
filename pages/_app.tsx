import type { AppProps } from 'next/app';
import Layout from '../layouts/layouts';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="content">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
