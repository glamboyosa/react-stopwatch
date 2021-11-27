import React from 'react'

import { StopWatch, useStopwatch } from '@glamboyosa/react-stopwatch'
import '@glamboyosa/react-stopwatch/dist/index.css'

const App = () => {
  const { start, stop, stopWatchProps } = useStopwatch({
    fontSize: '30px',
    justifyContent: 'center',
    alignItems: 'center'
  })
  return (
    <>
      <StopWatch {...stopWatchProps} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}

export default App
