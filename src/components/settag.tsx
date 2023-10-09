import styles from "../../style/settab.module.css"

/**
 * 
 * @param color: string --> set default value for color
 * @param fontsize: string --> set default value for font-size
 * @returns SetTag element 
 */
export default function SetTag({ color, fontsize }: {
  color?: string,
  fontsize?: string
}) {
  return (
    <div className={styles.settab}>
      <div className={styles.form}>
        <label>Color:</label>
        <input type="color" value={color} />
        <input autoComplete="off"/>
      </div>
      {/* <div className={styles.form}>
        <label>Font:</label>
        <button font-type="default">Default</button>
        <button font-type="serif">Serif</button>
        <button font-type="mono">Mono</button>
      </div> */}
      <div className={styles.form}>
        <label>Font-size:</label>
        <input autoComplete="off" value={fontsize} />
      </div>
    </div>
  )
}