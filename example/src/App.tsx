import React from 'react'

import { Timer, useTimer } from '@glamboyosa/react-stopwatch'
import '@glamboyosa/react-stopwatch/dist/index.css'

const App = () => {
  const { start, stop, timerProps } = useTimer({
    fontSize: '30px',
    justifyContent: 'center',
    alignItems: 'center'
  })
  return (
    <>
      <Timer {...timerProps} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

export default App
