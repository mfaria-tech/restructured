import styles from "../../style/settab.module.css"

export default function SetTag({ color, fontsize }: {
  color?: string,
  fontsize?: string
}) {
  return (
    <div className={styles.settab}>
      <div className={styles.form}>
        <label>Icon:</label>
      </div>
      <div className={styles.form}>
        <label>Color:</label>
        <input type="color" value={color} />
      </div>
      <div className={styles.form}>
        <label>Font:</label>
        <button font-type="default">Default</button>
        <button font-type="serif">Serif</button>
        <button font-type="mono">Mono</button>
      </div>
      <div className={styles.form}>
        <label>Font-size:</label>
        <input autoComplete="off" value={fontsize} />
      </div>
    </div>
  )
}