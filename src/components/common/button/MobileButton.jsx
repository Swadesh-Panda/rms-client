import { IconButton } from '@mui/material'
import RoundButton from './RoundButton'

const MobileButton = props => {
  const { children, startIcon, ...rest } = props

  const defaultStyles = {
    textTransform: 'unset',
    borderRadius: '12px',
    fontWeight: 700,
    display: { xs: startIcon ? 'none' : 'flex', sm: 'flex' },
  }

  const iconButtonStyles = {
    backgroundColor: '#E0E0E0',
    borderRadius: '12px',
    '&:hover': {
      backgroundColor: '#E0E0E0',
    },
    display: { xs: 'flex', sm: children ? 'none' : 'flex' },
  }

  return (
    <>
      {children ? (
        <RoundButton
          startIcon={startIcon}
          sx={defaultStyles}
          {...rest}
        >
          {children}
        </RoundButton>
      ) : null}

      {startIcon ? (
        <IconButton
          color='inherit'
          sx={iconButtonStyles}
          {...rest}
        >
          {startIcon}
        </IconButton>
      ) : null}
    </>
  )
}

export default MobileButton
