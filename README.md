# @glamboyosa/react-stopwatch

> A small package that exposes a performant stopwatch UI component and hook.

[![NPM](https://img.shields.io/npm/v/@glamboyosa/react-stopwatch.svg)](https://www.npmjs.com/package/@glamboyosa/react-stopwatch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![React Timer Demo](demo.mov)

## Install

```bash
npm install --save @glamboyosa/react-stopwatch

#or

yarn add @glamboyosa/react-stopwatch
```

This package ships with a custom hook - `useTimer` and a `Timer` component.

## useTimer API

```tsx
const { stop, start, timerProps } = useTimer(style)
```

- `style`: An optional React CSS style object and allows you to configure the `<Timer/>` with CSS style properties like `fontSize` etc.

- `start`: A function that's used to start the timer.

- `stop`: A function that's used to stop the timer.

- `timerProps`: A collection of props spread onto the `<Timer/>` component.

## Usage

```tsx
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
```

## License

MIT © [glamboyosa](https://github.com/glamboyosa)
