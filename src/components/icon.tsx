import styles from "../../style/global.module.css"

/**
 * 
 * @param icon: string --> set icon to display
 * @param click: funciont --> callback from the click event
 * @param props: any --> extend attributes from the element
 * @returns Icon element
 */
export default function Icon({ icon, click, props }: { 
  icon: string,
  click?: Function,
  props?: any 
}) {
  return (
    <span 
      className={styles.icon} 
      onClick={click} {...props} >
        {icon}
    </span>
  )
}