import React from 'react'

export default function HighVolume() {
  const handleClick = ()=>{
    const unMuteBtn = document.getElementById('unMuteBtn')
    const muteBtn = document.getElementById('muteBtn')
    const clickAudio = document.getElementById('clickAudio')
    const bgm = document.getElementById('bgm')
    if(muteBtn!==null){
      unMuteBtn.classList.add('none')
      muteBtn.classList.remove('none')
      bgm.volume = 0;
      clickAudio.volume = 0;
    }
  }
  return (
    <svg id="unMuteBtn" className='volBtn' onClick={handleClick} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>volume-glyph</title><path d="M234.67,106.67V405.33A21.33,21.33,0,0,1,200,422L99.18,341.33H64a64.07,64.07,0,0,1-64-64V234.67a64.07,64.07,0,0,1,64-64H99.18L200,90a21.33,21.33,0,0,1,34.66,16.66Zm54.11,90.68a21.33,21.33,0,0,0-1.19,30.15,42.23,42.23,0,0,1,0,57,21.33,21.33,0,1,0,31.33,29,84.89,84.89,0,0,0,0-114.94A21.34,21.34,0,0,0,288.78,197.34ZM379,137.87a21.33,21.33,0,0,0-30.78,29.54,127.61,127.61,0,0,1,0,177.19A21.33,21.33,0,1,0,379,374.14a170.26,170.26,0,0,0,0-236.27Zm60.36-60.6a21.34,21.34,0,0,0-30.55,29.79,213.59,213.59,0,0,1,0,297.9,21.34,21.34,0,0,0,30.55,29.79,256.28,256.28,0,0,0,0-357.48Z"/></svg>
  )
}
