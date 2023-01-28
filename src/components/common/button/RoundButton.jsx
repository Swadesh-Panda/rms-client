import { Button } from '@mui/material'

const RoundButton = props => {
  const { children, ...rest } = props

  const defaultStyles = {
    textTransform: 'unset',
    fontWeight: 700,
    borderRadius: '12px',
  }

  return (
    <Button
      variant='contained'
      color='inherit'
      size='large'
      disableElevation
      sx={defaultStyles}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default RoundButton
