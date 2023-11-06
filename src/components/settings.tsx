import React, { useState, useRef, useEffect, ChangeEventHandler } from "react"
import styles from "../../style/settings.module.css"
import SetTag from "./settag";


/**
 * 
 * @returns Settings element
 */
export default function Settings() {
  const ref = useRef(null);
  const [ open, setOpen] = useState("false");
  const [ enStt, setEnStt ] = useState("");
  const [ settings, setSettings ] = useState({
    "options": {
      "global": "true",
      "elements": "false",
      // "icons": "false",
    },
    "global": {
      "font-family": "default",
      "font-style": {
        "bold": "b",
        "italic": "i",
        "undelined": "u",
      },
    },
  });


  /**
   * 
   * @param obj: any --> extend and update object
   */
  function updateSettings(obj: any) {
    setSettings((settings) => ({
      ...settings,
      ...obj
    }));
  };


  /**
   * 
   * @param e: any --> receive element from reference
   */
  function displaySettings(e: any) {
    setOpen(e.detail.open ? "true" : "false")
  }


  /**
   * 
   * @param id: string
   */
  function activeTab(id: string) {
    Object.keys(settings.options)
      .forEach((el) => { settings.options[el] = "false" });
    settings.options[id] = "true";
    updateSettings(settings);
  }


  /**
   * 
   * @param id: Number
   */
  function buttonFont(id: Number) {
    switch (id) {
      case 0:
        settings.global["font-family"] = "default";
        updateSettings(settings);
        break;
    
      case 1:
        settings.global["font-family"] = "mono";
        updateSettings(settings);
        break;
      
      case 2:
        settings.global["font-family"] = "serif";
        updateSettings(settings);
        break;
    }
  }

  function onChangeInput(ev: any) {
    const input = ev.target;
    console.log(input);

    
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
        {/* <span is-selected={settings.options.icons} 
          onClick={() => activeTab("icons")} >
          Icons
        </span> */}
      </div>
      <div className={styles.tab} 
        tab-name="global" is-open={settings.options.global} >  
        <div className={styles.card}>
          <h5>Font Default:</h5>
          <div className={styles.font}>
            <button className={styles.default} 
              onClick={() => buttonFont(0)} 
              is-selected={settings.global["font-family"] === "default" ? "true" : "false"}>
              <h4>Aa</h4>
              <span>Default</span>
            </button>
            <button className={styles.mono} 
              onClick={() => buttonFont(1)} 
              is-selected={settings.global["font-family"] === "mono" ? "true" : "false"}>
              <h4>Aa</h4>
              <span>Mono</span>
            </button>
            <button className={styles.serif} 
              onClick={() => buttonFont(2)} 
              is-selected={settings.global["font-family"] === "serif" ? "true" : "false"}>
              <h4>Aa</h4>
              <span>Serif</span>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <h5>Styles</h5>
          <div className={styles.styles}>
            <div className={styles.input}>
              <label>Bold:</label>
              <span>
                \
                <input 
                  id="inputBold"
                  onChange={onChangeInput} 
                  maxLength={6}
                  defaultValue={settings.global["font-style"]["bold"]} />
                &#123;
                &#125;
              </span>
            </div>
            <div className={styles.input}>
              <label>Italic:</label>
              <span>
                \
                <input 
                  id="inputItalic"
                  onChange={onChangeInput} 
                  maxLength={6}
                  defaultValue={settings.global["font-style"]["italic"]} />
                &#123;
                &#125;
              </span>
            </div>
            <div className={styles.input}>
              <label>Underlined:</label>
              <span>
                \
                <input 
                  id="inputUnderlined"
                  onChange={onChangeInput} 
                  maxLength={6}
                  defaultValue={settings.global["font-style"]["undelined"]} />
                &#123;
                &#125;
              </span>
            </div>
          </div>
        </div>
        <div className={styles.card}>

        </div>
      </div>
      <div className={styles.tab}
        tab-name="elements" is-open={settings.options.elements} >
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
      {/* <div className={styles.tab}
        tab-name="icons" is-open={settings.options.icons} >
      
      </div> */}
    </div>
  )
}