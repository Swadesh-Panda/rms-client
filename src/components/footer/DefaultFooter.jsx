import { Stack, Divider, Typography } from '@mui/material'

const DefaultFooter = props => {
  const { children, ...rest } = props

  const defaultStyles = {
    fontSize: { md: 'default', xs: '12px' },
  }

  return (
    <Stack mt='30px'>
      <Divider />
      <Typography
        sx={defaultStyles}
        textAlign='center'
        py='15px'
        {...rest}
      >
        {children}
      </Typography>
    </Stack>
  )
}

export default DefaultFooter
