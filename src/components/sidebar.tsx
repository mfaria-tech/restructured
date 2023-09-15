import styles from "../../style/global.module.css"
import Icon from "./icon"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <>
        <Icon icon={"tune"} />
        <Icon icon={"code"} />
        <Icon icon={"upload"} />
      </>
    </aside>
  )
}