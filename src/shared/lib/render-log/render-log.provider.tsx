import { FC, useMemo } from 'react'

import { RenderLogContext } from './render-log.context'
import { renderLogCreator } from './render-log.features'
import {
  RenderLogColors,
  RenderLogContextValue,
  RenderLogProviderProps,
} from './render-log.model'

const defaultColors: RenderLogColors = {
  extraRender: 'orange',
  firstRender: 'lightgreen',
}

export const RenderLogProvider: FC<RenderLogProviderProps> = ({
  children,
  colors = defaultColors,
  debugEnabled,
  isStrictMode,
}) => {
  const value: RenderLogContextValue = useMemo<RenderLogContextValue>(() => {
    if (!debugEnabled) {
      return () => () => {}
    }

    return (displayName: string) =>
      renderLogCreator({ cacheKey: displayName, colors, isStrictMode })
  }, [colors, debugEnabled, isStrictMode])

  return (
    <RenderLogContext.Provider {...{ value }}>
      {children}
    </RenderLogContext.Provider>
  )
}
