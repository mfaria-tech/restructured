import styles from "../../style/global.module.css"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className={styles.body}>
      <Header />
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}