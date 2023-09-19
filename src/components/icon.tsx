import styles from "../../style/global.module.css"

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