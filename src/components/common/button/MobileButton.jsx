import { useContext } from 'react'

// Material
import { Button } from '@mui/material'

// Components
import { ScreenSizeContext } from '../../../context/ScreenSizeContext'

const MobileButton = props => {
  const { children, startIcon, ...rest } = props
  const screenSize = useContext(ScreenSizeContext)

  const smallButtonStyles = {
    p: '10px',
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  }

  return (
    <Button
      startIcon={startIcon}
      sx={!screenSize.sm && smallButtonStyles}
      {...rest}
    >
      {screenSize.sm && children}
    </Button>
  )
}

export default MobileButton
