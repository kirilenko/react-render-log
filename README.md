# react-render-log

[![Testing](https://github.com/kirilenko/react-render-log/actions/workflows/test.yml/badge.svg)](https://github.com/kirilenko/react-render-log/actions/workflows/test.yml)

This package logs the rendering of components in console by debug and highlights the extra renderings.

## Installation

```bash
npm i react-render-log
```

or

```bash
yarn add react-render-log
```

## Usage

**app.tsx** (with provider as a wrapper):

```typescript jsx
import { FC } from 'react'
import { RenderLogProvider } from 'react-render-log'

import { Home } from '@pages/home'

const App: FC = () => (
  <RenderLogProvider
    debugEnabled={import.meta.env.MODE !== 'production'}
    isStrictMode={import.meta.env.MODE === 'development'}
  >
    <Home />
  </RenderLogProvider>
)

export default App
```

or
**app.tsx** (with provider as a HOC `withRenderLogProvider`):

```typescript jsx
import { FC } from 'react'
import { withRenderLogProvider } from 'react-render-log'

import { Home } from '@pages/home'

const App: FC = () => <Home />

export default withRenderLogProvider.apply(
  {
    debugEnabled: import.meta.env.MODE !== 'production',
    isStrictMode: import.meta.env.MODE === 'development',
  },
  [App],
)
```

**home.tsx** (as example of using `withRenderLog` HOC):

```typescript jsx
import { FC } from 'react'
import { withRenderLog } from 'react-render-log'

import { Smt } from '@widgets/smt'

const Home: FC = () => (
  <div>
    <Smt renderLogId="1" title="first" /> <Smt renderLogId="2" title="second" />{' '}
    home
  </div>
)

export default withRenderLog(Home)
```

By render list of the same components, you should use `renderLogId` prop (like a `key`).
In this case, the props of this component should be wrapped in `PropsWithRenderLog` type.

**smt.tsx** (as example of using `withRenderLog` HOC and `PropsWithRenderLog`):

```typescript jsx
import { FC } from 'react'
import { PropsWithRenderLog, withRenderLog } from 'react-render-log'

type Props = {
  title: string
}

const Smt: FC<PropsWithRenderLog<Props>> = ({ title }) => <div>{title}</div>

export default withRenderLog(Smt)
```

## Options for `RenderLogProvider`

- ### debugEnabled

  Type: `boolean`

  Enable debug mode.  

- ### isStrictMode

  Type: `boolean`

  Enable strict mode.  

- ### colors (optional)

  Type:

    ```typescript
    {
      firstRender: string
      extraRender: string
    }
    ```

  Customize colors. By default, they are:

  ```
  {
    firstRender: 'lightgreen',
    extraRender: 'orange',
  }
  ```

 - ### timeToLive (optional)

  Type: `number`

  Time to live for the extra renderings. By default, it is `500` ms.

## License

[MIT](https://choosealicense.com/licenses/mit/)
