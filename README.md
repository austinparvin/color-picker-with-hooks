# Color Picker With Hooks
# Inch-Feet-React

An HSL(a) color picker with React, but this time using React Hooks

# Objectives

- Respond to user events in React
- Use hooks in react to drive changes to a user interface
- Use props to drive inline styles to dynamically update the appearance of DOM elements
- Understand RGB vs HSL color models
- Use controlled form inputs in React

# Includes: 

- [REACT](https://reactjs.org/docs/getting-started.html)
- [HOOKS](https://reactjs.org/docs/hooks-intro.html)
- [REACT INLINE STYLES](https://reactjs.org/docs/dom-elements.html#style)

## Live Site

[LIVE SITE](https://color-picker-with-hooks-austinparvin.netlify.app/)

![Color Picker With Hooks](http://g.recordit.co/0BXlRohu6z.gif)

## Featured Code

### setState Tracking Functions

```JSX
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
 ```
 
