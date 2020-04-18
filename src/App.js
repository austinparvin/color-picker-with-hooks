import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
  // sets random hsl() color values
  const [hue, setHue] = useState(Math.floor(Math.random() * Math.floor(360)))
  const [saturation, setSaturation] = useState(
    Math.floor(Math.random() * Math.floor(100))
  )
  const [lightness, setLightness] = useState(
    Math.floor(Math.random() * Math.floor(100))
  )
  const [alpha, setAlpha] = useState(
    Math.floor(Math.random() * Math.floor(100))
  )

  // sets random hsl() color values when button is clicked
  const randomizeColor = () => {
    setHue(Math.floor(Math.random() * Math.floor(360)))
    setSaturation(Math.floor(Math.random() * Math.floor(100)))
    setLightness(Math.floor(Math.random() * Math.floor(100)))
    setAlpha(Math.floor(Math.random() * Math.floor(100)))
  }

  const trackHue = (e) => {
    setHue(parseInt(e.target.value))
  }

  const trackSaturation = (e) => {
    setSaturation(parseInt(e.target.value))
  }
  const trackLightness = (e) => {
    setLightness(parseInt(e.target.value))
  }
  const trackAlpha = (e) => {
    setAlpha(parseInt(e.target.value))
  }

  return (
    <main>
      <section class="color">
        <h1 class="color-header">
          {(alpha < 100 ? 'hsla(' : 'hsl(') +
            hue +
            ', ' +
            saturation +
            '%, ' +
            lightness +
            '%, ' +
            alpha / 100 +
            ')'}
        </h1>
        <div className="color-background">
          <div
            style={{
              backgroundColor:
                'hsla(' +
                hue +
                ', ' +
                saturation +
                '%, ' +
                lightness +
                '%, ' +
                alpha / 100 +
                ')',
            }}
            class="color-display"
          ></div>
        </div>
        <p className="color-text"></p>
      </section>
      <section>
        <div class="slidecontainer">
          <h1>H</h1>
          <input
            onChange={trackHue}
            type="range"
            min="1"
            max="360"
            value={hue}
          />
        </div>
        <div class="slidecontainer">
          <h1>S</h1>
          <input
            onChange={trackSaturation}
            type="range"
            min="1"
            max="100"
            value={saturation}
          />
        </div>
        <div class="slidecontainer">
          <h1>L</h1>
          <input
            onChange={trackLightness}
            type="range"
            min="1"
            max="100"
            value={lightness}
          />
        </div>
        <div class="slidecontainer">
          <h1>A</h1>
          <input
            onChange={trackAlpha}
            type="range"
            min="1"
            max="100"
            value={alpha}
          />
        </div>
        <div className="randomize-button">
          <button
            style={{
              backgroundColor:
                'hsla(' +
                hue +
                ', ' +
                saturation +
                '%, ' +
                lightness +
                '%, ' +
                alpha / 100 +
                ')',
            }}
            onClick={randomizeColor}
            className="button2"
          >
            Randomize
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
