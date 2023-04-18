import React, { useState, useEffect } from 'react'
import rgbToHex from "./Rtohex"

const SingleColor = ({ rgb, weight, index}) => {
    const [alert,setAlert] = useState(false);
    // convert to rgb
    let bkg = rgb.join(",");
let hex = rgbToHex(...rgb);

const copyhandle = () =>{
    setAlert(true);
    navigator.clipboard.writeText(hex);
}
    useEffect(()=>{
        const timeout = setTimeout(() =>{
            setAlert(false)
        },3000)
        return () =>{
            clearInterval(timeout);
        }
    },[alert])

  return (
    <article className={`color`} style={{backgroundColor:`rgb(${bkg})`}}
    onClick={copyhandle}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>rgb - {bkg}</p>
        <p className='color-value'>hex - {hex}</p>
        {
            alert && <p className='alert'>copied to clipboard</p>
        }
    </article>
      
  )
}

export default SingleColor
