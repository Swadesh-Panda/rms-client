import React, { useEffect } from 'react'
import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import CartItem from '../components/product/CartItem'
import cartApi from '../utils/axios/Cartapi'

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    cartApi
      .get('/products')
      .then(res => setCart(res.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <Box>
      <Stack spacing={3}>
        {cart.map(cartItem => (
          <CartItem
            id={cartItem.id}
            product={cartItem}
          />
        ))}
      </Stack>

      <Button sx={{ position: 'absolute', top: '85%', left: '45%' }}>Place Order</Button>
    </Box>
  )
}

export default Cart
