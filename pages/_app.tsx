import "../style/reset.css"
import "../style/global.css"
import Layout from "../src/components/layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
