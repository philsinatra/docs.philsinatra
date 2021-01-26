import React, { FunctionComponent } from 'react'

import { useToggle } from '../hooks'

const ButtonToggleExample: FunctionComponent = () => {
  const [isOn, toggleIsOn] = useToggle()
  return <button onClick={toggleIsOn}>Turn {isOn ? 'Off' : 'On'}</button>
}

export default ButtonToggleExample
