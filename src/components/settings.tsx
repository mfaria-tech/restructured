import React, { useState, useRef, useEffect } from "react"
import styles from "../../style/settings.module.css"
import SetTag from "./settag";

export default function Settings() {
  const ref = useRef(null);
  const [ open, setOpen] = useState("false");
  const [ enStt, setEnStt ] = useState("");
  const [ settings, setSettings ] = useState({
    "font-family": "",
    "options": {
      "global": "true",
      "elements": "false",
      "icons": "false"
    }
  });

  function updateSettings(obj) {
    setSettings((settings) => ({
      ...settings,
      ...obj
    }));
  };

  function displaySettings(e) {
    setOpen(e.detail.open ? "true" : "false")
  }

  function activeTab(id) {
    Object.keys(settings.options)
      .forEach((el) => { settings.options[el] = "false" });
    settings.options[id] = "true";
    updateSettings(settings);
  }
  
  useEffect(() => {
    localStorage.getItem("settings");
  }, [enStt])
  
  
  if ( enStt ) {
    const buf = Buffer.from(enStt, "base64").toString("utf8");
    updateSettings(JSON.parse(buf));
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
        <span is-selected={settings.options.global} 
          onClick={() => activeTab("global")} >
          Global
        </span>
        <span is-selected={settings.options.elements} 
          onClick={() => activeTab("elements")} >
          Elements
        </span>
        <span is-selected={settings.options.icons} 
          onClick={() => activeTab("icons")} >
          Icons
        </span>
      </div>
      <div className={styles.tab} 
        tab-name="global" is-open={settings.options.global} >  
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
      <div className={styles.tab}
        tab-name="elements" is-open={settings.options.elements} ></div>
      <div className={styles.tab}
        tab-name="icons" is-open={settings.options.icons} ></div>
    </div>
  )
}