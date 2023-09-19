import React, { useState, useRef, useEffect } from "react"
import styles from "../../style/settings.module.css"

export default function Settings() {
  const ref = useRef(null);
  const [ open, setOpen] = useState("false");
  const [ settings, setSettings ] = useState({
    "font-family": ""
  });

  function handleChange(e) {
    let updValue = { "font-family": e.target.value }
    setSettings(el => ({
      ...el,
      ...updValue,
    }))
  }

  function displaySettings(e) {
    setOpen(e.detail.open ? "true" : "false")
    console.log("event")
  }

  useEffect(() => {
    window.addEventListener("onClickTune", displaySettings)

    return () => {
      window.removeEventListener("onClickTune", displaySettings)
    }
  })

  return (
    <div 
      className={styles.settings}
      is-open={open} 
      ref={ref} >

    </div>
  )
}