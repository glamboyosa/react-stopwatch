# @glamboyosa/react-stopwatch

> A small package that exposes a performant stopwatch UI component and hook.

[![NPM](https://img.shields.io/npm/v/@glamboyosa/react-stopwatch.svg)](https://www.npmjs.com/package/@glamboyosa/react-stopwatch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


https://user-images.githubusercontent.com/42815369/143623629-839b8519-14d4-4092-9247-ec88c6f81e8c.mov



## Install

```bash
npm install --save @glamboyosa/react-stopwatch

#or

yarn add @glamboyosa/react-stopwatch
```

This package ships with a custom hook - `useStopwatch` and a `Stopwatch` component.

## useStopwatch API

```tsx
const { stop, start, stopwatchProps } = useStopwatch(style)
```

- `style`: An optional React CSS style object and allows you to configure the `<Stopwatch/>` with CSS style properties like `fontSize` etc.

- `start`: A function that's used to start the stopwatch.

- `stop`: A function that's used to stop the stopwatch.

- `stopwatchProps`: A collection of props spread onto the `<Stopwatch/>` component.

## Usage

```tsx
import React from 'react'

import { Stopwatch, useStopwatch } from '@glamboyosa/react-stopwatch'
import '@glamboyosa/react-stopwatch/dist/index.css'

const App = () => {
  const { start, stop, stopwatchProps } = useStopwatch({
    fontSize: '30px',
    justifyContent: 'center',
    alignItems: 'center'
  })
  return (
    <>
      <Stopwatch {...stopwatchProps} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  )
}
```

## License

MIT © [glamboyosa](https://github.com/glamboyosa)
