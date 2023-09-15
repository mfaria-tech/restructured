import styles from "../../style/global.module.css"

export default function Icon({ icon }: 
  { icon: string }) {
    return <span className={styles.icon}>{icon}</span>
}