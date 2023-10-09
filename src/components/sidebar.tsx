import styles from "../../style/global.module.css"
import Icon from "./icon"
import React, { useState } from "react"

/**
 * 
 * @returns Sidebar element
 */
export default function Sidebar() {
  const [ displayTune, setTune ] = useState(false)


  function OnClickTune() {
    setTune(!displayTune) 
    const evClickTune = new CustomEvent("onClickTune", { 
      detail: { open: displayTune }
    })
    window.dispatchEvent(evClickTune);
  }
  

  return (
    <aside className={styles.sidebar}>
      <>
        <Icon icon={"tune"} click={OnClickTune} />
        <Icon icon={"code"} />
        <Icon icon={"upload"} />
      </>
    </aside>
  )
}