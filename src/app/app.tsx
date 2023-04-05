import { FC } from 'react'
import { withRenderLogProvider } from 'react-render-log'

import { Home } from '@pages/home'

import './styles/global.css'

const App: FC = () => <Home />

export default withRenderLogProvider.apply(
  {
    debugEnabled: import.meta.env.MODE !== 'production',
    isStrictMode: import.meta.env.MODE === 'development',
  },
  [App],
)
