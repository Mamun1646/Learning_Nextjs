// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../component/Layout'

function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Layout>
    <Component {...pageProps} />
    </Layout>

  </div>
  );
}

export default MyApp;
