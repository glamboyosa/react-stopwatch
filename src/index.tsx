import React, { useCallback, useRef } from 'react'
import styles from './styles.module.css'
const StopWatch = (props: any) => {
  return (
    <div className={styles.stopwatch_container} {...props}>
      <p id='hours-element'>00:</p>
      <p id='minutes-element'>00:</p>
      <p id='seconds-element'>00</p>
    </div>
  )
}

const useStopwatch = (style?: React.CSSProperties) => {
  const seconds = useRef(0)
  const minutes = useRef(1)
  const hours = useRef(1)

  let timeoutReference: NodeJS.Timeout | null = null

  let isStopwatchStarted = false
  const setHours = () => {
    if (hours.current < 10) {
      document.getElementById('hours-element')!.innerHTML = `0${hours.current}:`
    } else {
      document.getElementById('hours-element')!.innerHTML = `${hours.current}:`
    }
    hours.current += 1
  }

  const setMinutes = () => {
    if (minutes.current >= 60) {
      document.getElementById('minutes-element')!.innerHTML = `00:`
      setHours()
      minutes.current = 1
      return
    }
    if (minutes.current < 10) {
      document.getElementById(
        'minutes-element'
      )!.innerHTML = `0${minutes.current}:`
    } else {
      document.getElementById(
        'minutes-element'
      )!.innerHTML = `${minutes.current}:`
    }
    minutes.current += 1
  }

  const setSeconds = () => {
    if (seconds.current >= 60) {
      document.getElementById('seconds-element')!.innerHTML = `00`
      setMinutes()
      seconds.current = 0
      return
    }
    if (seconds.current < 10) {
      document.getElementById(
        'seconds-element'
      )!.innerHTML = `0${seconds.current}`
    } else {
      document.getElementById(
        'seconds-element'
      )!.innerHTML = `${seconds.current}`
    }
    seconds.current += 1
  }

  // start stopwatch
  const start = useCallback(() => {
    if (!isStopwatchStarted) {
      const interval = setInterval(setSeconds, 1000)

      timeoutReference = interval

      isStopwatchStarted = true
    }

    return
  }, [])

  const stop = useCallback(() => {
    if (timeoutReference) {
      clearInterval(timeoutReference)
      isStopwatchStarted = false
    }
  }, [])

  return {
    start,
    stop,
    stopWatchProps: {
      'aria-label': 'stopwatch-component',
      style: { ...style }
    }
  }
}
export { StopWatch, useStopwatch }
