import React, { useState, useRef, useEffect } from "react"
import styles from "../../style/settings.module.css"
import SetTag from "./settag";

export default function Settings() {
  const ref = useRef(null);
  const [ open, setOpen] = useState("false");

  // {
  //   "font-family": "",
  //   "elements": {
  //     "h1": 
  //   },
  // };
  let settings;
  const enStt = localStorage.getItem("settings");
  if ( enStt ) {
    const buf = Buffer.from(enStt, "base64").toString("utf8");
    settings = JSON.parse(buf);
  } else {
    settings= {
      "font-family": "",
      "options": {
        "global": true,
        "elements": false,
        "icons": false
      }
    };
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
    <div className={styles.settings} is-open={open} ref={ref} >
      <div className={styles.options}>
        <span is-selected={settings.options.global} >
          Global
        </span>
        <span is-selected={settings.options.elements} >
          Elements
        </span>
        <span is-selected={settings.options.icons} >
          Icons
        </span>
      </div>
      <details className={styles.card}>
        <summary>Heading 1</summary>
        <SetTag />
      </details>
      <details className={styles.card}>
        <summary>Heading 2</summary>
        <SetTag />
      </details>
      <details className={styles.card}>
        <summary>Heading 3</summary>
        <SetTag />
      </details>
      <details className={styles.card}>
        <summary>Heading 4</summary>
        <SetTag />
      </details>
      <details className={styles.card}>
        <summary>Heading 5</summary>
        <SetTag />
      </details>
    </div>
  )
}