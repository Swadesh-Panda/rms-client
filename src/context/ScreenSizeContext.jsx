import React, { createContext } from 'react'

// Material
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ScreenSizeContext = createContext()

const ScreenSizeProvider = ({ children }) => {
  const theme = useTheme()
  const screenSize = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl')),
  }

  return <ScreenSizeContext.Provider value={screenSize}>{children}</ScreenSizeContext.Provider>
}

export { ScreenSizeContext, ScreenSizeProvider }
