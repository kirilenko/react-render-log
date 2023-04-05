import { FC } from 'react'
import { RenderLogProvider } from 'react-render-log'

import { Home } from '@pages/home'

import './styles/global.css'

const App: FC = () => (
  <RenderLogProvider
    colors={{
      extraRender: 'red',
      firstRender: 'green',
    }}
    debugEnabled={import.meta.env.MODE !== 'production'}
    isStrictMode={import.meta.env.MODE === 'development'}
  >
    <Home />
  </RenderLogProvider>
)

export default App
