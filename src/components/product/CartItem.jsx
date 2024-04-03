import { useState } from 'react'
// Material
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Badge,
  IconButton,
  Typography,
  Tooltip,
  ButtonGroup,
  Button,
  Slide,
  Rating,
  Snackbar,
  Alert,
} from '@mui/material'
import {
  LocalMallOutlined,
  AddRounded,
  RemoveRounded,
  LocalMall,
  AccessTimeRounded,
  CurrencyRupeeRounded,
  Close,
} from '@mui/icons-material'

const CartItem = ({product}) => {
  const { id, title, src, time, price, category } = product
  const [count, setCount] = useState(0)
  return (
    <Card sx={{ height: '120px', p: '8px' }}>
      <Stack direction='row'>
        <CardMedia
          component='img'
          sx={{ width: '130px', borderRadius: '8px' }}
          alt={title}
          image={src}
        />
        <CardContent>
          <Stack
            direction='row'
            justifyContent='space-between'
            width='1150px'
          >
            <Typography
              gutterBottom
              fontWeight={700}
              fontSize={18}
            >
              {title}
            </Typography>

            <Typography
              gutterBottom
              fontWeight={700}
              fontSize={18}
            >
              {id}
            </Typography>
          </Stack>

          <Stack
            pt
            direction='row'
            justifyContent='space-between'
          >
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ display: 'flex' }}
            >
              <AccessTimeRounded
                fontSize='small'
                sx={{ mr: '2px' }}
              />
              {time.min}-{time.max} mins
            </Typography>

            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ display: 'flex' }}
            >
              <CurrencyRupeeRounded fontSize='small' /> {price}
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  )
}

export default CartItem
