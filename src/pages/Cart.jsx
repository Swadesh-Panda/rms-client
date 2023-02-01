import React from 'react'
import { Grow, Box } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'
import { ShoppingBag } from '@mui/icons-material'

const Cart = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Box>
      <Button
        variant='contained'
        size="large"
        color='inherit'
        startIcon={<ShoppingBag/>}
        onClick={() => setChecked(!checked)}
      >
        Button
      </Button>
      <Grow in={checked}>
        <Box>Cart</Box>
      </Grow>
    </Box>
  )
}

export default Cart
