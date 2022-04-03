// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

// function useToggle() {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(!on)
//   const togglerProps = {'aria-pressed': on, onClick: toggle}

//   // 🐨 Add a property called `togglerProps`. It should be an object that has
//   // `aria-pressed` and `onClick` properties.
//   // 💰 {'aria-pressed': on, onClick: toggle}
//   return {on, togglerProps}
// }

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)
  const getToggleProps = props => ({
    'aria-pressed': on,
    onClick: toggle,
    ...props,
  })

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}
  return {on, getToggleProps}
}

// function App() {
//   const {on, togglerProps} = useToggle()
//   return (
//     <div>
//       <Switch on={on} {...togglerProps} />
//       <hr />
//       <button aria-label="custom-button" {...togglerProps}>
//         {on ? 'on' : 'off'}
//       </button>
//     </div>
//   )
// }

function App() {
  const {on, getToggleProps} = useToggle()
  return (
    <div>
      <Switch on={on} {...getToggleProps()} />
      <hr />
      <button
        aria-label="custom-button"
        {...getToggleProps({'aria-label': 'custom-button'})}
        onClick={() => console.info('onButtonClick')}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
